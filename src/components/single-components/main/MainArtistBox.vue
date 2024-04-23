<script>
    export default {
        
    }
</script>



<template>
    <!-- Artist Box Section -->
    <div class="main__artist--box">
        <!-- Artist Box Title -->
        <div class="main__artist--box__title">
            <p class="artist-sign">Artist Coaching</p>
            <h1>I understand what it takes to create. I can help you with</h1>
        </div>

        <!-- Artist Box Cards -->
        <div class="main__artist--box__cards">
            <div class="container-sm">
                <div class="row">
                    <div class="col-3">
                        <!-- 1° Card dell'Artist Box Cards -->
                        <div class="main__artist--box__card">
                            <div class="main__artist--box__card__top">
                                <img src="/imgs/artist-box-image-01.png" alt="">
                            </div>
                            <div class="main__artist--box__card__body">
                                <h2 class="main__artist--box__card__body__title">
                                    Online Courses
                                </h2>
                                <p class="main__artist--box__card__body__description">
                                    Online art coaching now offers you a very powerful way to redesign your artist mind.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <!-- 2° Card dell'Artist Box Cards -->
                        <div class="main__artist--box__card mt-4">
                            <div class="main__artist--box__card__top">
                                <img src="/imgs/artist-box-image-02.png" alt="">
                            </div>
                            <div class="main__artist--box__card__body">
                                <h2 class="main__artist--box__card__body__title">
                                    One to One
                                </h2>
                                <p class="main__artist--box__card__body__description">
                                    Getting the necessary clarity about the current state to help you improve your ability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <!-- 3° Card dell'Artist Box Cards -->
                        <div class="main__artist--box__card">
                            <div class="main__artist--box__card__top">
                                <img src="/imgs/artist-box-image-03.png" alt="">
                            </div>
                            <div class="main__artist--box__card__body">
                                <h2 class="main__artist--box__card__body__title">
                                    Anywhere
                                </h2>
                                <p class="main__artist--box__card__body__description">
                                    Access to valuable and portable program wich allow you to setup and live anywhere you want.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <!-- 4° Card dell'Artist Box Cards -->
                        <div class="main__artist--box__card mt-4">
                            <div class="main__artist--box__card__top">
                                <img src="/imgs/artist-box-image-04.png" alt="">
                            </div>
                            <div class="main__artist--box__card__body">
                                <h2 class="main__artist--box__card__body__title">
                                    On Time
                                </h2>
                                <p class="main__artist--box__card__body__description">
                                    Punctuality is our top priority because it's an essential criteria to assess a program quality.
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

                            <button>Get Started Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;

    .main__artist--box__title{
        padding-top: 70px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px;
        
        h1{
            max-width: 565px;
            font-weight: 600;
            text-align: center;
        }

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

            button{
                @include btn-artist-light;
                padding: 15px 35px;
            }
        }
    }
</style>