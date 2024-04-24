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
                },

                artistCards:[
                    {  
                        cardIndex: 0,                                              
                        bodyTitle: ' It\'s a choice of quality for people with special needs',
                        bodyText: 'I\'m a very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                        img: '/imgs/artist-testimonial-avatar-02.jpg',
                        footerTitle: 'Florence Themes ',
                        footerText: '/Multimedia Admin',
                    },
                    {
                        cardIndex: 1,
                        bodyTitle: 'High level of efficiency and scientific teaching methods',
                        bodyText: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                        img: '/imgs/artist-testimonial-avatar-04.jpg',
                        footerTitle: 'Mina Hollace',
                        footerText: '/Freelancer',
                    },
                    {  
                        cardIndex: 2,                                              
                        bodyTitle: 'Professional team of specialists and passionate mentors at reach',
                        bodyText: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                        img: '/imgs/artist-testimonial-avatar-01.jpg',
                        footerTitle: 'Madley Pondor',
                        footerText: '/IT Specialist',
                    },
                ],

                carouselComparisonIndex: 1,

                intervallId: null,
            }
        },


        mounted(){
            this.intervalId = setInterval(() => {
                if(this.carouselComparisonIndex !== this.artistCards.length - 1){
                    this.carouselComparisonIndex++;
                }else{
                    this.carouselComparisonIndex = 0;
                }

            }, 5000);
        },


        methods:{

            isActive(index){
                if(index === this.carouselComparisonIndex){
                    return 'active'
                }
            },

            turnActive(index){
                this.carouselComparisonIndex = index
            },

            startSlider() {
                if (this.intervalId === null) {
                                        
                    this.intervalId = setInterval(() => {
                        if(this.carouselComparisonIndex !== this.artistCards.length - 1){
                            this.carouselComparisonIndex++;
                        }else{
                            this.carouselComparisonIndex = 0;
                        }
            
                    }, 5000);
                }
            },

            pauseSlider(){
                if (this.intervalId !== null) {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                }
            },

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
                <div class="col-4" v-for="(card, i) in artistCards">
                    <div 
                     class="main__artist--testimonials__card-box__card" 
                     :class="isActive(i)" 
                     @click="turnActive(i)"
                     @mouseover="pauseSlider()" 
                     @mouseleave="startSlider()"
                    >
                        <div class="main__artist--testimonials__card-box__card__body">
                            <div class="main__artist--testimonials__card-box__card__body--title">
                                <h2>
                                    {{ card.bodyTitle }}
                                </h2>
                            </div>
                            <div class="main__artist--testimonials__card-box__card__body--text">
                                
                                <p>
                                    {{card.bodyText}}
                                </p>
                            </div>
                        </div>

                        <div class="main__artist--testimonials__card-box__card__footer">
                            <div class="main__artist--testimonials__card-box__card__footer--img">
                                <img :src="card.img" alt="">
                            </div>

                            <div class="main__artist--testimonials__card-box__card__footer--description">
                                <h3>
                                    {{card.footerTitle}}
                                </h3>
                                <p>
                                    {{card.footerTitle}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Testimonials Scrollbar -->
        <div class="main__artist--testimonials__scrollbar">
            <font-awesome-icon 
             :icon="['fas', 'circle']" 
             class="main__artist--testimonials__scrollbar__circle"
             :class="isActive(i)"
             v-for="(dot, i) in artistCards" 
             @click="turnActive(i)"
            />
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
                padding: 60px 50px;
                margin: 0 50px;
                opacity: 0.5;
                cursor: default;
                &.active{
                    opacity: 1;
                }

                .main__artist--testimonials__card-box__card__body{
                    margin-bottom: 20px;
                    .main__artist--testimonials__card-box__card__body--title{
                        font-size: 12px;
                        margin-bottom: 15px;
                        h2{
                            font-weight: 500;
                        } 
                    }

                    .main__artist--testimonials__card-box__card__body--text{
                        font-size: 15px;
                        line-height: 30px;
                        opacity: 0.7;
                    }
                }

                .main__artist--testimonials__card-box__card__footer{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    img{
                        border-radius: 50%;
                        width: 70px;
                    }

                    .main__artist--testimonials__card-box__card__footer--description{
                        font-size: 14px;
                    }
                }
            }
        }

        .main__artist--testimonials__scrollbar{
            padding-bottom: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .main__artist--testimonials__scrollbar__circle{
                font-size: 8px;
                padding: 3px 10px;
                opacity: 0.3;
                cursor: pointer;
                &:hover{
                    opacity: 0.7;
                    color: $app-lightblue;
                }
                &.active{
                    font-size: 14px;
                    opacity: 1;
                }
            }
        }
    }



</style>