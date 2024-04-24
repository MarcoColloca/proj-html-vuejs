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
                    sign: 'Hello, I\'m Matin',
                    title: 'Artist Coaching And Mentoring Might Be for You',
                },

                mainButton:{
                    style: 'btn-artist',
                    text: 'Get Started Today'
                },
            }
        }
    }
</script>

<template>
    <!-- Artist Hero Section -->    
    <section class="main__hero">
        <div class="row">
            <div class="col-4">
                <!-- Il numero nelle classi delle immagini, indica lo z-index, quindi la loro posizione seguendo l'asse z. -->
                <div class="main__hero__box--left">
                    <img class="hero__box--left-img-1" src="/imgs/artist-shape-02.png" alt="">
                    <img class="hero__box--left-img-2" src="/imgs/artist-shape-00.png" alt="">
                    <img class="hero__box--left-img-3" src="/imgs/artist-hero-image-03.png" alt="">
                    <img class="hero__box--left-img-4" src="/imgs/artist-shape-03.png" alt="">
                    <img class="hero__box--left-img-5" src="/imgs/artist-hero-image-02.jpg" alt="">
                    <img class="hero__box--left-img-6" src="/imgs/artist-hero-image-01.jpg" alt="">
                </div>
            </div>
    
            <div class="col-4">
                <div class="main__hero__title">
                    <MainTitle
                     :titleBox="titleBox"
                    ></MainTitle>
                    <MainButton
                     :mainButton="mainButton"  
                    ></MainButton>
                </div>
            </div>
            
            <div class="col-4">
                <!-- Il numero nelle classi delle immagini, indica lo z-index, quindi la loro posizione seguendo l'asse z. -->
                <div class="main__hero__box--right">
                    <img class="hero__box--right-img-1" src="/imgs/artist-shape-01.png" alt="">
                    <img class="hero__box--right-img-2" src="/imgs/artist-shape-05.png" alt="">
                    <img class="hero__box--right-img-3" src="/imgs/artist-shape-04.png" alt="">
                    <img class="hero__box--right-img-4" src="/imgs/maxcoach-shape-12.png" alt="">
                    <img class="hero__box--right-img-5" src="/imgs/artist-shape-00.png" alt="">
                    <img class="hero__box--right-img-6" src="/imgs/artist-hero-image-04.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;



    .main__hero{
        overflow: hidden;
        background-color:  #FAF4EE;
        height: 717px;


        .row{
            height: 100%;
        }
        

        
        
        .main__hero__title{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 23px;
        }


        .main__hero__box--left,
        .main__hero__box--right{
            position: relative;
            height: 100%;
        }


        img{
            position: absolute;
        }

        .main__hero__box--left{

            .hero__box--left-img-1{
                z-index: 1;
                right: auto;
                bottom: auto;               
            }

            .hero__box--left-img-2{
                z-index: 2;                
                right: 191px;
                bottom: 15px;
                width: 560px;
            }
    
            .hero__box--left-img-3{
                z-index: 3;                
                right: -85px;
                bottom: 30px;
            }
    
            .hero__box--left-img-4{
                z-index: 4;                
                right: 262px;
                bottom: 62px;
                width: 350px;
            }
    
            .hero__box--left-img-5{
                z-index: 5;                
                right: 0;
                bottom: 267px;
                box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
            }
    
            .hero__box--left-img-6{
                z-index: 6;                
                right: 275px;
                bottom: 45px;
                box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);

            }
        }

        .main__hero__box--right{
            .hero__box--right-img-1{
                z-index: 1;
                bottom: 27px;                
                left: -322px;
            }

            .hero__box--right-img-2{
                z-index: 2;
                bottom: 0;                
                left: 120px;
                width: 365px;
            }

            .hero__box--right-img-3{
                z-index: 3;
                bottom: 343px;                
                left: 281px;
            }

            .hero__box--right-img-4{
                z-index: 4;
                bottom: 35px;                
                left: 30px;
            }

            .hero__box--right-img-5{
                z-index: 5;
                bottom: 83px;                
                left: -44px;
                width: 150px;
                filter: invert(0%) sepia(0%) saturate(2989%) hue-rotate(210deg) brightness(113%) contrast(102%);
            }

            .hero__box--right-img-6{
                z-index: 6;
                bottom: 52px;                
                left: 0;
            }

        }
    }

</style>