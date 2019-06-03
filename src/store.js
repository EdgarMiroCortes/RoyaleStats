import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // user
    tag:"",
    datos:[],
    url: "https://api.royaleapi.com/player/",

    // miembro clan
    tagmember:"",
    datosmember:[],

    // clan  
    tagclan: "",
    datosClan:[],
    urlClan: "https://api.royaleapi.com/clan/",

    // cofres
    datoschest:[],
    urlChest: "https://api.royaleapi.com/player/",

    // cards (y todas las constantes)
    datoscards:[],
    urlCards: "https://api.royaleapi.com/constants",
  
    // key (pa to)
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU4MCwiaWRlbiI6IjI3NjM5MjM2ODY3NDk2MzQ1NyIsIm1kIjp7InVzZXJuYW1lIjoiRWRnYXJNaXJvIiwia2V5VmVyc2lvbiI6MywiZGlzY3JpbWluYXRvciI6IjQ1MzcifSwidHMiOjE1NTcyNDE3NTY0OTd9.-rViE1snbwa0wGgBteJhLcsbkkJ21NDUAAivcgYALRQ",
  },
  mutations: {
    // datos user
    setdatos(state, data){
      state.datos = data
    },   
    settag(state, payload) {
      state.tag = payload;
    },

    // datos miembro clan
    setdatosmember(state, data){
      state.datosmember = data
    },    
    settagmembers(state, payload) {
      state.tagmember = payload;
    },

    // datos clan
    setdatosclan(state, data){
      state.datosClan = data
    },    
    tagclan(state, payload) {
      state.tagclan = payload;
    },

    // datos cofres
    setdatoschest(state, data){
      state.datoschest = data
    },
 
    // datos cartas
    setdatoscards(state, data){
      state.datoscards = data
    }
  },  
  actions: {

    // fetch datos user
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

    // fetch datos clan
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

    // fetch datos cofres
    getDatoschest(context){
      fetch(((context.state.urlChest)+(context.state.tag)+("/chests")),{
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

    //fetch cartas (y todas las constantes del juego) 
    getDatosCartas(context){
      fetch(context.state.urlCards,{
        "async": true,
        "crossDomain": true,
        "headers":{"auth":context.state.key}
      })
        .then(json => json.json())
        .then(data => {
          context.commit("setdatoscards",
          data)
        })
    },

    // fetch miembro clan
    getDatosMember(context){
      fetch(((context.state.url)+(context.state.tagmember)),{
        "async": true,
        "crossDomain": true,
        "headers":{"auth":context.state.key}
      })
        .then(json => json.json())
        .then(data => {
          context.commit("setdatosmember",
          data)
        })
    },
  },
  getters:{
    // getters user
    gettag(state) {
      return state.tag;
    },
    getAlldatos(state){
      return state.datos
    },

    // getters clan
    getAlldatosClan(state){
      return state.datosClan
    },    
    gettagclan(state) {
      return state.tagclan;
    },

    // getters miembro clan    
    getDatosMember(state){
      return state.datosmember
    },    
    gettagmember(state) {
      return state.tagmember;
    },

    // getter datos cofre (el tag esta en user)
    getAlldatoschest(state){
      return state.datoschest
    },

    // getter cartas (y todas las constantes del juego)
    getdatoscards(state) {
      return state.datoscards;
    },

  }
});
