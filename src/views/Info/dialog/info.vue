<template>
  <div>
    <el-dialog title="提示" :visible.sync="isShowDialog_z" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="isShowDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { ref, watch } from "@vue/composition-api";
export default {
  props: {
    isShowDialog: {
      type: Boolean,
      default: false
    }
  },

  setup(props, ctx) {
    const isShowDialog_z = ref(false);
    const close = () => {
      ctx.emit("update:isShowDialog", false);
      //  ctx.emit('close',false)
    };
    watch(() => {
      isShowDialog_z.value = props.isShowDialog;
    });
    return {
      isShowDialog_z,
      close
    };
  }
};
</script>

<style lang="scss" scoped>
</style>