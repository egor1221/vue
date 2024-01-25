<template>  
    <div class='app'> 
        <h1>List posts</h1>
        <div class="app_btns">
            <MyButton @click="showDialog">Create post</MyButton>
            <MySelect
            :modelValue="selectedSort"
            :options="sortOptions"
            />
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </MyDialog>
        <PostList 
        :posts="posts"
        @remove="removePost"
        v-if="!isPostsLoading"
        />
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import MyButton from './components/UI/MyButton.vue'
import MyDialog from './components/UI/MyDialog.vue'
import MySelect from './components/UI/MySelect.vue'
import axios from 'axios'

export default {
    components:{
    PostForm, PostList,
    MyDialog,
    MyButton,
    MySelect
},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            sortOptions: [
                {value:'title', name:'title'},
                {value:'body', name:'body'}
            ]
        }
    },
    methods:{
        createPost(post){
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog(){
            this.dialogVisible = true
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                this.posts = response.data
            } catch (e) {
                alert('Error')
            }finally{
                this.isPostsLoading = false
            }
        },
    },
    mounted() {
        this.fetchPosts()
    },
    watch: {
        selectedSort(newValue){
            console.log(newValue);
        },
    }
}
</script>

<style>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    padding: 20px;
}

.app_btns{
    display: flex;
    justify-content: space-between;
}
</style>