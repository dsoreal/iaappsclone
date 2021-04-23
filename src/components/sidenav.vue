<template>
  <div class="sidenav">
  <div class="announcelink links">Announcements</div>
  <div class="adminlink links">Admin</div>
  <div class="accesscontrollink links">Access Control</div>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  border-right: #C0C0C0 1px solid;
  margin-top: 97px;
  font-weight: bold;
  text-align: left;
 
}


.sidenav a:hover {
  text-decoration: underline;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
.links {
    padding-bottom: 20px;
    padding-top: 20px;
     padding-left: 20px;
    border-bottom: #C0C0C0 1px solid;
    cursor: pointer;
}
.links:hover {
    background-color: #E6E6E6
}
</style>