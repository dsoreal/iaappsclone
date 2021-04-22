<template>
  <h3>This is the add page</h3>
  <router-link to="/details">
    <div class="savelink">
      Save
    </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
    .savelink {
        background: #5CB85C;
        padding: 6px 12px;
        border-radius: 4px;
        margin: 50px ;
        display: inline-block;
    }
    .savelink:hover {
        background: #449D44;
        cursor: pointer;
    }
</style>