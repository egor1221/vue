<!-- eslint-disable vue/no-mutating-props -->
<template>
    <select :value="modelValue" @change="optionChange">
        <option disabled value=''>Выберите из списка</option>
        <option 
        v-for="option of options" 
        :key="option.value" 
        :value='option.value'
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: 'MySelect',
    props:{
        modelValue:{
            type: String
        },
        options:{
        type: Array,
        default: () => []
        },
    },
    methods:{
        optionChange(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>
    
</style>