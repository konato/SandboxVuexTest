<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <router-link :to="{ name: 'Hello' }">Accueil</router-link>
    &nbsp;
    <router-link to="{ name: 'About' }">Àpropos</router-link>
    &nbsp;
    <router-link to="{ name: 'Carrousel' }">Photos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
