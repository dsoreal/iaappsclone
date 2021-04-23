<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
  
  <div class="nav">
    <nav class="navbar">
      <router-link to="/">Admin</router-link>
      <router-link to="/">Access Control</router-link>
    </nav>
  </div>
  <div class="apps">
    <h2>Inside Averitt Apps</h2>

    <div class="app ">
    <router-link to="/corp_assoc_announcement/list">
      <span class="material-icons firstrow">
        shopping_cart
      </span>
      <br>
      <span class="appnamef">Corp. Assoc.<br>Announcements</span>
    </router-link>
    </div>

    <div class="app">
    <router-link to="/">
      <span class="material-icons allelse">
fitness_center
</span>
      <br>
      <span class="appname">Corporate Fitness Center</span>
    </router-link>
    </div>
    
  
      
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
.apps {
  text-align: left;
  float: left;
}
h2 {
  font-family: "Montserrat",Arial,sans-serif;
  font-weight: 400;
  font-size: 34px;
  text-align: left;
  padding-left: 300px;
}
  a {
    text-decoration: none;
    color: #595959;
  }
  .material-icons {
    width: 50px;
    height: 50px;
    font-size: 50px;
    padding-top: 20px;
    
  }
  .firstrow {
    padding-left: 350px;
  }
  .allelse {
    padding-left: 160px;
  }
  .appnamef {
    padding-left: 320px;
    float: left;
    text-align: center;
  }
  .appname{
    padding-left: 100px;
    float: left;
    text-align: center;
  }
  .material-icons:hover, .appname:hover {
    color: #323232;
    cursor: pointer;
  }
  .appname:hover, .appnamef:hover {
    text-decoration: underline;
  }
  .app {
    float: left;
    text-align: left;
    padding-left:;
  }
</style>