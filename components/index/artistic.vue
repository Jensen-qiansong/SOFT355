<template>
  <section class="m-istyle">
    <dl @mouseenter="over">
      <dt>Style</dt>
      <dd :class="{active:kind==='all'}" v-show="true" kind="all" keyword="景点">whole</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">Dating dinner</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">Movie performance</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">Happy outing</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <a href="/products">  <img :src="item.img" class="image" /></a>
        
          <ul class="cbody">8
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <nuxt-link to="products"></nuxt-link>
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.price }}</em>
              <span>/rise</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: "all",
      list: {
        all: [
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          }
        ],
        part: [
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          },
          {
            title: "Login",
            pos: "school",
            price: Math.ceil(Math.random() * 400),
            img:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4241604714,2099545311&fm=26&gp=0.jpg",
            url: "//abc.com"
          }
        ],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    cur: function() {
      return this.list[this.kind];
    }
  },
  /*  async mounted() {
    let self = this;
    let {
      status,
      data: { count, pois }
    } = await self.$axios.get("/search/resultsByKeywords", {
      params: {
        keyword: "景点",
        city: self.$store.state.geo.position.city
      }
    });
    if (status === 200 && count > 0) {
      let r = pois
        .filter(item => item.photos.length)
        .map(item => {
          return {
            title: item.name,
            pos: item.type.split(";")[0],
            price: item.biz_ext.cost || "No time",
            img: item.photos[0].url,
            url: "//abc.com"
          };
        });
      self.list[self.kind] = r.slice(0, 9);
    } else {
      self.list[self.kind] = [];
    }
  }, */
  methods: {
    over: async function(e) {
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      let self = this;
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
        let keyword = dom.getAttribute("keyword");
        let {
          status,
          data: { count, pois }
        } = await self.$axios.get("/search/resultsByKeywords", {
          params: {
            keyword,
            city: self.$store.state.geo.position.city
          }
        });
        if (status === 200 && count > 0) {
          let r = pois
            .filter(item => item.photos.length)
            .map(item => {
              return {
                title: item.name,
                pos: item.type.split(";")[0],
                price: item.biz_ext.cost || "暂无",
                img: item.photos[0].url,
                url: "//abc.com"
              };
            });
          self.list[self.kind] = r.slice(0, 9);
        } else {
          self.list[self.kind] = [];
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
