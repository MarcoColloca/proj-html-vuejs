<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue'

  export default{
    components:{
      AppHeader,
      AppFooter,
    },

    data(){
      return{
        test: 'Hello!',
      }
    }
  }
</script>




<template>
  <AppHeader></AppHeader>
  
  <AppFooter></AppFooter>
</template>




<style lang="scss">
</style>
