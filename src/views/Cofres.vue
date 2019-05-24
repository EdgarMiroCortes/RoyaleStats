<template>
    <v-container id="fff">
      <!-- <p>{{datoschest.upcoming}}</p> -->
      <v-card v-for="(cofre,i) in datoschest.upcoming" :key="i">
        <p>{{cofre}}</p>
      </v-card>
        <p>Mega Lightning: {{datoschest.megaLightning}}</p>
        <p>Magical: {{datoschest.magical}}</p>
        <p>Legendary: {{datoschest.legendary}}</p>
        <p>Epic: {{datoschest.epic}}</p>
        <p>Giant: {{datoschest.giant}}</p>
    </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("getDatoschest");
  },
  computed: {
    datoschest() {
      return this.$store.getters.getAlldatoschest;
    }
  }
}
</script>

<style scoped>
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
</style>
