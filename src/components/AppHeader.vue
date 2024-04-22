<script>
    import AppTicket from './single-components/AppTicket.vue';
    import AppNavbar from './single-components/AppNavbar.vue'

    export default {
        components:{            
            AppTicket,
            AppNavbar,
        },

        data(){
            return{
                timerTime: {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },
                logoSrc: '/imgs/dark-logo.png',
                navbarTabs:[
                    {
                        name: 'Home',
                        href: '#'
                    },
                    {
                        name: 'Pages',
                        href: '#'
                    },
                    {
                        name: 'Courses',
                        href: '#'
                    },
                    {
                        name: 'Blog',
                        href: '#'
                    },
                    {
                        name: 'Shop',
                        href: '#'
                    }
                ],
            }
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header>
        <!-- Header Ticket Section -->
        <AppTicket
         :timer="timerTime"
        ></AppTicket>

        <!-- Header Navbar Section -->
        <AppNavbar
         :logo="logoSrc"
         :tabs="navbarTabs"
        ></AppNavbar>
    </header>
</template>



<style lang="scss" scoped>
    @use '../assets/style/partials/variables.scss' as *;
    @use '../assets/style/partials/mixins.scss' as *;



</style>