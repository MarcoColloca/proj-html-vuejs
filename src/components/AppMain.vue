<script>
    import MainHero from './single-components/main/MainHero.vue'
    import MainArtistBox from './single-components/main/MainArtistBox.vue'

    export default {
        data(){
            
        },

        components:{
            MainHero,
            MainArtistBox,
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <MainHero></MainHero>

        <MainArtistBox></MainArtistBox>
    </main>
</template>



<style lang="scss" scoped>

</style>