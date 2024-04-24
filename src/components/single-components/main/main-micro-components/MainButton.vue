<script>
    export default {
        props:{
            mainButton: Object,
        },

        data(){
            return{

            }
        }
    }
</script>




<template>
    <button :class="mainButton.style">{{ mainButton.text }} <font-awesome-icon v-if="mainButton.icon" :icon="mainButton.icon" /></button>
</template>


<style lang="scss" scoped>
   
</style>