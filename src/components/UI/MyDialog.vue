<template lang="">
    <div class='dialog' v-if='show' @click='hideDialog'>
        <div @click.stop class='content'>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'
export default {
    name: 'MyDialog',
    mixins: [toggleMixin]
}
</script>
<style scoped>
    .dialog{
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        display: flex;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .content{
        background: whitesmoke;
        margin: auto;
        border-radius: 12px;
        min-width: 300px;
        min-height: 50px;
        padding: 20px;
    }
</style>