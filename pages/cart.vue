<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="cart.length" :span="24" class="m-cart">
        <list :cart-data="cart" />
        <p>
          Amount payable:
          <em class="money">￥{{ total }}</em>
        </p>
        <div class="post">
          <el-button type="primary" @click="submit">place order</el-button>
        </div>
      </el-col>
      <el-col v-else class="empty">Shopping cart is empty</el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/cart/list.vue";
export default {
  components: {
    List
  },
  data() {
    return {
      cart: []
    };
  },
  computed: {
    total() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  },
  methods: {
    submit: async function() {
      let {
        status,
        data: { code, id }
      } = await this.$axios.post("/order/createOrder", {
        count: this.cart[0].count,
        price: this.cart[0].price,
        id: this.cartNo
      });
      if (status == 200 && code === 0) {
        this.$alert(`Congratulations, the order has been placed successfully, order No:${id}`, "checkout success", {
          confirmButtonText: "Determine",
          callback: action => {
            location.href = "/order";
          }
        });
      }
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: {
        code,
        data: { name, price }
      }
    } = await ctx.$axios.post("/cart/getCart", {
      id: ctx.query.id
    });
    if (status === 200 && code === 0 && name) {
      return {
        cart: [
          {
            name,
            price,
            count: 1
          }
        ],
        cartNo: ctx.query.id
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss";
.page-cart {
  margin-top: 160px;
}

</style>
