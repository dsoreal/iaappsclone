<template>
  <h3>This is the add page</h3>
  <router-link to="/corp_assoc_announcement/details">
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
        background: #337AB7;
        padding: 6px 12px;
        border-radius: 4px;
        margin: 50px ;
        display: inline-block;
    }
    .savelink:hover {
        background: #286090;
        cursor: pointer;
    }
</style>