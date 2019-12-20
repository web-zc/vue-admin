<template>
  <div @click="setCount">我是子组件{{msg}}</div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
export default {
  props: {
    zc: String
  },
  setup(props,{root}) {
  const setCount = ()=>{
    root.$store.dispatch('setCount')
  }
  const msg = computed(()=>{
     return root.$store.state.app.zc
  })
  return{
    msg,
    setCount
    
  }
   
  }
};
</script>

<style lang="scss" scoped>
</style>