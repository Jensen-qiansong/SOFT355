<template>
  <div class="page-order">
    <el-row>
      <el-col :span="4" class="navbar">
        <h3>My electricity supplie</h3>
        <dl>
          <dt>My order</dt>
          <dd>
            Full payment
            <i class="el-icon-arrow-right"></i>
          </dd>
          <dd>
            Pending payment
            <i class="el-icon-arrow-right"></i>
          </dd>
          <dd>
            To be used
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
        <dl>
          <dt>My collection</dt>
          <dd>
            Collection merchants
            <i class="el-icon-arrow-right"></i>
          </dd>
          <dd>
            Collection merchants
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
        <dl>
          <dt>Voucher</dt>
          <dd>
            Voucher
            <i class="el-icon-arrow-right"></i>
          </dd>
          <dd>
            Invalid certificate
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
        <dl>
          <dt>Personal information</dt>
          <dd>
            Account settings
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
      </el-col>
      <el-col :span="19" class="table">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="All orders" name="all">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="Pending payment" name="unpay">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="To be used" name="unuse">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="To be evaluated" name="unreplay">
            <list :cur="cur" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from "../components/order/list";
export default {
  components: {
    List
  },
  data() {
    return {
      activeName: "all",
      list: [],
      cur: []
    };
  },
  watch: {
    activeName: function(val) {
      this.cur = this.list.filter(item => {
        if (val === "unpay") {
          return item.status === 0;
        } else if (val === "all") {
          return true;
        } else {
          return false;
        }
      });
    },
    list: function() {
      let val = this.name;
      this.cur = this.list.filter(item => {
        if (val === "unpay") {
          return item.status === 0;
        } else if (val === "all") {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    handleClick: function(tab) {
      this.activeName = tab.name;
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, list }
    } = await ctx.$axios.post("/order/getOrders");
    if (status === 200 && code === 0 && list.length) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "/logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "Pending payment" : "Paid"
          };
        }),
        cur:list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "/logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "Pending payment" : "Paid"
          };
        }),
      };
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/order/index.scss";
</style>
