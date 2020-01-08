<template>
  <div class="m-life">
    <el-row>
      <el-col :span="24">
        <slider />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "./slider.vue";
export default {
  components: {
    Slider
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
