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
    </section>
</template>



<style lang="scss" scoped>
    
    .main__artist--events{
        padding: 60px 0;

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