import {ref, computed} from 'vue'

export function useSortedAnsSearchPosts(sortPosts){
    const searchQuery = ref('')
    const sortAndSearchPosts = computed(() => {
        return sortPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortAndSearchPosts
    }
}