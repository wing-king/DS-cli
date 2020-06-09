<template>
  <div v-show="visible" class="loading-wrap">
    <div class="container">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  }
};
</script>
<style lang="scss" scoped>
.loading-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.container {
  height: 100px;
  text-align: center;
  margin-top: 200px;
}
.circle {
  margin: 10px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: inline-block;
  transform: scale(0);
  animation: bulge 2s infinite ease-in-out;
}
.circle::after {
  position: absolute;
  display: inline-block;
  content: "";
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: inherit;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scale(1);
  animation: blow 2s infinite ease-in-out;
}
.circle:nth-child(1) {
  background-color: #ef4264;
  opacity: 1;
  animation-delay: 0s;
}
.circle:nth-child(2) {
  background-color: #ef4264;
  opacity: 0.8;
  animation-delay: 0.25s;
}
.circle:nth-child(3) {
  background-color:#ef4264;
  opacity: 0.6;
  animation-delay: 0.5s;
}
@keyframes bulge {
  50% {
    transform: scale(1);
  }
}
@keyframes blow {
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
