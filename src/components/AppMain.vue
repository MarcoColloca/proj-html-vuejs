<script>
    import MainArtistHero from './single-components/main/MainArtistHero.vue';
    import MainArtistBox from './single-components/main/MainArtistBox.vue';
    import MainArtistVideo from './single-components/main/MainArtistVideo.vue';
    import MainArtistTestimonials from './single-components/main/MainArtistTestimonials.vue';
    import MainArtistNewsletter from './single-components/main/MainArtistNewsletter.vue';
    import MainArtistCourses from './single-components/main/MainArtistCourses.vue';
    import MainArtistBlog from './single-components/main/MainArtistBlog.vue';

    export default {
        data(){

        },

        components:{
            MainArtistHero,
            MainArtistBox,
            MainArtistVideo,
            MainArtistTestimonials,
            MainArtistNewsletter,
            MainArtistCourses,
            MainArtistBlog,
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

        <MainArtistCourses></MainArtistCourses>

        <MainArtistBlog></MainArtistBlog>

        <MainArtistNewsletter></MainArtistNewsletter>
    </main>
</template>



<style lang="scss" scoped>

</style>