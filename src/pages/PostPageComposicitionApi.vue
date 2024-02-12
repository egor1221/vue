<!-- <template>  
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
            <PostForm/>
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
import { usePosts } from '@/hooks/usePosts'
import {useSortedAndSaerchPosts} from '@/hooks/useSortedAndSearchPosts'
import {useSortedPosts} from '@/hooks/useSortedPosts'

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
            dialogVisible: false,
            sortOptions: [
                {value:'title', name:'title'},
                {value:'body', name:'body'}
            ]
        }
    },
    // setup(props){
    //     const {posts, isPostsLoading, totalPages} = usePosts(10)
    //     const {selectedSort, sortedPosts} = useSortedPosts(posts)
    //     const {searchQuery, sortAndSearchPosts} = useSortedAndSaerchPosts(sortedPosts)

    //     return {
    //         posts, 
    //         isPostsLoading, 
    //         totalPages,
    //         selectedSort, 
    //         sortedPosts,
    //         searchQuery, 
    //         sortAndSearchPosts
    //     }
    // }
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
</style> -->