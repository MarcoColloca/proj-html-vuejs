<script>
  import AppHeader from './components/AppHeader.vue';

  export default{
    components:{
      AppHeader,
    },

    data(){
      return{
        test: 'Hello!',
      }
    }
  }
</script>




<template>
  <h1>
    {{ test }}
  </h1>
  <AppHeader></AppHeader>
</template>




<style lang="scss">
</style>
