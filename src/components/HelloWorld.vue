<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{titre}}</h2>    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    msg: "Welcome to Your Vue.js App",
      titre: "Allo toi"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
