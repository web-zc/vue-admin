<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item,index) in routes">
        <el-submenu  :key="item.id" v-if="!item.hide" :index="index+''">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.meta.name}}</span>
          </template>
          <el-menu-item
            v-for="(itemChild,indexChild) in item.children"
            :key="itemChild.id"
            :index="itemChild.path"
          >{{itemChild.meta.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";

export default {
  setup(props, { root }) {
    // data数据
    const isCollapse = ref(false);
    const routes = reactive(root.$router.options.routes);
    console.log(routes);

    // 方法
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routes
    };
  }
};
</script>

<style lang="scss" scoped>
#nav-wrap {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background: #344a5f;
}
</style>