<template>
  <div>
    <el-button @click="addInfo">新增</el-button>
    <dialog-info :isShowDialog.sync='isShowDialog' @close='eclose'></dialog-info>
  </div>
</template>

<script>
  import {ref}  from '@vue/composition-api'
  import DialogInfo from './dialog/info'
  export default {
    components:{
      DialogInfo
    },
    setup(props,context){
         const isShowDialog = ref(false)
     const addInfo = ()=>{
        isShowDialog.value= true
     }
     const eclose = ()=>{
       isShowDialog.value=false
     }
     return{
       addInfo,
       isShowDialog,
       eclose
     }
    }
  }
</script>

<style lang="scss" scoped>

</style>