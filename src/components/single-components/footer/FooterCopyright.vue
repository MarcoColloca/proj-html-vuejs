<script>
    import BackTop from '../general/BackTop.vue';

    export default {
        components:{
            BackTop,
        }
    }
</script>


<template>
    <div class="footer__copyright">
        <div class="footer__copyright--text">
            <p> &copy; 2020 Maxcoach All Rights Reserved</p>
        </div>     

        <BackTop></BackTop>
    </div>
</template>



<style lang="scss" scoped>
    .footer__copyright{
        position: relative;
        padding: 40px 0;
    }

    .footer__copyright--text{        
        text-align: center;
        color: gray;
        font-size: 12px;   
    }
</style>