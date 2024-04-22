<script>

    import SocialIcons from '../general/SocialIcons.vue'

    export default {     
        components:{
            SocialIcons,
        },
        
        props:{
            address: Object,
            explore: Object,
            informations: Object,
            instagram: Object,
        },

        data(){
            return{
            }
        }
    }
</script>


<template>
    <div class="footer__info">
        <div class="container">
            <div class="row">
                <!-- Footer Info Address -->
                <div class="col">
                    <ul class="footer__info--address">
                        <h2>{{ address.title }}</h2>
                        <li v-for="info in address.infos">
                            <p> {{ info }} </p>   
                        </li>
                    </ul>                    
                    <SocialIcons></SocialIcons>
                </div>

                <!-- Footer Info Explore -->
                <div class="col-2">
                    <h2>{{ explore.title }}</h2>
                    <ul class="footer__info--explore">
                        <li v-for="info in explore.infos">
                            <a :href="info.href"> {{ info.name }} </a>
                        </li>
                    </ul>
                </div>

                <!-- Footer Info Informations -->
                <div class="col-2">
                    <h2>{{ informations.title }}</h2>
                    <ul class="footer__info--information">
                        <li v-for="info in informations.infos">
                            <a :href="info.href"> {{ info.name }} </a>
                        </li>
                    </ul>
                </div>

                <!-- Footer Info Instagram -->
                <div class="col">
                    <h2 >{{ instagram.title }} <span class="sub-title"> &commat;maxcoach</span> </h2> 
                    <ul class="footer__info--instagram">
                        <li v-for="info in instagram.infos">
                            <img :src="info" alt="Foto">
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;

    .footer__info{
        font-size: 12px;
        color: $app-darkgray;

        h2{
            font-size: 15px;
            margin-bottom: 25px;
        }

        .sub-title{ 
            color: $app-orange;
            font-weight: 400;
            font-size: 12px;
        }

        .social-icons-box{
            justify-content: flex-start;
            margin-top: 30px;
        }

        .footer__info--address,
        .footer__info--explore,
        .footer__info--information,
        .footer__info--instagram{
            li{
                margin-bottom: 15px;
            }
        }


        .footer__info--instagram{
            display: flex;            
            gap: 20px;
            img{
                width: 130px;
            }
        }
    }
</style>