<template>
  <div class="pagetop">
    <div class="logoApp">
      <span class="logo">
        
        <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>

      </span>
      <span class="appname" v-if="$route.path != '/' && $route.path !='/login'">Corporate Associate Announcements</span>
      </div>
      <div class="logoutIn">
      <span class="user" v-if="$route.path !='/login'" id="user">Hi, {{ $store.state.displayName }} | <a href="#" class="logout" @click="logout">Logout</a></span>
      </div>
  </div>
</template>

<script>
import appsLogo from '../assets/logo.png'
export default {
  data() {
    logo: appsLogo
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.pagetop {
  padding: 10px 0;
  margin-right: 20px;
  display:inline-block;
  width: 75%;
  
}
h4 {
  font-family: "Montserrat",Arial,sans-serif;
  font-weight: 400;
}
.appname {
  color: #C3202F;
}
.logoApp {
text-align: left;
width: 75%;
float: left;

}
.logoutIn{
  float: right;
  text-align: right;
  margin-right: 20px;
  width: 20%;
  padding-top: 15px;
}


</style>