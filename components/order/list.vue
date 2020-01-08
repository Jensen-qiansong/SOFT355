<template>
  <div class="m-order">
    <ul>
      <li v-if="cur.length">
        <el-row v-for="(item,idx) in cur" :key="idx">
          <el-col :span="4">
            <img :src="item.img" alt />
          </el-col>
          <el-col :span="10">
            <h4>{{item.name}}</h4>
            <p>Number: {{item.count}}</p>
          </el-col>
          <el-col :span="4">Total price:${{item.total}}</el-col>
          <el-col :span="6">{{item.statusTxt}}</el-col>
        </el-row>
      </li>
      <li v-else class="empty">No order</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    cur: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>