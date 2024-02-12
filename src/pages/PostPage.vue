<template>  
    <div> 
        <h1>List posts</h1>
        <div class="app_btns">
            <MyInput v-focus v-model="searchQuery"/>
            <MyButton @click="showDialog">Create post</MyButton>
            <MySelect
            v-model="selectedSort"
            :options="sortOptions"
            />
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </MyDialog>
        <PostList 
        :posts="sortAndSearchPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
        />
        <div v-else>Loading...</div>
        <div class="page_wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            class="page"
            :class="{
                'current_page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            > {{pageNumber}}</div>
        </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import axios from 'axios'

export default {
    components:{
    PostForm, PostList,
    MyDialog,
    MyButton,
    MySelect,
    MyInput
},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            totalPages: 0,
            limit: 10,
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
        changePage(pageNumber){
            this.page = pageNumber
        },
        async fetchPosts(){
            try {
                this.isPostsLoading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
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
    computed:{
        sortPosts(){
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortAndSearchPosts(){
            return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    watch: {
        page(){
            this.fetchPosts()
        }
    }
}
</script>

<style>

.app_btns{
    display: flex;
    justify-content: space-between;
}

.page_wrapper{
    display: flex;
    margin-top: 15px;
}

.page{
    border: 1px solid black;
    padding: 10px;
}

.current_page{
    border: 4px solid teal;

}
</style>