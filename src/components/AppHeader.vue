<script>
    import SocialIcons from './single-components/SocialIcons.vue';
    import AppTicket from './single-components/AppTicket.vue'

    export default {
        components:{
            SocialIcons,
            AppTicket,
        },

        data(){
            return{
                timerTime: {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },
                logoSrc: '../../public/imgs/dark-logo.png',
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
         :timer="this.timerTime"
        ></AppTicket>

        <!-- Header Navbar Section -->
        <div class="header__navbar">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="header__navbar__logo">
                            <img :src="logoSrc" alt="Logo">
                        </div>
                    </div>
    
                    <div class="col-6">                        
                        <ul class="header__navbar__tabs">
                            <li v-for="tab in navbarTabs">
                                <a :href="tab.href">
                                    {{ tab.name }} <font-awesome-icon :icon="['fas', 'chevron-down']" class="header__navbar__tabs__icon"/>
                                </a> 
                            </li>
                        </ul>                            
                    </div>
    
                    <div class="col-3">
                       <SocialIcons></SocialIcons>                    
                    </div>    
                </div>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    @use '../assets/style/partials/variables.scss' as *;
    @use '../assets/style/partials/mixins.scss' as *;



    /* Navbar Section */
    .header__navbar{
        padding: 30px 0;
        
        .row{
            justify-content: space-between;
            align-items: center;
        }
        

        .header__navbar__logo{
            img{
                height: 30px;
            }
        }

        .header__navbar__tabs{
            display: flex;
            justify-content: center;
            li{
                padding: 0 5px;
                margin-right: 10px;
                .header__navbar__tabs__icon{
                    font-size: 10px;
                    margin-top: -15px;
                }
            }
        }
    }
</style>