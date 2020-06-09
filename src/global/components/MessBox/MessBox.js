import messboxComponent from './MessBox.vue'
const MessBox = {
  install(Vue,options) {
    const Constructor = Vue.extend(messboxComponent) //创建一个messbox子实例
    let currentMsg;
    const initInstance = () => {
      // 实例化vue实例
      currentMsg = new Constructor();
      let msgBoxEl = currentMsg.$mount().$el;
      document.body.appendChild(msgBoxEl);
    };
    // document.body.appendChild(instance.$el) //添加到body中
    //绑定到vue原型上，以供全局使用
    Vue.prototype.$messbox = (msg, confirmSure = () => {}) => {
      if (!currentMsg) {
        initInstance();
      }
        let option = {
            leftButton: '取消',
            rightButton: '确定'
        }
        currentMsg.option = Object.assign(option,msg) //需要显示的信息
        currentMsg.show = true //在调用messbox时显示组件
        currentMsg.confirmSure = confirmSure //点击关闭的时候触发的回调函数
    }
  }
}

export default MessBox