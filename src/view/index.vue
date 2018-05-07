<template>
  <div class="layout">
      <div class="header"></div>
      <div class="menu">
        <div class="item" @click="demo('')">推荐</div>
        <div class="item" @click="demo('chathub')">聊天</div>
        <div class="item" @click="demo('video')">视频</div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    <div class="test1"></div>
    <ws></ws>
      <footer class="layout-copy">
        2017-2018 &copy; kolin
      </footer>
  </div>

</template>
<script>
  import notice from '../components/notice';
  import badge from '../components/badge';
  import Footer from "iview/src/components/layout/footer";

  export default {
    data() {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      demo(pageName){
        this.$router.push({name: pageName})
      }
    },
    components: {
      Footer,
      notice,
      badge
    }
  }
</script>

<style>
  .header {

  }
  .menu {
    height: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid #b2b2b2;
    display: flex;
    justify-content: space-between;

  }
  .item {
    flex: 1;
  }
  .content {
    width: 100%;
    height: 800px;
    border-bottom: 1px solid #b2b2b2;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>
