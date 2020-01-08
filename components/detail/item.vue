<template>
  <li v-if="meta.photos.length" class="m-detail-item">
    <dl class="section">
      <dd>
        <img :src="meta.photos[0].url" :alt="meta.photos[0].title" />
      </dd>
      <dd>
        <h4>{{ meta.name }}</h4>
        <p>
          <span
            v-if="meta.biz_ext&&meta.biz_ext.ticket_ordering"
          >Surplus:{{ Number(meta.biz_ext.ticket_ordering) }}</span>
          <span v-if="meta.deadline">closing date:{{ meta.deadline }}</span>
        </p>
        <p>
          <span class="price">{{ Number(meta.biz_ext.cost) }}</span>
          <sub>Store price{{ Number(meta.biz_ext.cost) }}</sub>
        </p>
      </dd>
      <dd>
        <el-button type="warning" round @click="createCart">Rush to buy</el-button>
      </dd>
    </dl>
  </li>
</template>

<script>
export default {
  data(){
    return {
       meta: {
        photos: [
          {
            url:
              "http://file02.16sucai.com/d/file/2015/0408/779334da99e40adb587d0ba715eca102.jpg"
          }
        ],
        cost: 888,
        name: "MUSIC",
        biz_ext: 6,
        deadline: 99,
        biz_ext: {
          ticket_ordering: 6655,
          cost: 99
        }
      }
    }
  },
  /* props: {
    meta: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }, */
  methods: {
    createCart: async function () {
      let self = this;
      let {
        status,
        data: {
          code,
          id
        }
      } = await this.$axios.post('/cart/create', {
        params: {
          id: Math.random().toString().slice(3, 9),
          detail: {
            name: self.meta.name,
            price: self.meta.biz_ext.cost,
            imgs: self.meta.photos
          }
        }
      })
      if(status===200&&code===0){
        window.location.href=`/cart/?id=${id}`
      }else{
        console.log('error')
      }
    }
  }
}
</script>

<style lang="scss">
</style>
