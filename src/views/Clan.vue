<template>
    <v-container v-if="datosClan.length != 0" id="fff">
        <h2 class="nombretag"> Clan Info </h2>
        <div id="iconodesc">
        <p class="ffff"><v-img class="icono" :src="datosClan.badge.image"/>{{datosClan.name}}</p> 
        <p class="desc">"{{datosClan.description}}"</p>
        </div>
        <br>
        <br>
        <p>Trophies: <a class="derecha">{{datosClan.score}}</a></p>
        <p>Donations: <a class="derecha">{{datosClan.donations}}</a></p>
        <p>Required Score:<a class="derecha">{{datosClan.requiredScore}}</a></p>
        <p>War Trophies:<a class="derecha">{{datosClan.warTrophies}}</a></p>
        <br>
<v-flex> 
   <v-flex xs12 sm6>
        <div class="text-xs-center">
          <div>
            <v-btn  block color="error" dark large to="/members">See Members</v-btn>
          </div>
        </div>
      </v-flex>
</v-flex>

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

<style scoped>
#iconodesc{
    display: flex;
    flex-flow: row;
}
.icono {
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    margin-top: 30px;
}
.nombretag {
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
.desc{
  margin-top: 10%;
    font-size: 11px;
    padding-left: 10%;
    text-align: center;
}
.ffff{
    height: 100px;
    width: 100px;
}
</style>
