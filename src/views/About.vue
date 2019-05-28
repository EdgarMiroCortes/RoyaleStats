<template>
  <v-container id="fff" fluid>
    <v-container class="info">
      <h1 class="qwerty">Clash Royale Stadistics</h1>
      <p
        class="descinicio"
      >See all your stats, upcoming chests, top decks, and comunity recomendations. Try it introducing your #TAG, and enjoy it!</p>
      <v-flex xs12 sm6 md3>
        <v-icon color="white" @click="send" class="material-icons flecha">arrow_forward_ios</v-icon>
        <v-text-field id="tag" class="idinput" placeholder="Your #TAG" v-model="tag2"></v-text-field>
        
        <div class="text-xs-center">
        </div>
      </v-flex>
    </v-container>
    <v-container fluid class="banner">
      <v-img class="imgking" src="king3.png"></v-img>

    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tag2: ""
    };
  },
  methods: {
    send() {
      this.$store.commit("settag", this.tag2);
      this.$router.push("/userstats");
    }
  },
  computed: {
    tag() {
      return this.$store.getters.gettag;
    }
  }
};
</script>

<style scoped>


/* .letrablanca{
  color: white;
} */
.input {
  color: white;
}
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
.qwerty {
  text-align: center;
  font-size: 24px;
}
.descinicio {
  padding-top: 7%;
  text-align: center;
  font-size: 12px;
}
#fotoking {
  width: 80%;
  height: 80%;
  margin: auto;
}
.kingreducido {
  width: 100%;
  height: 100%;
}
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: white;
  text-transform: uppercase;
}
.imgking {
  width: 100%;
  height: 100%;
}
.banner {
  padding: 0;
}
.info {
  padding: 16px;
}
@media only screen and (max-width: 959px) {
  .container {
    padding: 0;
  }
  .banner {
    padding: 0;
  }
  .info {
    padding: 16px;
  }

.flecha {
  float: right;
  margin-top: 6%;
  text-shadow: 0;
}
  .theme--light.v-input:not(.v-input--is-disabled) input,
  .theme--light.v-input:not(.v-input--is-disabled) textarea {
    color: rgba(255, 255, 255, 0.733);
  }
.theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
    color: white;
}
}
</style>
