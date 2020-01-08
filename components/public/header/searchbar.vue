<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <nuxt-link to="/" >
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg"
            alt
          />
        </nuxt-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="Enter what you like"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
          <dl v-if="isHotPlace" class="hotPlace">
            <dt>Popular search</dt>
            <dd v-for="(item,idx) in hotPlace" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item)">{{ item }}</a>
            </dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(item,idx) in searchList" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in hotPlace"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item)"
          >{{ item }}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">Take-out food</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">movie</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">hotel</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">Homestay</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">Merchant entry</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">Withdraw at any time</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">No form for dissatisfaction</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: ['LondonA',"LondonB","LondonC","LondonD","LondonE"],
      searchList: []
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus: function() {
      this.isFocus = true;
    },
    blur: function() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input: _.debounce(async function() {
      let self = this;
      let city = self.$store.state.geo.position.city.replace("市", "");
      self.searchList = [];
      let {
        status,
        data: { top }
      } = await self.$axios.get("/search/top", {
        params: {
          input: self.search,
          city
        }
      });
      self.searchList = top.slice(10, 20);
    }, 300)
  }
};
</script>

<style lang="css">
</style>
