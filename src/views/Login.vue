<template>
  <div class="login">
    <div>登陆</div>
    
  </div>
</template>

<script>
import { reactive, ref, toRefs, isRef, onMounted, onUpdated, onUnmounted ,onBeforeMount,onBeforeUpdate,onBeforeUnmount, onErrorCaptured} from "@vue/composition-api";
import {getUserList} from '@/api/login'
export default {
  name: "login",
  setup(props, context) { // 代替 beforeCreate create
    // data数据 生命周期 自定义函数
    context.attrs;
    context.slots;
    context.emit;
    context.parent;
    context.root;
    context.refs;
    onBeforeMount(()=>{
       console.log('onBeforeMount!')
    })
    onMounted(() => {
    getUserList()
    })
    
  }
};
</script>
<style lang="scss" scoped>
.login {
  .zhou {
    font-size: 50px;
  }
  .active {
    color: #fff;
  }
}
</style>
