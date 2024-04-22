<script>
    import FooterInfo from './single-components/footer/FooterInfo.vue'
    import FooterCopyright from './single-components/footer/FooterCopyright.vue'

    export default {
        components:{
            FooterInfo,
            FooterCopyright
        },

        data(){            
            return {
                
            }
        }
        
    }
</script>





<template>
    <div>
        <FooterInfo></FooterInfo>

        <FooterCopyright></FooterCopyright>
    </div>
</template>




<style lang="scss" scoped>
    div{
        height: 100px;
        background-color: peru;
    }
</style>