import Vue from "vue";
import Router from "vue-router";
import Clan from "./views/Clan.vue";
import Cofres from "./views/Cofres.vue";
import userstats from "./components/userstats.vue";
import userstats2 from "./components/userstats2.vue";
import About from "./views/About.vue"
import members from "./views/Members.vue"
import chat from "./views/chat.vue"
import cards from "./views/cards.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/userstats",
      name: "userstats",
      component: userstats
    },
    {
      path: "/userstats2",
      name: "userstats2",
      component: userstats2
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
    {
      path: "/chat",
      name: "chat",
      component: chat
    },
    {
      path: "/cards",
      name: "cards",
      component: cards
    },
  ]
});
