<script>
    import MainArtistHero from './single-components/main/MainArtistHero.vue'
    import MainArtistBox from './single-components/main/MainArtistBox.vue'
    import MainArtistVideo from './single-components/main/MainArtistVideo.vue'
    import MainArtistTestimonials from './single-components/main/MainArtistTestimonials.vue'

    export default {
        data(){

        },

        components:{
            MainArtistHero,
            MainArtistBox,
            MainArtistVideo,
            MainArtistTestimonials,
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <MainArtistHero></MainArtistHero>

        <MainArtistBox></MainArtistBox>

        <MainArtistVideo></MainArtistVideo>

        <MainArtistTestimonials></MainArtistTestimonials>
    </main>
</template>



<style lang="scss" scoped>

</style>