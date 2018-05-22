<template>
  <div class="index-container">
    <div class="index-card" @click="changePage('test')">
      <Card style="width:320px">
        <div style="text-align:center">
          <h3>首页</h3>
        </div>
      </Card>
    </div>
    <div class="index-card" @click="changePage('file')">
      <Card style="width:320px">
        <div style="text-align:center">
          <h3>文件</h3>
        </div>
      </Card>
    </div>

    <router-view></router-view>


  </div>

</template>
<script>


  export default {
    data() {
      return {

      }
    },

    computed: {


    },
    methods: {
      changePage(msg) {
        this.$router.push({name: msg})
      }

    },
    components: {


    }
  }
</script>

<style>

  .index-container{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
  }

  .index-card{
    position: relative;
    width: 200px;
    height: 100px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

  }

</style>
