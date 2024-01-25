<template lang="">
    <div v-if='posts.length > 0'>
        <PostItem 
        :post='post'  
        v-for="(post) in posts" :key="post.id" 
        @remove="$emit('remove', post)"
        />
    </div>
    <h2 v-else>
        Posts non
    </h2>
</template>
<script>
import PostItem from './PostItem.vue';
export default {
    components:{
        PostItem
    },
    props:{
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>

</style>