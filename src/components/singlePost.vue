<template>
    <td colspan="1">
    <span>{{ post.associate }}</span>
    </td>
    <td colspan="1">
      <span class="wanted" v-if="post.type === 'Wanted'" >{{ post.type }}</span>
      <span class="forSale" v-if="post.type === 'For Sale'">{{ post.type }}</span>
    </td>
    <td colspan="1">
     <span class="item">{{ post.item }}</span>
     </td>
     <td colspan="1">
     <span class="date">{{post.date}}</span>  
     </td>  
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>
  td {
    padding: 10px;
    cursor: pointer;
  }
</style>