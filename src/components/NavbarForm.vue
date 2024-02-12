<template>
    <div class="navbar">
        <div @click="$router.push('/')" style="cursor: pointer;">Home</div>
        <div class="navbar_btns">
            <MyButton @click="$router.push('/posts')" style="cursor: pointer;">Posts</MyButton>
            <MyButton style="margin-left: 20px;cursor: pointer;" @click="$router.push('/about')">About</MyButton>
            <MyButton style="margin-left: 20px;cursor: pointer;" @click="$router.push('/store')">Store</MyButton>
            <MyButton style="margin-left: 20px;cursor: pointer;" @click="$router.push('/composicion')">Composicition</MyButton>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .navbar{
        height: 50px;
        background-color: lightgrey;
        box-shadow: 2px 2px 4px black;
        display: flex;
    }
    .navbar_btns{
        margin-left: auto;
    }
</style>