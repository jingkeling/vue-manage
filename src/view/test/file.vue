<template>
  <div class="file-container">

    <input type="file" value="" id="file" multiple="multiple" @change="upLoadFile">


    <button @click="download">下载</button>
    <button @click="download1">下载1</button>

    <img id="img" src="" alt="">
    <span>{{status}}</span>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          status: ''
        }
      },
      methods:{
        upLoadFile(e){
          alert(e);
          console.log(e);

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
        },

        download() {
          let url = "http://localhost:8080/file/download";
          const $this = this;
          this.status = '文件下载中...';
          fetch(url).then(res => {
            res.blob().then(blob => {
              let a = document.createElement('a');
              let url = window.URL.createObjectURL(blob);
              let filename = res.headers.get("Content-Disposition");
              console.log(res.headers);
              let host = res.headers.get("Date");
              console.log(host);
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
