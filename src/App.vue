<template>
  <logologin />
  <navbar /> 
  <router-view/>
</template>
<script>
import navbar from './components/navbar.vue'
import logologin from './components/logologin.vue'
export default {
  components: { navbar, logologin }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
