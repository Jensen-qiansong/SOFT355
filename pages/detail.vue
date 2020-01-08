<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <crumbs
          :keyword="keyword"
          :type="type"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summa :meta="product"/>
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>Group purchase and discount</h3>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <list
          v-if="login"
          :list="list"/>
        <div
          v-else
          class="deal-need-login">
          <img
            src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
            alt="">
          <span>Please log in to see the detailed group purchase offer</span>
          <el-button
            type="primary"
            round>
            <a href="/login">Login immediately</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from '@/components/detail/crumbs.vue';
import Summa from '@/components/detail/summary.vue'
import List from '@/components/detail/list.vue'
export default {
  components:{
    Crumbs,
    Summa,
    List
  },
  computed:{
    canOrder:function(){
      return this.list.filter(item=>item.photos.length).length
    }
  },
  async asyncData(ctx){
    let {keyword,type}=ctx.query;
    let {status,data:{product,more:list,login}}=await ctx.$axios.get('/search/products',{
      params:{
        keyword,
        type,
        city:ctx.store.state.geo.position.city
      }
    })
    if(status===200){
      return {
        keyword,
        product,
        type,
        list,
        login
      }
    }else{
      return {
        keyword,
        product:{},
        type,
        list:[],
        login:false 
      }
    }
  }
}
</script> 

<style lang="scss">
  @import "@/assets/css/detail/index.scss";
  .page-detail{
    margin-top: 160px;
  }
  
</style>
