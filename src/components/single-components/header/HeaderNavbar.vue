<script>
    import SocialIcons from '../general/SocialIcons.vue';


    export default {
        components:{
            SocialIcons,
        },
        props:{
            logo: String,
            tabs: Array,
        },

        data(){
            return{

            }
        }
    }
</script>




<template>
    <div class="header__navbar">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="header__navbar__logo">
                        <img :src="logo" alt="Logo">
                    </div>
                </div>

                <div class="col-6">                        
                    <ul class="header__navbar__tabs">
                        <li v-for="tab in tabs">
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

</template>




<style lang="scss" scoped>

    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;


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