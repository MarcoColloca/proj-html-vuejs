<script>
    import HeaderTicket from './single-components/header/HeaderTicket.vue';
    import HeaderNavbar from './single-components/header/HeaderNavbar.vue'

    export default {
        components:{            
            HeaderTicket,
            HeaderNavbar,
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
        <HeaderTicket
         :timer="timerTime"
        ></HeaderTicket>

        <!-- Header Navbar Section -->
        <HeaderNavbar
         :logo="logoSrc"
         :tabs="navbarTabs"
        ></HeaderNavbar>
    </header>
</template>



<style lang="scss" scoped>

</style>