<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>All categories</dt>
      <dd @mouseenter="mouseenter" v-for="(item,idx) in menu" :key="idx">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,idx) in curdetail.child">
        <h4 :key="idx">{{item.title}}</h4>
        <!-- child 是kind的第二个child -->
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          name: "Delicious food",
          type: "food",
          child: [
            {
              title: "Delicious food",
              child: ["Voucher", "dessert drink", "hot pot", "buffet", "snack"]
            }
          ]
        },
        {
          name: "Take-out food",
          type: "takeout",
          child: [{ title: "Take-out food", child: ["Take-out food"] }]
        },
        {
          name: "Hotel",
          type: "hotel",
          child: [
            {
              title: "Hotel Star",
              child: [
                "Economic",
                "comfortable / Samsung",
                "high-end / four-star",
                "luxury / five-star"
              ]
            }
          ]
        },
        {
          name: "Hazel fruit Hostel",
          type: "homestay",
          child: [
            {
              title: "Hot cities",
              child: [
                "Shanghai",
                "Chengdu",
                "Beijing",
                "Chongqing",
                "Nanjing",
                "Hangzhou",
                "Guangzhou",
                "Xi'an",
                "Dalian"
              ]
            }
          ]
        },
        {
          name: "Film",
          type: "movie",
          child: [
            {
              title: "Film",
              child: [
                "Film",
                "Film",
                "Film",
                "Film",
                "Film",
                "Film",
                "Film",
                "Film",
                "Film"
              ]
            },
            {
              title: "Popular Cinema",
              child: [
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema",
                "Popular Cinema"
              ]
            }
          ]
        },
        {
          name: "Air / train tickets",
          type: "airport",
          child: [
            { title: "Air tickets", child: ["Air tickets", "Air tickets"] },
            { title: "train", child: ["train tickets"] }
          ]
        },
        {
          name: "Recreation&Entertainment",
          type: "ktv",
          child: [
            {
              title: "休闲娱乐",
              child: [
                "Recreation ",
                "Recreation",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Recreation ",
                "Entertainment",
                "Entertainment",
                "Entertainment",
                "Entertainment",
                "Entertainment"
              ]
            },
            { title: "KTV", child: ["KTV"] }
          ]
        },
        {
          name: "Life service",
          type: "life",
          child: [
            {
              title: "Life service",
              child: [
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service",
                "Life service"
              ]
            }
          ]
        },
        {
          name: "Beauty  cosmetology",
          type: "hair",
          child: [
            {
              title: "Beauty",
              child: [
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing",
                "hairdressing"
              ]
            }
          ]
        },
        {
          name: "Wedding photography ",
          type: "marry",
          child: [
            {
              title: "Wedding",
              child: [
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding",
                "Wedding"
              ]
            }
          ]
        },
        {
          name: "Parent child Education",
          type: "offspring",
          child: [
            { title: "Parent", child: ["Parent", "Parent"] },
            {
              title: "Parent",
              child: [
                "Parent",
                "Parent",
                "Parent",
                "Parent/Parent",
                "Parent",
                "Parent"
              ]
            },
            {
              title: "Parent",
              child: ["Parent", "Parent", "Parent", "Parent"]
            },
            {
              title: "Parent",
              child: [
                "Parent",
                "Parent",
                "Parent",
                "Parent",
                "Parent",
                "Parent",
                "Parent",
                "Parent",
                "Parent"
              ]
            }
          ]
        },
        {
          name: "Fitness / Fitness Center",
          type: "sport",
          child: [
            {
              title: "fitness",
              child: [
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness",
                "Sports fitness"
              ]
            }
          ]
        },
        {
          name: "Home decoration ",
          type: "furniture",
          child: [
            {
              title: "Decoration design",
              child: [
                "Decoration design",
                "Decoration design",
                "Decoration design"
              ]
            },
            {
              title: "Decoration design",
              child: [
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design"
              ]
            },
            {
              title: "Decoration design",
              child: [
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design",
                "Decoration design"
              ]
            }
          ]
        },
        {
          name: "Learning and training ",
          type: "study",
          child: [
            {
              title: "Learning",
              child: [
                "Learning",
                "Learning",
                "Learning",
                "Learning",
                "Learning",
                "Learning",
                "Learning"
              ]
            },
            {
              title: "Vocational Technology",
              child: [
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology"
              ]
            },
            {
              title: "Foreign language training",
              child: [
                "language",
                "language",
                "language",
                "language",
                "language",
                "language",
                "language",
                "language",
                "language"
              ]
            },
            {
              title: "Decoration design",
              child: [
                "Decoration design",
                "Decoration design",
                "Decoration design"
              ]
            }
          ]
        },
        {
          name: "Medical health",
          type: "health",
          child: [
            {
              title: "health",
              child: ["health", "health", "health", "health", "health"]
            },
            {
              title: "health",
              child: [
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health",
                "health"
              ]
            },
            { title: "Pets", child: ["Pets", "Pets"] }
          ]
        },
        {
          name: "Bar / Room Escape",
          type: "bar",
          child: [
            {
              title: "Room Escape",
              child: [
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape",
                "Room Escape"
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curdetail: function() {
      /* 过滤数据 */
      return this.menu.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    mouseleave: function() {
      let self = this;
      /* 延时处理 */
      self._timer = setTimeout(() => {
        self.kind = "";
      }, 150);
    },
    mouseenter: function(e) {
      this.kind = e.target.querySelector("i").className;
    },
    sover: function() {
      clearInterval(this._timer);
    },
    sout: function() {
      this.kind = "";
    }
  }
};
</script>
<style lang="css" >
</style>