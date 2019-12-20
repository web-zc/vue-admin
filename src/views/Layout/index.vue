<template>
  <div id="layout">
    <LayoutHeader/>
    <LayoutNav/>
    <LayoutMain/>
  </div>
</template>

<script>
import LayoutMain from '@/views/Layout/Components/Main'
import LayoutHeader from '@/views/Layout/Components/Header'
import LayoutNav from '@/views/Layout/Components/Nav'

  export default {
    name:'layout',

    components:{
      LayoutMain,
     LayoutHeader,
     LayoutNav
    }
  }
</script>

<style lang="scss" scoped>
#layout{
  height: 100%;
}
</style>