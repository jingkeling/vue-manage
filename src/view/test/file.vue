<template>
  <div class="file-container">

    <input type="file" value="" id="file" multiple="multiple" @change="upLoadFile">
    <span>{{uploadStatus}}</span>

    <!--手动保存-->
    <button @click="download">下载</button>
    <button @click="download1">下载1</button>

    <!--点下载自动放到img-->
    <img id="img" src="" width="200px" height="200px" alt="">

    <!--直接放到img地址-->
    <img id="img1" width="200px" height="200px" src="http://localhost:8080/file/download" alt="可以直接把服务端response文件流的接口地址放在这">
    <span>{{status}}</span>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          uploadStatus: '',
          status: ''
        }
      },
      methods:{
        upLoadFile(e){
          alert(e);
          this.uploadStatus = "上传中...";
          let url = "http://localhost:8080/file/upload";
          let formData = new FormData();
          let files = e.target.files;
          for (let i = 0; i < files.length; i++) {
            formData.append("file", files[i]);
          }
          let request = new Request(url, {
            method: 'POST',
            credentials: 'include',
            body: formData
          });
          fetch(request).then(res => {
            res.text()
          }).then(function (data) {
            console.log(data);
          }).catch(function (e) {
            console.log(e);
          })
          this.uploadStatus = "上传完成";

        },

        download() {
          let url = "http://localhost:8080/file/download";
          const $this = this;
          this.status = '文件下载中...';
          fetch(url).then(res => {
            res.blob().then(blob => {
              let a = document.createElement('a');
              //获取响应头失败
              let filename = res.headers.get("Content-Disposition");
              console.log(res.headers);
              res.headers.forEach(function (val) {
                console.log(val);
              });
              let url = window.URL.createObjectURL(blob);
              a.href = url;
              a.download = filename;
              a.click();
              window.URL.revokeObjectURL(url);
              $this.status = "下载完成";
            })
          })
        },
        download1(){
          let myImage = document.querySelector('img');

          let url = "http://localhost:8080/file/download";
          const $this = this;
          this.status = '文件下载中...';
          fetch(url).then(function(response) {
            console.log(response.headers); // returns a Headers{} object
            response.blob().then(function(myBlob) {
              let objectURL = URL.createObjectURL(myBlob);
              myImage.src = objectURL;
            });
          });
        }
      }
    }
</script>

<style scoped>

  .file-container{
    position: absolute;;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #eeeeee;
  }

</style>
