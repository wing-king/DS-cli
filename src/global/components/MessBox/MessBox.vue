<template>
  <transition name="messbox-fade">
    <div class="ht-message" v-if="show">
      <div class="ht-model" @click="close"></div>
      <div class="ht-message-box">
        <div class="ht-message-header">
          <i class="iconfont icon-error ht-message-close" @click="close"></i>
        </div>
        <div class="ht-message-body">{{option.context}}</div>
        <div class="ht-message-footer">
          <slot name="footer">
              <div class="ht-message-btn" @click="sure">{{option.rightButton}}</div>
              <div class="ht-message-btn" @click="close">{{option.leftButton}}</div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "messbox",
  props: {
    option: {
      type:  Object,
      default() {
        return {
          title: "",
          context: "",
          rightButton: "",
          leftButton: "",
          style:{}
        };
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    sure() {
      this.show = false;
      this.confirmSure();
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style scoped lang="scss">
.messbox-fade-enter-active,
.messbox-fade-leave-active {
  transition: opacity 0.3s;
}
.messbox-fade-enter,
.messbox-fade-leave-to {
  opacity: 0;
}
.ht-message {
  .ht-model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    background: rgba(0, 0, 0, 0.5);
  }
  .ht-message-box {
    position: fixed;
    width: 80%;
    top: 50%;
    left: 50%;
    z-index: 501;
    background-color: #fff;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 5px 10px;
    .ht-message-body {
      text-align: center;
      font-size: 18px;
      color: #333;
    }
    .ht-message-header {
      height: 30px;
      .ht-message-close {
        float: right;
        padding: 5px 10px;
        margin: -5px -10px;
        cursor: pointer;
        color: #666;
      }
    }
    .ht-message-footer {
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .ht-message-btn {
        margin: 40px auto 30px;
        padding: 0 10px;
        width: 30%;
        height: 40px;
        font-size: 18px;
        color: #fff;
        background-color: #ff3f47;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
