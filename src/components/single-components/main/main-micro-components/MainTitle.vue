

<script>
    export default {

        props:{
            titleBox: Object,
        },

        data(){
            return{

            }
        }
    }
</script>


<template>
    <p class="artist-sign main-sign">{{ titleBox.sign }}</p>
    <h1 class="main-title">{{ titleBox.title }}</h1>
</template>



<style lang="scss">

    .main-title{
        text-align: center;
        margin-top: 20px;
        margin-bottom: 35px
    }

</style>