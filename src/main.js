import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    var firebaseConfig = {
      apiKey: "AIzaSyCSmJ3DIcPUWyzLhJqDHZPv_eE38LkmB8M",
      authDomain: "chat-emiro.firebaseapp.com",
      databaseURL: "https://chat-emiro.firebaseio.com",
      projectId: "chat-emiro",
      storageBucket: "chat-emiro.appspot.com",
      messagingSenderId: "726437911856",
      appId: "1:726437911856:web:51ab1b6bf7ec8285"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");
