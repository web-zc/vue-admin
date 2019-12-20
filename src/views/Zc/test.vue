<template>
  <div>我是子组件{{ plusOne}}</div>
</template>

<script>
import { ref, computed } from "@vue/composition-api";
export default {
  props: {
    zc: String
  },
  setup() {
    const count = ref(1);
    const plusOne = computed({
  get: () => count.value + 1,
  set: val => { count.value = val - 1 }
})
// plusOne.value =4
    return {
      plusOne
    };
  }
};
</script>

<style lang="scss" scoped>
</style>