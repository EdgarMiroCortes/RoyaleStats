<template>
<v-content>
    <h1>CARDS!</h1>
        <v-card color="transparent" flat class="cardmiembros">
    <div class="cardmiembros" v-for="card in datoscards.cards" :key="card.name">
        <v-btn block @click="go" class="botonmiembro" color="white" solo-inverted>{{miembro.rank}} - {{miembro.name}} - {{miembro.trophies}}</v-btn>
    </div>
    </v-card> 
</v-content>
</template>

<script>
export default {
created() {
    this.$store.dispatch("getdatoscards");
  },
  
  computed: {
    datoscards() {
      return this.$store.getters.getdatoscards;
    },
  }
}
</script>

<style>

</style>
