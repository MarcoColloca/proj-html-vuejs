<script>
    import MainTitle from './main-micro-components/MainTitle.vue'


export default {
    components:{
        MainTitle,
    },

    data(){
        return{
            titleBox: {
                sign: 'Articles and Tips',
                title: 'Latest From the Blog',
            }
        }
    }
}
</script>




<template> 
    <!-- Artist Blog Section -->
    <section class="main__artist--blog">
        <div id="Blog"></div>
        <div class="main__artist--blog__title">
            <MainTitle
             :titleBox="titleBox"
            ></MainTitle>
        </div>
        
        <!-- Blog Cards -->
        <div class="main__artist--blog__cards">
            <div class="container-sm">
                <div class="row">
                    <!-- Blog Left Card -->
                    <div class="col-3">
                        <div class="main__artist--blog__card left">
                            <div class="main__artist--blog__card--header">
                                <img src="/imgs/artist-blog-03-480x356.jpg" alt="">
                            </div>

                            <div class="main__artist--blog__card--body">
                                <div class="card--body__job">
                                    <p>ARTIST</p>                                    
                                </div>

                                <div class="card--body__title">
                                    <h3>Brush Strokes Energize Trees in Paintings</h3>
                                </div>

                                <div class="card--body__details">
                                    <span><font-awesome-icon :icon="['far', 'calendar']" /> May 15, 2020</span> <span><font-awesome-icon :icon="['fas', 'eye']" /> 688 views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Blog Hero Card -->
                    <div class="col-6">
                        <div class="main__artist--blog__hero-card">
                            <div class="main__artist--blog__hero-card--body">
                                <img src="/imgs/artist-blog-02-500x680.jpg" alt="">
                            </div>

                            <div class="main__artist--blog__hero-card--footer">
                                <div class="hero-card--footer__job">
                                    <p>ARTIST</p>
                                </div>

                                <div class="hero-card--footer__title">
                                    <h3>Connection Between Self-Portraits and Identity</h3>
                                </div>

                                <div class="hero-card--footer__details">
                                    <span><font-awesome-icon :icon="['far', 'calendar']" /> May 15, 2020</span> <span><font-awesome-icon :icon="['fas', 'eye']" /> 397 views</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Blog Right Card -->
                    <div class="col-3">
                        <div class="main__artist--blog__card right">
                            <div class="main__artist--blog__card--header">
                                <img src="/imgs/artist-blog-01-480x356.jpg" alt="">
                            </div>

                            <div class="main__artist--blog__card--body">
                                <div class="card--body__job">
                                    <p>ARTIST</p>                                    
                                </div>

                                <div class="card--body__title">
                                    <h3>Pocket-Sized Notebookks Hold Miniature Pintings</h3>
                                </div>

                                <div class="card--body__details">
                                    <span><font-awesome-icon :icon="['far', 'calendar']" /> May 15, 2020</span> <span><font-awesome-icon :icon="['fas', 'eye']" /> 603 views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Blog Link to blogs -->
        <div class="main__artist--blog__link">
            <p>Get into details now? </p><a href="#"> View all posts <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></a>
        </div>


        <!-- Blog background images -->
        <img class="artist--blog__img-circle" src="/imgs/artist-shape-06.png" alt="">
        <img class="artist--blog__img-matrix" src="/imgs/maxcoach-shape-05.png" alt="">
        <img class="artist--blog__img-string" src="/imgs/maxcoach-shape-14-1536x343.png" alt="">
        <img class="artist--blog__img-stain" src="/imgs/artist-shape-00.png" alt="">
    </section>
</template>




<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;


    .main__artist--blog{
        position: relative;
        z-index: -2;
        background-color: $app-lightgray;
        padding: 50px 0;


        .artist--blog__img-circle{
            position: absolute;
            left: 250px;
            top: 200px;
            width: 110px;
            z-index: -1;
        }

        .artist--blog__img-matrix{
            position: absolute;
            left: 725px;
            top: 196px;
            z-index: -1;
        }

        .artist--blog__img-string{
            position: absolute;
            left: 4px;
            top: 256px;
             transform: rotate(-6deg);
            z-index: -1;
            width: 100%;
            filter: brightness(63%) sepia(100%);
        }

        .artist--blog__img-stain{
            position: absolute;
            left: 1037px;
            top: 659px;
            width: 180px;
            z-index: -1;
        }




        .main__artist--blog__title{
            padding: 40px 0;
        }



        .main__artist--blog__cards{
            position: relative;
            z-index: 99;
            .main__artist--blog__card{
                background-color: $app-white;

                .main__artist--blog__card--body{
                    padding: 20px;
                    padding-top: 10px;

                    .card--body__job{
                        opacity: 0.5;
                    }

                    .card--body__title{
                        font-size: 14px;
                        margin: 10px 0;
                        h3{
                            font-weight: 500;
                        }
                    }

                    .card--body__details{
                        font-size: 12px;
                        opacity: 0.5;
                        span{
                            &:first-of-type{
                                margin-right: 45px;
                            }
                        }
                    }
                }

                &.left{
                    transform: translateY(50%);                    
                }
                
                &.right{
                    transform: translateY(25%);                    
                }
            }   
            
            .main__artist--blog__hero-card{
                position: relative;
                padding: 0 50px;
                .main__artist--blog__hero-card--body{
                    img{
                        filter: brightness(0.8);
                    }
                }


                .main__artist--blog__hero-card--footer{
                    position: absolute;                    
                    bottom: 45px;
                    left: 70px;
                    color: white;
                    .hero-card--footer__job{
                        font-size: 14px;
                    }

                    .hero-card--footer__title{
                        font-size: 22px;
                        margin: 10px 0;
                        width: 400px;
                    }

                    .hero-card--footer__details{
                        font-size: 14px;
                        span{
                            &:first-of-type{
                                margin-right: 35px;
                            }
                        }
                    }
                }
            }
        }
        
        .main__artist--blog__link{
            padding: 50px 0;
            text-align: center;
            p{
                display: inline-block;
            }
            a{
                color: $app-orange;
                font-weight: 400;
            }
        }
    }
</style>