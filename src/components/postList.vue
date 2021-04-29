<template> 
    <tr v-for="post in posts" :key="post.id" class="trueList">
        <singlePost :post="post"  />
    </tr>
</template>

<script>
import singlePost from './singlePost.vue'
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
    props: [
        'posts'
    ],
    components: {
        singlePost
    }
}
</script>

<style>
tr.trueList{
    border-bottom: 1px solid #DDDDDD;
}
tr.trueList:hover{
    background-color: #C3202F;
    color: white;
}
</style>