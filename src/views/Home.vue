<template>
  <div class="home">
    <h1 v-loading='loading'>欢迎使用</h1>
    <div>
      <h4 >组件</h4>
      <ds-button @click.native="showMessbox">我是messbox按钮</ds-button>
    </div>
      <div>
      <h4 >指令</h4>
      <ds-button @click.native="showLoading">我是loading指令按钮</ds-button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'home',
    data(){
      return {
        loading:false
      }
    },
    methods:{
      showLoading(){
        this.loading = true
      },
      showMessbox(){
        this.$messbox({
         context: '用户会话过期，请重新登录'
        }, () => {
            console.log('我被调用了')
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    h1{
      text-align: center;
    }
</style>