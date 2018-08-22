<template>
  <div class="hello">
    <h2>{{titre}}</h2>
   <banshee-carousel autoplay
                      transition-name="fade" 
                      transition-mode="out-in">
      <banshee-carousel-slide v-for="slide in slides" 
                              :key="slide.id">
        <img :src="slide.src">
      </banshee-carousel-slide>
    </banshee-carousel>     
  </div>
</template>

<script>
export default {
  name: "Carrousel",
  data: () => ({
    msg: "Carrousel",
      titre: "Notre dernier voyage",
    slides: [
      { id: 1, src: 'https://picsum.photos/200?image=1074' },
      { id: 2, src: 'https://picsum.photos/200?image=876' },
      { id: 3, src: 'https://picsum.photos/200?image=1080' },
      { id: 4, src: 'https://picsum.photos/200?image=1011' },
      { id: 5, src: 'https://picsum.photos/200?image=995' }
    ]
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