<script>
    import MainArtistHero from './single-components/main/MainArtistHero.vue'
    import MainArtistBox from './single-components/main/MainArtistBox.vue'
    import MainArtistVideo from './single-components/main/MainArtistVideo.vue'

    export default {
        data(){

        },

        components:{
            MainArtistHero,
            MainArtistBox,
            MainArtistVideo,
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <MainArtistHero></MainArtistHero>

        <MainArtistBox></MainArtistBox>

        <MainArtistVideo></MainArtistVideo>
    </main>
</template>



<style lang="scss" scoped>

</style>