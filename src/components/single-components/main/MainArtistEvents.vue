<script>
    import MainTitle from './main-micro-components/MainTitle.vue'


    export default {
        components:{
            MainTitle,
        },

        data(){
            return{
                titleBox: {
                    sign: 'Upcoming Events',
                    title: 'Let\'s Work Together',
                },

                artistCards:[
                    {
                        img: '/imgs/artist-event-01-250x300.jpg',
                        date: 'NOV 22, 2020',
                        title: 'Storitelling Workshop',
                        details: [
                            {
                                icon: ['fas', 'location-dot'],
                                text: 'Texas, US'
                            },
                        ],
                    },
                    {
                        img: '/imgs/artist-event-02-250x300.jpg',
                        date: 'OCT 10, 2020',
                        title: 'Painting Art Contest 2020',
                        details: [
                            {
                                icon: ['fas', 'location-dot'],
                                text: 'NewYork, US'
                            },
                        ],
                    },
                    {
                        img: '/imgs/artist-event-03-250x300.jpg',
                        date: 'NOV 23, 2020',
                        title: 'International Art Fair 2020',
                        details: [
                            {
                                icon: ['fas', 'location-dot'],
                                text: 'Hamburg, Germany'
                            },
                        ],
                    },
                    {
                        img: '/imgs/artist-event-04-250x300.jpg',
                        date: 'DEC 15, 2020',
                        title: 'Street Performance: Call for Artist',
                        details: [
                            {
                                icon: ['fas', 'location-dot'],
                                text: 'Illinois, US'
                            },
                        ],
                    },
                ],
            }
        },


        methods:{
            /** Funzione che dato un valore, ritorna una classe se l'valore è maggiore di 1 
                Qui viene usata controllando l'indice, per dare una formattazione condizionale alle cards.*/
            addClassOrder2(index){
                if(index > 1){
                    return 'order-2'
                }
            },

            /** Funzione che dato un valore, ritorna una classe se l'valore è maggiore di 1 
                Qui viene usata controllando l'indice, per dare una formattazione condizionale alle cards.*/
            addClassTextEnd(index){
                if(index > 1){
                    return 'text-end'
                }
            }
        }
    }
</script>



<template>
    <!-- Artist Events Section -->
    <section class="main__artist--events">

        <!-- Evets Title -->
        <div class="main__artist--events__title">
            <MainTitle
             :titleBox="titleBox"
            ></MainTitle>
        </div>


        <!-- Events Cards -->
        <div class="main__artist--events__cards">
            <div class="container-sm">
                <div class="row">
                    <div class="col-6" v-for="(card, i) in artistCards">
                        <!-- 1° Card Events -->
                        <div class="main__artist--events__card">
                            <div class="main__artist--events__card--header" :class="addClassOrder2(i)">
                                <img :src="card.img" alt="">
                            </div>

                            <div class="main__artist--events__card--body" :class="addClassTextEnd(i)">
                                <div class="card--body__date">
                                    {{card.date}}
                                </div>

                                <div class="card--body__title">
                                    <h3>
                                        {{card.title}}
                                    </h3>
                                </div>

                                <div class="card--body__place">
                                    <p><span v-for="detail in card.details"><font-awesome-icon :icon="detail.icon" /> {{detail.text}}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Artist Events Backgorund imgs and title -->
        <!-- Il numero nelle classi delle immagini rappresenta la posizione sullo z-index, più è alto più saranno in superficie-->
        <span class="side-title-left"> Events </span>
        <img class="artist--box_img-1" src="/imgs/maxcoach-shape-13.png" alt="">
        <img class="artist--box_img-2" src="/imgs/artist-shape-00.png" alt="">
        <img class="artist--box_img-3" src="/imgs/artist-shape-02.png" alt="">
    </section>
</template>



<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap');

    .main__artist--events{
        padding: 60px 0;
        position: relative;
        overflow: hidden;
        .side-title-left{
            font-family: "Londrina Outline", sans-serif;
            position: absolute;
            z-index: 1;
            left: -151px;
            bottom: 263px;
            color: #F5ECE4;
            transform: rotate(90deg);
            font-size: 200px;            
        }


        .artist--box_img-1{
            position: absolute;
            z-index: -2;
            top: 200px;
            right: -5px;
            filter: grayscale(100%);
        }


        .artist--box_img-2{
            position: absolute;
            z-index: -1;
            top: 200px;
            right: -65px;            
            opacity: 0.1;
            filter: invert(1) opacity(0.3);
        }

        .artist--box_img-3{
            position: absolute;
            z-index: -1;
            bottom: 0px;
            left: -485px;
            transform: rotate(270deg);
        }



        .main__artist--events__cards{
            padding: 30px 0;
            .main__artist--events__card{
                display: flex;  
                align-items: center;   
                padding: 30px 5px;    
                img{
                    min-width: 250px;
                }
                .main__artist--events__card--body{
                    padding: 0 20px;
                    .card--body__date{
                        opacity: 0.7;
                    }

                    .card--body__title{
                        font-size: 14px;
                        h3{
                            font-weight: 500;
                        }
                    }

                    .card--body__place{
                        font-size: 12px;
                        opacity: 0.7;
                    }

                }
            }
        }

        

    }
</style>