<template>
  <div class="m-products-list">
    <dl>
      <dd
      style="width:150px"
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.acitve?'s-nav-active':'']"
        @click="navSelect"
      >{{ item.txt }}</dd>
    </dl>
    <ul v-for="(item,idx) in meta" :key="idx">
      <div class="listMeta">
        <img :src="item.img" alt />
        <p>{{ item.name }}</p>
        <li>
          <!-- <nuxt-link to="/">Snapped up</nuxt-link> -->
          <a href="/detail">Snapped up</a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Item from "./product";
export default {
  components: {
    Item
  },
  data() {
    return {
      meta: [
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "LONDON",
          title: "LONDON"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "DSDFG",
          title: "LONDON"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "ASDFG",
          title: "LONDON"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "ASDFG",
          title: "LONDON"
        },
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "ASDFG",
          title: "LONDON"
        }
      ],
      nav: [
        {
          name: "s-default",
          txt: "Intelligent sorting",
          acitve: true
        },
        {
          name: "s-price",
          txt: "Lowest price",
          active: false
        },
        {
          name: "s-visit",
          txt: "Highest popularity",
          active: false
        },
        {
          name: "s-comment",
          txt: "Highest evaluation",
          active: false
        }
      ]
    };
  },
  async asyncData({ app }) {
    let { data } = await app.$axios.get("searchList");
    return { items: data.list };
  },
  methods: {
    navSelect: function() {
      console.log("select");
    }
  }
};
</script>
<style scoped>
.listMeta {
  width: 800px;
  margin: 0 auto;
  height: 220px;
  border-bottom: 1px solid #ccc;
}
img {
  width: 200px;
  border: 1px solid #666;
  padding: 2px;
  height: 190px;
}
.listMeta p {
  cursor: pointer;
  margin-left: 50px;
  padding: 5px 0;
  color: #666;
}
.listMeta p:hover{
  color: red;
}
.listMeta li{
  float: right;
  margin-top: -90px;
  border: 1px solid orange;
  border-radius: 10px;
  font-size: 25px;
  padding: 5px;
}
</style>
