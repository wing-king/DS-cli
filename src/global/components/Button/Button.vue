<template >
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name:'ds-button',
        data(){
            return {
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    .btn{
        overflow: hidden;
        outline: none;
        display: flex;
        border-radius: 20px;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #fafa00;
        background: #ef4264;
        color: #fff;
    }
</style>