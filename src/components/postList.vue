<template> 
    <tr v-for="post in posts" :key="post.id" class="trueList" @click="detailsRoute(post.id)">
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
    },
    methods: {
        detailsRoute(route) {
            this.$router.push('/corp_assoc_announcement/details/' + route)
        }
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