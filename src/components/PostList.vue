<template lang="">
    <div v-if='posts.length > 0'>
        <transition-group name='list'>
            <PostItem 
            :post='post'  
            v-for="(post) in posts" :key="post.id" 
            @remove="$emit('remove', post)"
            />
        </transition-group>
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
.list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-move {
    transition: transform 0.8s ease;
  }
</style>