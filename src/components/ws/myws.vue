<template>
  <div></div>
</template>

<script>
  export default {
    data() {
      return {
        ws: null
      }
    },
    created() {
      this.doRun()
    },
    methods: {
      doRun(){
        try {
          if ('WebSocket' in window) {
            this.ws = new WebSocket("ws://localhost:8080/lab1/websocket/socketServer");
            console.log("正在使用websocket");
          }
        } catch (e) {
          alert('捕捉new WebSocket异常');
          return;
        }
        this.ws.onopen = this.onOpen;
        this.ws.onmessage = this.onMessage;
        this.ws.onerror = this.onError;
        this.ws.onclose = this.onClose;
      },
      onOpen(e) {
        alert('connect success!');
      },

      onMessage(e) {
        alert(e.data);
      },

      onError(e) {
        alert("error " + e);
      },

      onClose(e) {
        alert("connect closed:" + e.code);
      },
      //点击发送
      doSend() {
        if (ws.readyState == ws.OPEN) {
          var msg = document.getElementById("inputMsg").value;
          ws.send(msg);//调用后台handleTextMessage方法
          alert("发送成功!");
        } else {
          alert("连接失败!");
        }
      },
      //点击关闭
      doClose() {
        this.ws.close();
      }
    }
  }
</script>

<style scoped>

</style>
