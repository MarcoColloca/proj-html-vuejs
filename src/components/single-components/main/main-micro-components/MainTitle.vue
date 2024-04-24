

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
    <div class="title-box">
        <p class="artist-sign main-sign">{{ titleBox.sign }}</p>
        <h1 class="main-title">{{ titleBox.title }}</h1>
    </div>
</template>



<style lang="scss">
    .title-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .main-sign{
        font-size: 41px;
    }

    .main-title{
        text-align: center;
        margin-top: 5px;
        margin-bottom: 35px;        
        max-width: 620px;
        font-weight: 500;
    }

</style>