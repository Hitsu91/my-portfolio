<template>
  <div id="nav">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt srcset />
      </router-link>
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="theme-toggle">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <g />
        <path
          d="M377.139 259.492c0 66.637-54.020 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658 0-66.637 54.020-120.658 120.658-120.658 66.637 0 120.658 54.020 120.658 120.658z"
          fill="#000000"
        />
        <path d="M228.352 100.669l30.27-77.906 25.979 77.906z" fill="#000000" />
        <path d="M228.352 411.341l30.27 77.895 25.979-77.895z" fill="#000000" />
        <path d="M100.659 287.601l-77.895-30.29 77.895-25.959z" fill="#000000" />
        <path d="M411.361 287.601l77.875-30.29-77.875-25.959z" fill="#000000" />
        <path d="M126.597 165.703l-33.659-76.472 73.442 36.7z" fill="#000000" />
        <path d="M346.276 385.423l76.524 33.639-36.741-73.442z" fill="#000000" />
        <path d="M168.499 388.199l-76.493 33.639 36.72-73.442z" fill="#000000" />
        <path d="M388.199 168.499l33.618-76.513-73.4 36.751z" fill="#000000" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss">
#theme-toggler {
  height: 2rem;
  fill: var(--primaryText);
}

#nav {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid var(--primaryText);

  .logo {
    height: 2rem;
    justify-self: flex-end;
    align-self: flex-end;

    img {
      height: 2rem;
    }
  }

  .links {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
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