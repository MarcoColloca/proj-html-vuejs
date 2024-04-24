<script>
    import MainTitle from './main-micro-components/MainTitle.vue'

    export default {
        components:{
            MainTitle,
        },
        





        data(){
            return{
                titleBox: {
                    sign: 'Artist coaching',
                    title: 'Latest Online Courses',
                },

                artistCards:[
                    {
                        img: '/imgs/artist-course-01-480x480.jpg',
                        price: 18,
                        title: 'The Acrylic Painting Academy',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '4 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-02-480x480.jpg',
                        price: 21,
                        title: 'Drawing and Shading: Complete Course',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '14 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-03-480x480.jpg',
                        price: 19,
                        title: 'The Color Theory for DIgital Artist',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '7 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-04-480x480.jpg',
                        price: 19,
                        title: 'Portait Drawing The Smart Way',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '2 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-05-480x480.jpg',
                        price: 35,
                        title: 'Ultimate Guide to Digital Sketching for Beginner',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '14 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-06-480x480.jpg',
                        price: 19,
                        title: 'Mastering Watercolor Painting from Beginner',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '9 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-07-480x480.jpg',
                        price: 25,
                        title: 'The Art & Science of Drawing',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '4 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                    {
                        img: '/imgs/artist-course-08-480x480.jpg',
                        price: 22,
                        title: 'The Colored Pencil Drawing Course',
                        details: [
                            {
                                icon: ['far', 'file-lines'],
                                text: '6 Lessons'
                            },
                            {
                                icon: ['far', 'user'],
                                text: '50 Students'
                            }
                        ],
                    },
                ]
            }
        },




        methods:{
            /** Funzione che prende un parametro in entrata e ritorna un numero "arrotondato" alla seconda cifra decimale */
            formatPrice(price){

                const newnumber = '$ ' + parseFloat(price).toFixed(2)
               
                return newnumber
            }
        }
    }
</script>


<template>
    <!-- Artist Courses Section -->
    <section class="main__artist--courses">
        <div id="Courses"></div>
        <!-- Artist Courses Title -->
        <div class="main__artist--courses__title">
            <MainTitle
             :titleBox="titleBox"
            ></MainTitle>            
        </div>

        <!-- Artist Courses Cards -->
        <div class="main__artist--courses__cards">
            <div class="container">
                <div class="row">
                    <div class="col-3" v-for="card in artistCards">                        
                        <div class="main__artist--courses__card">
                            <div class="main__artist--courses__card--header">
                                <img :src="card.img" alt="">
                            </div>

                            <div class="main__artist--courses__card--body">
                                <div class="card--body__price">
                                    <p>
                                        {{formatPrice(card.price)}}
                                    </p>
                                </div>
                                <div class="card--body__title">
                                    <h3>
                                        {{ card.title }}
                                    </h3>
                                </div>
                                <div class="card--body__details">
                                    <p>
                                        <span v-for="detail in card.details"><font-awesome-icon :icon="detail.icon" /> {{detail.text}} </span> 
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Artist Courses Button -->
        <div class="main__artist--courses__button">
            <button>View All Courses <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></button>
        </div>

        <!-- Artist Courses Background imgs and Title -->
        <img class="artist--courses__img-left" src="/imgs/artist-shape-01.png" alt="">

        <img class="artist--courses__img-right" src="/imgs/artist-shape-01.png" alt="">

        <span class="side-title-right">Courses</span>
    </section>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;

    .main__artist--courses{
        position: relative;
        padding: 50px 0;
        .main__artist--courses__title{
            margin-bottom: 30px;
        }

        .artist--courses__img-left{
            position: absolute;
            left: -250px;
            bottom: 75px;
            z-index: -2;
        }

        .artist--courses__img-right{
            position: absolute;
            right: -270px;
            top: 126px;
            transform: rotate(248deg);
            z-index: -1;
            filter: invert(1);
        }
        
        .side-title-right{
            font-family: "Londrina Outline", sans-serif;
            position: absolute;
            right: -190px;
            top: 465px;
            color: #F5ECE4;
            transform: rotate(90deg);
            font-size: 200px;            

        }        
    }


    .main__artist--courses__cards{
        
        .main__artist--courses__card{
            padding: 20px;

            .main__artist--courses__card--body{
                width: 230px;
                padding: 10px;
                padding-left: 20px;
                padding-right: 0;
                .card--body__price{
                    color: $app-orange;
                    font-weight: 600;
                }

                .card--body__title{
                    font-size: 14px;
                    margin-bottom: 20px;
                    h3{
                        font-weight: 500;
                    }
                }

                .card--body__details{
                    font-size: 12px;
                    color: rgb(131, 131, 131);
                    span{
                        &:first-of-type{
                            margin-right: 20px;
                        }
                    }
                }                
            }

            &:hover{
                .main__artist--courses__card--body{
                    border: 1px solid $app-orange;
                    transform: translateY(-40px);
                    margin-bottom: -40px;
                    z-index: 99;
                    background-color: white;
                    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.2);
                }                        
            }      
        }
    }


    .main__artist--courses__button{        
        display: flex;
        justify-content: center;
        padding: 30px 0;
        button{
            @include btn-artist-light;
            padding: 15px 25px;
        }
    }    
</style>