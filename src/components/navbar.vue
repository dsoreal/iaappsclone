<template>
<div class="nav">
  <nav class="navbar">
      <router-link to="/">Admin</router-link>
      <router-link to="/">Access Control</router-link>

  </nav>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
    text-align: left;
    position: relative;
    min-height: 50px;
    margin-bottom: 22px;
    display: block;
}
.navbar {
    background-color: #c3202f;
    border: 0;
    border-radius: 0;
    padding: 15px 15px 15px 300px;
    font-weight: 400;
    font-size: 16px;
}
.nav a{
    text-decoration: none;
    color: white;
    padding: 15px;
}
.nav a:hover{
    background-color:#AD1C2A;
}
</style>