<template>
  <div class="m-geo">
    <i class="el-icon-location"/>{{ $store.state.geo.position.city }}
    <nuxt-link
      class="changeCity"
      to="/changeCity">Switching cities</nuxt-link>
    [London,London]
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
