<script>

    export default {
        data(){
            return{
                timerTime: {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                },
                logoSrc: '../../public/imgs/dark-logo.png',
                navbarTabs:['Home', 'Pages', 'Courses', 'Blog', 'Shop'],
            }
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header>
        <!-- Header Ticket Section -->
        <div class="header__ticket">
            <p class="header__ticket__intro">Starts TOMORROW! Our biggest event of the year...</p>
            <div class="header__ticket__timer">
                <span class="header__ticket__timer--icon"> <font-awesome-icon :icon="['far', 'clock']"/> </span>  
                <span class="header__ticket__timer--time"> {{timerTime.days}} : {{timerTime.hours}} : {{timerTime.minutes}} : {{timerTime.seconds}} </span>
            </div>
            <button>Get Ticket</button>
        </div>

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
                                <a href="">
                                    {{ tab }} <font-awesome-icon :icon="['fas', 'chevron-down']" class="header__navbar__tabs__icon"/>
                                </a> 
                            </li>
                        </ul>                            
                    </div>
    
                    <div class="col-3 text-end">
                        componente social icons                       
                    </div>    
                </div>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    @use '../assets/style/partials/variables.scss' as *;
    @use '../assets/style/partials/mixins.scss' as *;

    /* Ticket Section*/
    .header__ticket{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background-color: $app-lightgray;
        padding: 10px 0;
        .header__ticket__intro{
            font-size: 14px;
        }
        .header__ticket__timer{
            font-size: 18px;
            font-weight: bold;
            color: #3F3A64;
            .header__ticket__timer--icon{
                margin-right: 10px
            }
        }
        
        button{
            @include btn-artist;
            padding: 8px 40px;
        }
    }


    /* Navbar Section */
    .header__navbar{
        padding: 30px 0;
        border: 1px solid coral;
        
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