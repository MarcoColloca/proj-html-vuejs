<script>
    import MainTitle from './main-micro-components/MainTitle.vue'

    export default {
        components:{
            MainTitle,
        },

        data(){
            return{
                titleBox: {
                    sign: 'Testimonials',
                    title: 'Why do people love me?',
                }
            }
        }
    }      
</script>



<template>
    <!-- Mid-Section Wave container -->
    <div class="wave-container">
        <img class="artist--video-img-0" src="/imgs/artist-wave.svg" alt="">
    </div>
    <!-- Artist Testimonials Section -->
    <section class="main__artist--testimonials">
        <!-- Testimonials Title -->
        <div class="main__artist--testimonials__title">
            <MainTitle
             :titleBox="titleBox"
            ></MainTitle>
        </div>

        <!-- Testimonials Cards -->
        <div class="main__artist--testimonials__card-box">
            <div class="row">
                <!-- 1° Card Testimonials -->
                <div class="col-4">
                    <div class="main__artist--testimonials__card-box__card">
                        <div class="main__artist--testimonials__card-box__card__body">
                            <div class="main__artist--testimonials__card-box__card__body--title">
                                <h2>
                                    It's a choice of quality for people with special needs
                                </h2>
                            </div>
                            <div class="main__artist--testimonials__card-box__card__body--text">
                                
                                <p>
                                    I'm a very strict person so I require everything to be
                                    organized and neat. Then, I'll be able to make things
                                    right and shine. MaxCoach guys just got me.
                                </p>
                            </div>
                        </div>

                        <div class="main__artist--testimonials__card-box__card__footer">
                            <div class="main__artist--testimonials__card-box__card__footer--img">
                                <img src="/imgs/artist-testimonial-avatar-02.jpg" alt="">
                            </div>

                            <div class="main__artist--testimonials__card-box__card__footer--description">
                                <h3>
                                    Florence Themes
                                </h3>
                                <p>
                                    /Multimedia Admin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2° Card Testimonials -->
                <div class="col-4">
                    <div class="main__artist--testimonials__card-box__card active">
                        <div class="main__artist--testimonials__card-box__card__body">
                            <div class="main__artist--testimonials__card-box__card__body--title">
                                <h2>
                                    High level of efficiency and scientific teaching methods
                                </h2>
                            </div>
                            <div class="main__artist--testimonials__card-box__card__body--text">
                                <p>
                                    I am free to learn at my own pace, follow my own
                                    schedule and choose the subject I want to learn from
                                    the syllabus. Great study portal for people like me.
                                </p>
                            </div>
                        </div>

                        <div class="main__artist--testimonials__card-box__card__footer">
                            <div class="main__artist--testimonials__card-box__card__footer--img">
                                <img src="/imgs/artist-testimonial-avatar-04.jpg" alt="">
                            </div>

                            <div class="main__artist--testimonials__card-box__card__footer--description">
                                <h3>
                                    Mina Hollace
                                </h3>
                                <p>
                                    /Freelancer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3° Card Testimonials -->
                <div class="col-4">
                    <div class="main__artist--testimonials__card-box__card">
                        <div class="main__artist--testimonials__card-box__card__body">
                            <div class="main__artist--testimonials__card-box__card__body--title">
                                <h2>
                                    Professional team of specialists and passionate mentors at reach
                                </h2>
                            </div>
                            <div class="main__artist--testimonials__card-box__card__body--text">
                                <p>
                                    I need to get a certification for English proficiency and
                                    MaxCoach is my best choice. Their tutors are smart and
                                    professional when dealing with students.
                                </p>
                            </div>
                        </div>

                        <div class="main__artist--testimonials__card-box__card__footer">
                            <div class="main__artist--testimonials__card-box__card__footer--img">
                                <img src="/imgs/artist-testimonial-avatar-01.jpg" alt="">
                            </div>

                            <div class="main__artist--testimonials__card-box__card__footer--description">
                                <h3>
                                    Madley Pondor
                                </h3>
                                <p>
                                    /IT Specialist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonials Scrollbar -->
        <div class="main__artist--testimonials__scrollbar">
            <font-awesome-icon :icon="['fas', 'circle']" class="main__artist--testimonials__scrollbar__circle active"/>
            <font-awesome-icon :icon="['fas', 'circle']" class="main__artist--testimonials__scrollbar__circle"/>
            <font-awesome-icon :icon="['fas', 'circle']" class="main__artist--testimonials__scrollbar__circle"/>
            <font-awesome-icon :icon="['fas', 'circle']" class="main__artist--testimonials__scrollbar__circle"/>
        </div>
    </section>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;

    .wave-container{
        position: relative;
        .artist--video-img-0{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 300px;
            opacity: 0.1;
            filter: invert(91%) sepia(3%) saturate(111%) hue-rotate(351deg) brightness(80%) contrast(97%);
            
        }

    }

    .main__artist--testimonials{        
        background-color: #FAF8F6;
        
        .main__artist--testimonials__title{
            padding-top: 100px;
        }


        .main__artist--testimonials__card-box{
            padding: 50px 0;
            .main__artist--testimonials__card-box__card{
                @include card-base;
                padding: 100px;
                margin: 0 50px;
                opacity: 0.5;
                &.active{
                    opacity: 1;
                }

                .main__artist--testimonials__card-box__card__body{
                    margin-bottom: 50px;
                    .main__artist--testimonials__card-box__card__body--title{
                        
                        margin-bottom: 15px;
                    }

                    .main__artist--testimonials__card-box__card__body--text{
                        font-size: 19px;
                        line-height: 33px;
                    }
                }

                .main__artist--testimonials__card-box__card__footer{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    img{
                        border-radius: 50%;
                        width: 100px;
                    }
                }
            }
        }

        .main__artist--testimonials__scrollbar{
            padding-bottom: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            .main__artist--testimonials__scrollbar__circle{
                font-size: 12px;
                opacity: 0.3;
                &.active{
                    font-size: 18px;
                    opacity: 1;
                }
            }
        }




    }



</style>