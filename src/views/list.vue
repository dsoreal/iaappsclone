<template>
  <h3>You are on the list page</h3>
  <router-link to="/add">
    <div class="add">
      Add
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
    .add {
        background: #5CB85C;
        padding: 6px 12px;
        border-radius: 4px;
        margin: 50px ;
        display: inline-block;
    }
    .add:hover {
        background: #449D44;
        cursor: pointer;
    }

</style>