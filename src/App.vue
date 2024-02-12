<template>
    <NavbarForm></NavbarForm>
    <div class='app'>
        <router-view></router-view>
    </div>
</template>
<script>
import NavbarForm from '@/components/NavbarForm.vue'
export default {
    components:{
        NavbarForm
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

</style>