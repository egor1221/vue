<template>  
    <div> 
        <h1>List posts</h1>
        <div class="app_btns">
            <MyInput v-focus :model-value="searchQuery" @update:model-value="setSearchQuery"/>
            <MyButton @click="showDialog">Create post</MyButton>
            <MySelect
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
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
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'


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
            
        }
    },
    methods:{
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts'
        }),
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
        
    },
    mounted() {
        this.fetchPosts()
    },
    computed:{
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            totalPages: state => state.post.totalPages,
            limit: state => state.post.limit,
            sortOptions: state => state.post.sortOptions
        }),
        ...mapGetters({
            sortPosts: 'post/sortPosts',
            sortAndSearchPosts: 'post/sortAndSearchPosts',
        })
    },
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