<template>
  <div>
   我是控制台
   <test zc='我是传个子组件的' />
  </div>
</template>

<script>
 import test from './test'
  export default {
    components:{
      test
    }
  }
</script>

<style lang="scss" scoped>
 
</style>