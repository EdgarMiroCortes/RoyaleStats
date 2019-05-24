<template>
<v-container id="fff">
    <h1>Clan Members</h1>
    <div v-for="miembro in datosClan.members" :key="miembro.name">
        <v-btn class="botonmiembro" color="white" solo-inverted>{{miembro.rank}} - {{miembro.name}} - {{miembro.trophies}} - {{miembro.expLevel}}</v-btn>
    </div>
</v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("getDatosClan");
  },
  computed: {
    datosClan() {
      return this.$store.getters.getAlldatosClan;
    }
  }
}
</script>

<style>
#fff {
  background-image: url("https://userscontent2.emaze.com/images/a16de044-d648-438f-9d4d-6fdb2569d298/69cad4b7a425f8814c2753078c3fb3dd.png");
  background-repeat: repeat-y;
  font-size: 14px;
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
.botonmiembro {
  color: white;
  background-color: transparent;
  font-size: 11px;
}
</style>
