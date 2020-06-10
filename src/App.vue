<template>
  <div id="app" :class="darkTheme ? 'dark' : 'light'">
    <NavBar />
    <div class="router-view">
      <transition name="drain">
        <router-view />
      </transition>
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
.router-view {
  position: relative;
  & > * {
    position: absolute;
    width: 100%;
    padding: 3rem;
    min-height: calc(100vh - 3.1rem);
  }
}

.drain-enter-active,
.drain-leave-active {
  transition: transform 1s;
}

.drain-enter,
.drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to,
.drain-leave {
  transform: translateY(0);
}

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
