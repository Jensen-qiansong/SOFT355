<template>
  <div class="websocket">
    <!--     <label for>
      匿名用户:
      <el-tr id="webTable" v-model="table" />
    </label>

    <br />-->
    <!-- <label for>
      匿名评论:
      <el-input style="width:300px;margin-top:20px" id="webText" v-model="text" />
    </label>-->
    <!-- <el-button @click="click">点击</el-button> -->
    <div id="margin">
          <el-input id="sendMsg" style="width:300px;" v-model="text" type="text" />
    <el-button id="submitBtn">send</el-button>
    <div id="mydiv"></div>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      table: ""
    };
  },
  mounted() {
    this.websocket();
  },
  methods: {
    websocket() {
      //Display the chat content on the page
      function showMessage(str, type) {
        var div = document.createElement("div");
        div.innerHTML = str;
        if (type == "enter") {
          div.style.color = "blue";
        } else if (type == "leave") {
          div.style.color = "red";
        }
        document.getElementById("mydiv").appendChild(div);
      }
      //Create a new websocket
      var websocket = new WebSocket("ws://localhost:3101");
      //Open the websocket connection
      websocket.onopen = function() {
        console.log("Connected to the server   ----");
        document.getElementById("submitBtn").onclick = function() {
          var txt = document.getElementById("sendMsg").value;
          if (txt) {
            //Send data to the server
            websocket.send(txt);
          }
        };
      };
      //Close the connection
      websocket.onclose = function() {
        console.log("websocket close");
      };
      //Receive the data returned by the server
      websocket.onmessage = function(e) {
        var mes = JSON.parse(e.data);
        showMessage(mes.data, mes.type);
      };
      /*     if (window.WebSocket) {
        var ws = new WebSocket("ws://localhost:8001");

        ws.onopen = function(e) {
          console.log("连接服务器成功");
          // 向服务器发送消息
            let webText = document.getElementById("webText").value;
          ws.send(webText);
        };
        ws.onclose = function(e) {
          console.log("服务器关闭");
        };
        ws.onerror = function() {
          console.log("连接出错");
        };
        // 接收服务器的消息
        ws.onmessage = function(e) {
          let message = "message:" + e.data + "";
          console.log(message);
          let webText = document.getElementById("webText").value;
          console.log(webText);
          //   let tr = document.createElement("tr");
          let webTable = document.getElementById("webTable");
          webTable.innerHTML += webText;

          //   document.getElementById('webTable').innerHTML = "webText"
        };
      }
    } */
    }
  }
};
</script>
<style scoped>
.websocket {
 margin:  165px ;
}
#margin {
     margin: 0 auto;
    width: 500px;
}
</style>