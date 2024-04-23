<script>
    import MainHero from './single-components/main/MainHero.vue'
    import MainArtistBox from './single-components/main/MainArtistBox.vue'
    import MainArtistVideo from './single-components/main/MainArtistVideo.vue'

    export default {
        data(){

        },

        components:{
            MainHero,
            MainArtistBox,
            MainArtistVideo,
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <MainHero></MainHero>

        <MainArtistBox></MainArtistBox>

        <MainArtistVideo></MainArtistVideo>
    </main>
</template>



<style lang="scss" scoped>

</style>