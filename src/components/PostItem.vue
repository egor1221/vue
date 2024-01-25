<template lang="">
    <div class="post">
        <div>
            <div><strong>Name:</strong>{{post.title}}</div>
            <div><strong>Description:</strong>{{post.body}}</div>
        </div>
        <div class='post_btn'>
            <MyButton @click="$emit('remove', post)">Delete</MyButton>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        post:{
            type: Object,
            required: true,
        }
    }
    
}
</script>
<style scoped>
.post{
    padding: 15px;
    margin-top: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>