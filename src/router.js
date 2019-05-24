import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Clan from "./views/Clan.vue";
import Cofres from "./views/Cofres.vue";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./views/About.vue"
import members from "./views/Members.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/clan",
      name: "Clan",
      component: Clan
    },
    {
      path: "/Cofres",
      name: "Cofres",
      component: Cofres
    },
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/members",
      name: "members",
      component: members
    },
  ]
});
