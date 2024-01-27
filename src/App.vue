<template>
  <div id="app">
    <font-awesome-icon icon="fa-brands fa-linkedin" />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex; // Use flexbox for the navigation
  flex-direction: column;
  position: fixed;
  padding: 30px;
  text-align: left;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
