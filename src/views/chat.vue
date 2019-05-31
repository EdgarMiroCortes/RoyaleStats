<template>
  <v-content id="fff">
    <div class="titulochat">
      <h1>Chat</h1>
    </div>
    <div class="botonchat">
        <v-btn outline fab color="red" @click="login">
        <v-icon color="red">person</v-icon>
      </v-btn>
    </div>
    <div id="mensajes"></div>
    <div class="placeholderchat">
      <v-flex xs12 sm6 md3>
        <v-icon color="white" @click="enviar" class="material-icons flecha">fas fa-paper-plane</v-icon>
        <v-text-field
          id="tag"
          class="placeholderchat"
          placeholder="Your message here..."
          v-model="mensaje"
        ></v-text-field>

        <div class="text-xs-center"></div>
      </v-flex>
    </div>

    <!-- <v-flex>
      <v-text-field label="Your message here..." solo v-model="mensaje"></v-text-field>

      <v-btn outline fab color="blue" @click="enviar">
        <v-icon color="blue">fas fa-paper-plane</v-icon>
      </v-btn>
    </v-flex>-->
  </v-content>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      mensaje: ""
    };
  },
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {})
        .catch(function(error) {});
    },
    enviar() {
      let texto = this.mensaje;
      let name = firebase.auth().currentUser.displayName;
      let messagetosend = {
        nombre: name,
        mensaje: texto
      };
      console.log(messagetosend);

      firebase
        .database()
        .ref("mensajes")
        .push(messagetosend);
      this.mensaje = null;
    },
    GetMessage() {
      firebase
        .database()
        .ref("mensajes")
        .on("value", function(data) {
          console.log(data.val());

          document.getElementById("mensajes").innerHTML = "";

          for (let key in data.val()) {
            let element = data.val()[key];
            let p = document.createElement("p");
            p.append(element.mensaje);
            document.getElementById("mensajes").append(p);
          }
        });
    }
  },
  mounted() {
    this.GetMessage();
  }
};
</script>

<style>
#fff {
  padding: 0;
  background-image: url("https://userscontent2.emaze.com/images/a16de044-d648-438f-9d4d-6fdb2569d298/69cad4b7a425f8814c2753078c3fb3dd.png");
  background-repeat: repeat-y;
  font-size: 16px;
  /* padding-left: 10%;
  padding-right: 10%; */
  -webkit-text-stroke: 1px black;
  color: white;
  text-shadow: 1px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  height: 100vh;
}
.flecha {
  float: right;
  margin-top: 6%;
  text-shadow: 0;
}
.botonchat {
  margin-top: -15%;
  margin-right: 7%;
  display: flex;
  justify-content: flex-end;
}
.cabecerachat {
  margin-top: 5%;
  display: flex;
  flex-flow: row;
}
.titulochat {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}
#mensajes {
  margin-left: 5%;
  width: 90%;
  margin-top: 3%;
  margin-bottom: 3%;
  height: 65%;
  background-color: white;
  opacity: 0.6;
  border-radius: 10px;
  color: white;
  overflow-y: scroll;
}
.placeholderchat {
  width: 85%;
  margin-left: 5%;
  font-size: 12px;
}
</style>
