<template>
  <div id="nav">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt srcset />
      </router-link>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>

      <div class="theme-toggle" @click="toggleTheme">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25"
          height="25"
          viewBox="0 0 512 512"
          id="change-color-icon"
        >
          <g />
          <path
            d="M377.139 259.492c0 66.637-54.020 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658 0-66.637 54.020-120.658 120.658-120.658 66.637 0 120.658 54.020 120.658 120.658z"
          />
          <path d="M228.352 100.669l30.27-77.906 25.979 77.906z" />
          <path d="M228.352 411.341l30.27 77.895 25.979-77.895z" />
          <path d="M100.659 287.601l-77.895-30.29 77.895-25.959z" />
          <path d="M411.361 287.601l77.875-30.29-77.875-25.959z" />
          <path d="M126.597 165.703l-33.659-76.472 73.442 36.7z" />
          <path d="M346.276 385.423l76.524 33.639-36.741-73.442z" />
          <path d="M168.499 388.199l-76.493 33.639 36.72-73.442z" />
          <path d="M388.199 168.499l33.618-76.513-73.4 36.751z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapMutations(["toggleTheme"])
  }
};
</script>

<style lang="scss">
.theme-toggle {
  cursor: pointer;
}

#change-color-icon > * {
  height: 2rem;
  fill: var(--primaryText);
}

#nav {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--primaryText);

  .logo {
    height: 2rem;
    img {
      height: 2rem;
    }
  }

  .links {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    align-items: center;

    & > * {
      margin-left: 1rem;
    }
  }

  a {
    font-weight: bold;
    color: var(--primaryText);

    &.router-link-exact-active {
      color: var(--accentText);
    }
  }
}
</style>