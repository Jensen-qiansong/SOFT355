<template>
<div>
  <dl class="s-item">
    <dt v-for="(item,index) in meta" :key="index">
      <img :src="item.img" alt />
      <p>  {{ item.name }}</p>
    </dt>
    <dd>
      <h3>
        <nuxt-link :to="{path:'detail',query:{keyword:meta.name,type:meta.module}}">{{ meta.name }}</nuxt-link>
      </h3>
      <el-rate v-model="meta.rate" :colors="['#ff9900', '#ff9900', '#FF9900']" disabled />
      <span v-if="meta.rate>4" class="s-item-comment">very good</span>
      <span v-else-if="meta.rate>3" class="s-item-comment">commonly</span>
      <span v-else class="s-item-comment">Very bad</span>
      <span class="s-item-value">{{ meta.rate }}branch</span>
      <span class="s-item-comment-total">{{ meta.comment }}Human comments</span>
      <p>
        <span class="s-item-type">{{ meta.type }}</span>
        <span class="s-item-addr">{{ meta.addr }}</span>
      </p>
      <p>
        <em class="s-item-price">￥{{ meta.price }}rise</em>
        <b>{{ meta.status }}</b>
      </p>
      <ul>
        <li>
          <span class="detail-type">Admission ticket</span>
          {{meta.ticket}}
        </li>
        <li>
          <span class="detail-type">Follow the regiment</span>
          {{meta.group}}
        </li>
        <li v-if="meta.scene&&meta.scene.length">
          <span class="detail-type">Scene wine</span>
          {{ meta.scene }}
        </li>
        <li v-else>
          <span class="detail-type">Scene wine</span>No description
        </li>
      </ul>
    </dd>
  </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: [
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2783990041,446209535&fm=26&gp=0.jpg",
          name: "LONDON"
        }
      ]
    };
  }
  /* props: {
    meta: {
      type:Object,
      default(){
        return {}
      }
    }
  } */
};
</script>
<style scoped>
.s-item {
  position: absolute;
  top: 500px;
  background: red;
}
</style>
