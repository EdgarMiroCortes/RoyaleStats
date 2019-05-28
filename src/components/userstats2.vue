<template>
    <v-container v-if="datos.length != 0" id="fff">
    <h2 class="titulo">User Stats</h2>
    <br>
    <p class="nombretag">
      {{datos.name}}
      <a class="tag">#{{datos.tag}}</a>
    </p>
    <p>
      Trophies
      <img
        class="imgcopas"
        src="https://pngimage.net/wp-content/uploads/2018/05/copa-clash-royale-png-6.png"
      >
    </p>
    <div class="textomini">
      <p>Actual: <a class="derecha">{{datos.trophies}}</a></p>
      <p>Maximo: <a class="derecha">{{datos.stats.maxTrophies}}</a></p>
    </div>
    <div id="ffff">
    <p>Stats <img class="imgcopas" src="https://cdn.statsroyale.com/images/battle.png"></p>
    </div>
    <div class="textomini">
      <p>Victorias: <a class="derecha">{{datos.games.wins}}</a></p>
      <p>Derrotas: <a class="derecha">{{datos.games.losses}}</a></p>
      <p>Donaciones: <a class="derecha">{{datos.stats.totalDonations}}</a></p>
    </div>
    <div class="mazo">
      <v-img
        v-for="carta in datos.currentDeck"
        :key="carta.name"
        class="foto-carta"
        :src="carta.icon"
      ></v-img>
    </div>
<p>Elixir Cost: 2'8</p>

    <div block>
      <v-btn block color="blue" dark to="/Cofres">Chest Info</v-btn>
      <v-btn block color="blue" dark  @click="enviar">Clan Info</v-btn>
    </div>
    <br><br>
  </v-container>
</template>

<script>
export default {
 props: ["id"],
  data() {
    return {
    };
  },
  methods: {
    enviar(){
    this.$store.commit("tagclan", this.datos.clan.tag);
    this.$router.push("/clan");
  }
  },
  created() {
    this.$store.dispatch("getDatos");
  },
  
  computed: {
    datos() {
      return this.$store.getters.getAlldatos;
    },
      tagclan(){
    return this.$store.getters.gettagclan;
  }
  }
};
</script>

<style scoped>
#ffff{
  flex-flow: row;
  align-items:baseline;
}
.derecha{
  float: right;
  margin-right: 5%; 
}
.nombretag {
  text-align: center;
}
.tag {
  font-size: 10px;
}
.textomini {
  font-size: 12px;
}
.imgcopas {
  margin-bottom: -6px;
  width: 9%;
  height: 9%;
}
.titulo {
  text-align: center;
}
#fff {
  background-image: url("https://userscontent2.emaze.com/images/a16de044-d648-438f-9d4d-6fdb2569d298/69cad4b7a425f8814c2753078c3fb3dd.png");
  background-repeat: repeat-y;
  font-size: 16px;
  padding-left: 10%;
  padding-right: 10%;
    -webkit-text-stroke: 1px black;
   color: white;
   text-shadow:
       1px 2px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}
/* .mazo {
    display: flex;
  flex-flow: row;
  } */

.foto-carta {
  width: 17%;
  height: 17%;
  margin-left: 2%;
  margin-right: 2%;
}
.mazo {
  display: flex;
  flex-wrap: wrap;
}
.v-text-field input {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    line-height: 20px;
    padding: 8px 0 8px;
    max-width: 100%;
    min-width: 0px;
    width: 100%;
    color: aqua;
}
</style>
