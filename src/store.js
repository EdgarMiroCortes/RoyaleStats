import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tag:"",
    datos:[],
    datosClan:[],
    datoschest:[],
    tagclan: "",
    url: "https://api.royaleapi.com/player/",
    urlClan: "https://api.royaleapi.com/clan/",
    urlChest: "https://api.royaleapi.com/player/RLGLPCU/chests",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU4MCwiaWRlbiI6IjI3NjM5MjM2ODY3NDk2MzQ1NyIsIm1kIjp7InVzZXJuYW1lIjoiRWRnYXJNaXJvIiwia2V5VmVyc2lvbiI6MywiZGlzY3JpbWluYXRvciI6IjQ1MzcifSwidHMiOjE1NTcyNDE3NTY0OTd9.-rViE1snbwa0wGgBteJhLcsbkkJ21NDUAAivcgYALRQ",

  },
  mutations: {
    setdatos(state, data){
      state.datos = data
    },
    setdatosclan(state, data){
      state.datosClan = data
    },
    setdatoschest(state, data){
      state.datoschest = data
    },
    settag(state, payload) {
      state.tag = payload;
    },
    tagclan(state, payload) {
      state.tagclan = payload;
    }
  },  
  actions: {
    getDatos(context){
      fetch(((context.state.url)+(context.state.tag)),{
        "async": true,
        "crossDomain": true,
        "headers":{"auth":context.state.key}
      })
        .then(json => json.json())
        .then(data => {
          context.commit("setdatos",
          data)
        })
    },
    getDatosClan(context){
      fetch(((context.state.urlClan)+(context.state.tagclan)),{
        "async": true,
        "crossDomain": true,
        "headers":{"auth":context.state.key}
      })
        .then(json => json.json())
        .then(data => {
          context.commit("setdatosclan",
          data)
        })
    },
    getDatoschest(context){
      fetch(context.state.urlChest,{
        "async": true,
        "crossDomain": true,
        "headers":{"auth":context.state.key}
      })
        .then(json => json.json())
        .then(data => {
          context.commit("setdatoschest",
          data)
        })
    },
  },
  getters:{
    getName(state){
      return state.name
    },
    getAlldatos(state){
      return state.datos
    },
    getAlldatosClan(state){
      return state.datosClan
    },
    getAlldatoschest(state){
      return state.datoschest
    },
    gettag(state) {
      return state.tag;
    },
    gettagclan(state) {
      return state.tagclan;
    }
  }
});
