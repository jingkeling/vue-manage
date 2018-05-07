import Vue from 'vue';
import vuex from 'vuex'


Vue.use(vuex);


export default new vuex.Store({
  modules: {

    //专门聊天的模块
    modChat:{

      //状态
      state: {
        chatArr:[]
      },

      //直接管理state
      mutations:{
        _getMessage(state, {content, username}){
          let chatRow = {content, username};
          state.chatArr.push(chatRow);
        },
        _sendMessage(state, {content, username}) {
          let chatRow = {content, username};
          state.chatArr.push(chatRow);
        }

      },
      //操控mutations
      actions: {
        //这个由websocket的onMessage事件里触发
        getMessage(context, {content, username}) {
          context.commit('_getMessage',{content, username})
        },
        //这个由'我'发送消息时手动触发
        sendMessage(context, {content, username}) {
          context.commit('_sendMessage',{content, username})
        }
      },
      //有页面获取数据进行渲染
      getters: {
        showChat(state) {
          return state.chatArr;
        }
      }
    },
  }



})
