<template>
<v-content id="fff" v-if="datoscards.length != 0">
  <div class="titulocards">
    <h1>CARDS!</h1>
  </div>
    <div  class="cardmiembros" v-for="card in datoscards.cards" :key="card.name">
        <v-card block @click="go" class="botonmiembro" color="rgba(0, 0, 0, 0.600)" solo-inverted>
          <div class="tamañocarta"><v-img class="fotocarta" :src="card.key+'.png'"></v-img></div>
          <div  class="cartasdesc">
          <p class="cartasdesc2">{{card.name}}</p>
          <p class="cartasdesc2">Elixir: {{card.elixir}}</p>
          <p class="cartasdesc2">Type: {{card.type}}</p>
          <p class="cartasdesc2"> Rarity: {{card.rarity}}
          </p></div>
        </v-card>

</div>
 
</v-content>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getDatosCartas");
  },

computed: {
    datoscards() {
      return this.$store.getters.getdatoscards;
    },
  },
  
}
</script>

<style>
.tamañocarta {
  width: 35%;
  height: 35%;
}
.botonmiembro {
  margin-left: 10%;
  width: 80%;
  height: 80%;
  display: flex;
  margin-top: 3%; 
  border-radius: 10px;
  border-style: solid;
}
.fotocarta {
  width: 100%;
  height: 100%;
}
.titulocards{
  margin-top: 3%;
  display: flex;
  justify-content: center;
};
#fff {
  background-image: url("https://userscontent2.emaze.com/images/a16de044-d648-438f-9d4d-6fdb2569d298/69cad4b7a425f8814c2753078c3fb3dd.png");
  background-repeat: repeat;
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
  height: 400vh;
};
.cartasdesc{

  color: white;
  display: flex;
  flex-flow: row;
}
.cartasdesc2{
  
  color:white;
}
</style>
