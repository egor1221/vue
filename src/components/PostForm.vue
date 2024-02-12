<template lang="">
    <form @submit.prevent>
        <h4>Create Post</h4>
        <MyInput v-focus v-model='post.title' type='text' placeholder='name' />
        <MyInput v-model='post.body' type='text' placeholder='description' />
        <MyButton style='align-self: flex-end; margin-top: 15px' @click='createPost'>Create</MyButton>
    </form>
</template>
<script>

export default {
    data(){
        return{
            post:{
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
    
}
</script>
<style scoped>
form{
    display: flex;
    flex-direction: column;
}
</style>