<script>
    import MainTitle from './main-micro-components/MainTitle.vue'
    import MainButton from './main-micro-components/MainButton.vue'

    export default {
        components:{
            MainTitle,
            MainButton,
        },

        data(){
            return{
                titleBox: {
                    sign: 'Artist coaching',
                    title: 'I understand what it takes to create. I can help you with',
                },

                titleCards: [
                    {
                        img: '/imgs/artist-box-image-01.png',
                        title:'Online Courses',
                        details:'Online art coaching now offers you a very powerful way to redesign your artist mind.',
                    },     
                    {
                        img: '/imgs/artist-box-image-02.png',
                        title:'One to One',
                        details:'Getting the necessary clarity about the current state to help you improve your ability.',
                    },                    
                    {
                        img: '/imgs/artist-box-image-03.png',
                        title:'Anywhere',
                        details:'Access to valuable and portable program wich allow you to setup and live anywhere you want.',
                    },                    
                    {
                        img: '/imgs/artist-box-image-04.png',
                        title:'On Time',
                        details:'Punctuality is our top priority because it\'s an essential criteria to assess a program quality.',
                    },                    
                ],

                mainButton:{
                    style: 'btn-artist-light',
                    text: 'Get Started Today'
                },
            }
        },


        methods:{
            /** Funzione che aggiunge del margine top pari a 4rem agli elementi il cui parametro passato è dispari 
                (nel caso di un ciclo for risulteranno spostati gli elementi in posizione pari (in quanto hanno indice dispari)) */
            addMarginTop(index){
                if((index + 1) % 2 === 0){
                    return 'mt-4'
                }
            }

        }
    }
</script>



<template>
    <!-- Artist Box Section -->
    <section class="main__artist--box">
        <!-- Artist Box Title -->
        <div class="main__artist--box__title">
            <MainTitle
             :titleBox="titleBox"
            ></MainTitle>
        </div>

        <!-- Artist Box Cards -->
        <div class="main__artist--box__cards">
            <div class="container-sm">
                <div class="row">
                    <div class="col-3" v-for="(card, i) in titleCards">                        
                        <div class="main__artist--box__card" :class="addMarginTop(i)">
                            <div class="main__artist--box__card__header">
                                <img :src="card.img" alt="">
                            </div>
                            <div class="main__artist--box__card__body">
                                <h2 class="main__artist--box__card__body__title">
                                    {{ card.title }}
                                </h2>
                                <p class="main__artist--box__card__body__description">
                                    {{ card.details }}
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>

        <!-- Artist Box Description -->
        <div class="main__artist--box__description">
            <div class="container-sm">
                <div class="row">
                    <div class="col-6">
                        <div class="main__artist--box__description--title">
                            <img src="/imgs/artist-quote-icon.png" alt="quotes">
                            <h2>
                                I coach and mentor visual, artists like you, to Create Like You Mean It
                            </h2>
                            <p class="artist-sign">
                                Martin Garrix
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-6">
                        <div class="main__artist--box__description--text">
                            <p>
                                As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. 
                                I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be. 
                                l support artists in crafting and living a creative life as well as feeling good about themselves and their art.
                            </p>
            
                            <p>
                                As an artist and an educator for nearly 30 years, I understand what ittakes to create.
                            </p>

                            <MainButton
                             :mainButton="mainButton"  
                            ></MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Artist Box Background Images-->
        <!-- Il numero nelle classi delle immagini, indica lo z-index, quindi la loro posizione seguendo l'asse z. -->
        <img class="artist--box_img-1" src="/imgs/artist-shape-00.png" alt="">
        <img class="artist--box_img-2" src="/imgs/artist-shape-01.png" alt="">
        <img class="artist--box_img-3" src="/imgs/maxcoach-shape-13.png" alt="">
        <img class="artist--box_img-4" src="/imgs/maxcoach-shape-14-1536x343.png" alt="">
    </section>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;


    .main__artist--box{
        position: relative;

        .artist--box_img-1{
            position: absolute;
            z-index: -4;
            top: 300px;
            right: 450px;
            opacity: 0.1;
            filter: invert(1) opacity(0.3);
        }

        .artist--box_img-2{
            position: absolute;
            z-index: -3;
            top: 54px;
            left: -201px;
            transform: rotate(225deg);        
        }

        .artist--box_img-3{
            position: absolute;
            z-index: -2;
            top: 300px;
            right: -30px;
        }

        .artist--box_img-4{
            position: absolute;
            z-index: -1;
            width: 100%;
            top: 100px;
            left: 0;
        }


    }

    .main__artist--box__title{
        padding-top: 70px;
        font-size: 22px;
    }

    .main__artist--box__cards{
        padding: 50px 0;

        .main__artist--box__card{
            padding: 20px;
            .main__artist--box__card__body{
                .main__artist--box__card__body__title{
                    font-size: 18px;
                    font-weight: 500;
                    margin: 10px 0;
                }
    
                .main__artist--box__card__body__description{
                    font-size: 13px;
                    font-weight: 300;                    
                }
            }
        }
    }


    .main__artist--box__description{
        padding: 120px 0;

        .main__artist--box__description--title{
            position: relative;
            padding-right: 120px;
            margin-left: -70px;
            margin-top: -10px;
            text-align: center;
            h2{
                font-size: 44px;
                margin-bottom: 35px;
                line-height: 62px;
                font-weight: 600;
            }



            img{
                position: absolute;
                left: 35%;
                top: -50px;
            }
        }

        .main__artist--box__description--text{            
            p{
                font-size: 15px;
                line-height: 30px;
                font-weight: 300;
                &:last-of-type{
                    margin: 30px 0;
                }
            }
        }
    }
</style>