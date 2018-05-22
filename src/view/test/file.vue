<template>
  <div class="file-container">

    <input type="file" value="" id="file" multiple="multiple" @change="upLoadFile">
  </div>
</template>

<script>
    export default {
      methods:{
        upLoadFile(e){
          alert(e);
          console.log(e);

          let url = "http://localhost:8080/file/upload";
          let formData = new FormData();
          formData.append("file", e.target.files[0], "美女头像.jpg");
          let request = new Request(url, {
            method: 'POST',
            credentials: 'include',
            body: formData
          });
          fetch(request).then(function (res) {
            return res.text();
          }).then(function (data) {
            console.log(data);
          }).catch(function (e) {
            console.log(e);
          })
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
