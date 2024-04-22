<script>
    export default {
        
    }
</script>

<template>
    <!-- Hero Section -->
    <div class="main__hero">
        <div class="row">
            <div class="col-4">
                <div class="main__hero__box--left">
                    <img class="hero-img-1" src="/imgs/artist-hero-image-01.jpg" alt="">
                    <img class="hero-img-2" src="/imgs/artist-hero-image-02.jpg" alt="">
                    <img class="hero-img-3" src="/imgs/artist-hero-image-03.png" alt="">
                    <img class="hero-img-4" src="/imgs/artist-shape-00.png" alt="">
                </div>
            </div>
    
            <div class="col-4">
                <div class="main__hero__title">
                    <p class="artist-sign">Hello, Im Matin</p>
                    <h1>Artist Coaching And Mentoring Might Be for You</h1>
                    <button>Get started today</button>
                </div>
            </div>
    
            <div class="col-4">
                <div class="main__hero__box--right">
                    
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;


    .main__hero{
        
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

            h1{
                max-width: 500px;
                text-align: center;
                margin-top: 20px;
                margin-bottom: 35px
            }

            button{
                @include btn-artist;
                padding: 20px 35px;
            }
        }


        .main__hero__box--left,
        .main__hero__box--right{
            position: relative;
            height: 100%;
        }


        img{
            position: absolute;
        }

        .hero-img-1{
            z-index: 4;
            left: 205px;
            bottom: 55px;
        }

        .hero-img-2{
            z-index: 3;
            right: 5px;
            top: 80px;
        }

        .hero-img-3{
            z-index: 2;
            right: -85px;
            bottom: 30px;
        }

        .hero-img-4{
            z-index: 1;
            left: -50px;
            bottom: 15px;
            width: 560px;
        }
    }

</style>