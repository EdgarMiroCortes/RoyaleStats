<template>
  <v-content>
    <router-view></router-view>
    <v-footer fixed class="opacityy" color="rgba(0, 0, 0, 0.600)">
      <v-card-text flex color="transparent" class="jumagiiiiii">
        <button flat class="button1" to="/" @click="home">
          <v-icon to="/" color="white" size="20px">fas fa-home</v-icon>
        </button>
        <button flat class="button1" to="/userstats" @click="userpage">
          <v-icon color="white" to="/clan" size="20px">fas fa-user</v-icon>
        </button>
        <button flat class="button1" to="/chat" @click="chat">
          <v-icon color="white" size="20px">fas fa-comment-alt</v-icon>
        </button>
        <button flex class="button1" to="/cards" @click="cards">
          <v-icon color="white" size="30px">view_module</v-icon>
        </button>
      </v-card-text>

      <v-divider></v-divider>
    </v-footer>
  </v-content>
</template>

<script>
import userstats from "./components/userstats";

export default {
  name: "App",
  components: {
    userstats
  },
  data() {
    return {
      //
      //    methods: {
      // home() {
      //   this.$router.push("/");
      // }
      // }
    };
  },
    methods: {
    userpage() {
      this.$router.push("/userstats");
    },
        home() {
      this.$router.push("/");
    },
        chat() {
      this.$router.push("/chat");
    },
        cards() {
      this.$router.push("/cards");
    },
  },
};
</script>

<style>
.jumagiiiiii {
  display: flex;
  justify-content: space-around;
  padding: 3%;
}
.button1 {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
}

.v-card-text {
 padding: 6px;
 width: 100%;
}
</style>

