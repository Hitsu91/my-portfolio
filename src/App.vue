<template>
  <div id="app" :class="darkTheme ? 'dark' : 'light'">
    <NavBar />
    {{ darkTheme }}
    <button @click="toggleTheme">Toggle Theme</button>
    <div id="main" class>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    NavBar
  },
  computed: { ...mapState(["darkTheme"]) },
  methods: {
    ...mapMutations(["toggleTheme"])
  }
};
</script>


<style lang="scss">
#app {
  min-height: 100vh;
  margin: 0;
}
:root {
  --primaryBg: #222831;
  --secondaryBg: #30475e;
  --primaryText: #ececec;
  --accentText: #f2a365;
}

.light {
  --primaryBg: #fafafa;
  --secondaryBg: #e0bb20;
  --primaryText: #000000;
  --accentText: #841818;
}

* {
  box-sizing: border-box;
  background-color: var(--primaryBg);
  color: var(--primaryText);
  scrollbar-width: 0;
  transition: background 500ms ease-in-out, color 1000ms ease-in-out;
}

#main {
  padding: 3rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
