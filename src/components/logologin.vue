<template>
  <div class="pagetop">
      <span class="logo">
        
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>

      </span>
      <span class="appname" v-if="$route.path != '/'">Corporate Associate Announcements</span>
      <span class="user">Hi, David Sorrell | <a href="#" class="logout">Logout</a></span>
  </div>
</template>

<script>
import appsLogo from '../assets/logo.png'
export default {
  data() {
    logo: appsLogo
  }
}
</script>

<style scoped>
div {
  display: block;
}
h4 {
  font-family: "Montserrat",Arial,sans-serif;
  font-weight: 400;
  
  
}
.logo {
  text-align: left;
  font-size: 16px;
  float: left;
  
  
}
.appname {
  color: #C3202F;
  text-align: left;
  float: left;
  padding-top: 15px;
  font-size: 15px;
}
.pagetop {
  margin-right: auto;
  margin-left: auto;
  padding: 25px 150px 60px 300px;
  
}
.companyname {
  font-size: 30px;
}
.user {
  float: right;
  padding-top: 10px;
 
}
.logout{
  color: #337AB7;
  text-decoration: none;
}
.logout:hover {
  text-decoration: underline;
}

</style>