import axios from 'axios'

export const postModule = {
    state: () => ({
        posts: [],
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
    }),
    getters:{
        sortPosts(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortAndSearchPosts(state, getters){
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts
        },
        setLoading(state, loading){
            state.isPostsLoading = loading
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery
        },
        setPage(state, page){
            state.page = page
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages
        },
    },
    actions:{
        async fetchPosts({state, commit}){
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params:{
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count']/state.limit))
                commit('setPosts', response.data)
            } catch (e) {
                console.log(e);
            }finally{
                commit('setLoading', false)
            }
        },
    },
    namespaced: true
}