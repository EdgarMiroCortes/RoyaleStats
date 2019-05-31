<template>
  <v-container id="fff">
    <h1 class="h1clanmembers">Clan Members</h1>
    <v-card color="transparent" flat class="cardmiembros">
      <div class="cardmiembros" v-for="miembro in datosClan.members" :key="miembro.name">
        <v-btn
          block
          @click="send(miembro.tag)"
          class="botonmiembro"
          color="white"
          solo-inverted
        >{{miembro.rank}} - {{miembro.name}} - {{miembro.trophies}}</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  methods: {
    send(tag) {
      this.$store.commit("settagmembers", tag);
      this.$router.push("/userstats2");
      // console.log(tag)
    }
    },
  created() {
    this.$store.dispatch("getDatosClan");
  },

  computed: {
    datosClan() {
      return this.$store.getters.getAlldatosClan;
    }
  }
};
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
  text-shadow: 1px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  padding: 0;
}
.botonmiembro {
  color: white;
  background-color: transparent;
  font-size: 11px;
  padding: 2%;
  width: 88%;
  margin-left: 6%;
}

.h1clanmembers {
  align-content: center;
}
.cardmiembros {
  background-color: transparent;
  align-content: center;
  justify-content: center;
}
</style>
