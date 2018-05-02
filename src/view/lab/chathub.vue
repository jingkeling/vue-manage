<template>
  <div>
    <div class="sidebar">

    </div>
    <div class="container">

      <div class="chatRow">
        <div>
          <img class="user_image" src="../../assets/image/chathub/user1.jpeg" width="50" style="border-radius: 50%" alt="">
        </div>
        <div class="arrow"></div>
        <div>
          <div class="chatName">柯铃</div>
          <div class="chatContent">
            54615415458451651616161651616165156156666666666666666666666666666666666666665461541545845165161616165161616515615666666666666666666666666666666666666666
          </div>
        </div>
      </div>

      <div v-for="obj,key in objs" :class="['chatRow',obj.userid === '01'?'chatRow-me':null]" v-bind:key="key">
        <div>
          <img class="user_image" :src="obj.image" width="50" style="border-radius: 50%" alt="">
        </div>
        <div :class="['arrow',obj.userid === '01'?'arrow-me':null]"></div>
        <div>
          <div :class="['chatName',obj.userid === '01'?'chatName-me':null]">dad</div>
          <div :class="['chatContent',obj.userid === '01'?'chatContent-me':null]">
            {{obj.message}}
          </div>
        </div>
      </div>

    </div>
    <div style="position: absolute;top: 83%;left: 20%;">
      <i-input style="width:488px;" v-model="message" placeholder="请输入..."></i-input>
      <Button type="primary" @click="mychat">发送</Button>
    </div>
    <div style="position: absolute;top: 90%;left: 20%;">
      <i-input style="width:488px;" v-model="messageyou" placeholder="请输入..."></i-input>
      <Button type="primary" @click="youchat">模拟别人发送</Button>
    </div>
  </div>
</template>

<script>
    import image from '../../assets/image/chathub/user2.jpg';
    export default {
        name: "chathub",
        data(){
          return {
            message:'',
            messageyou: '',
            objs:[

            ]
          }
        },
        methods:{
          mychat() {
            this.objs.push({message:this.message,image,userid:"01"});
          },
          youchat(){
            this.objs.push({message:this.message,userid:"02"});

          }
        }

    }

</script>

<style>
  * {
    word-break: break-all
  }
  body {
    background-color: #f2f3ff;
  }

  .container {
    position: absolute;
    left: 20%;
    width: 550px;
    height: 80%;
    background-color: #d6d6d6;
    overflow: auto;/*让它出现滚动条*/
    border: 2px solid #a6a6a6;
    border-radius: 10px;


  }
  .chatRow {
    margin-top: 10px;
    display: flex;
    align-items: flex-start;

    width: 100%;
  }
  .chatRow-me {
    flex-direction: row-reverse;
  }
  /*聊天内容div*/
  .chatContent {
    background-color: #fff;
    padding: 10px;
    max-width: 250px;
    min-height: 30px;
    border-radius: 6px;
    background-color: rgba(137, 198, 40, 0.9);
  }
  /*
          .chatContent-you::after {
              content: '';
              left: -100%;
              position: relative;
              border-width: 15px; !*尖的尺寸*!
              border-style: solid;
              border-color: transparent rgba(137, 198, 40, 0.7) transparent transparent ;!*给颜色谁三角形就在哪边*!

          }*/

  .chatContent-me{

  }

  .user_image {
    margin-top: 25px;
  }

  /*小箭头*/
  .arrow {
    border-width: 8px; /*尖的尺寸*/
    border-style: solid;
    /*border-color: transparent rgba(137, 198, 40, 0.7) transparent transparent ;!*给颜色谁三角形就在哪边*!*/
    margin-top: 45px;
    border-color: transparent rgba(137, 198, 40, 0.9) transparent transparent ;/*给颜色谁三角形就在哪边*/

  }
  .arrow-me {
    border-color: transparent transparent transparent rgba(137, 198, 40, 0.9);/*给颜色谁三角形就在哪边*/
  }

  .chatName {
    margin-top: 20px;
    color: #a6a6a6;
    font-family: "微软雅黑", "Microsoft Yahei";
    font-size: 13px;
  }
  .chatName-me {
    text-align: right;

  }

  /*--------左侧-------*/
  .sidebar {
    position: absolute;
    width: 18%;
    height: 693px;
    background: #292c32;
    border-radius: 10px;
  }
</style>

