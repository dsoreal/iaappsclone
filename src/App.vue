<template>
  <logologin />
  <navline />
  <router-view/>
</template>
<script>
import logologin from './components/logologin.vue'
import navline from './components/navline.vue'
export default {
  components: { logologin, navline }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
