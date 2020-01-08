<template>
  <div class="slide">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in list" :key="item.img">
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      list: [
        {
          url: "#abc",
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3150190709,815795903&fm=26&gp=0.jpg"
        },
        {
          url: "#bsbsb",
          img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg"
        },
        {
          url: "#sjfkajfj",
          img:
            " https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg "
        },
        {
          url: "#sjfkajfja",
          img:
            " https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2841247860,2911841437&fm=26&gp=0.jpg "
        },
        {
          url: "#kjljj",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3256017245,1323379507&fm=26&gp=0.jpg "
        }
      ]
    };
  }
};
</script>
<style scoped>
img{
  width: 100%;
}
</style>

