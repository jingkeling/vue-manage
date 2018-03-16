<template>
  <div id="main">
    <Input style="width: 200px" placeholder="请填写登录名" v-model="name"/>
    <Button type="primary" @click="login" >登录</Button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: 'keling'
      }
    },
    methods: {
      login() {
        let url = "http://localhost:8080/lab1/user/login/"+this.name;
        axios.post(url)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  #main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
