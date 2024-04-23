<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>



<template>
    <!-- Artist Events Section -->
    <section class="main__artist--events">

        <!-- Evets Title -->
        <div class="main__artist--events__title">
            <p class="artist-sign">Upcoming Events</p>
            <h1>Let's Work Together</h1>
        </div>


        <!-- Events Cards -->
        <div class="main__artist--events__cards">
            <div class="container-sm">
                <div class="row">
                    <div class="col-6">
                        <!-- 1° Card Events -->
                        <div class="main__artist--events__card">
                            <div class="main__artist--events__card--header">
                                <img src="/imgs/artist-event-01-250x300.jpg" alt="">
                            </div>

                            <div class="main__artist--events__card--body">
                                <div class="card--body__date">
                                    NOV 22, 2020
                                </div>

                                <div class="card--body__title">
                                    <h3>
                                        Storytelling Workshop
                                    </h3>
                                </div>

                                <div class="card--body__place">
                                    <p><font-awesome-icon :icon="['fas', 'location-dot']" /> Texas, US</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-6">
                        <!-- 2° Card Events -->
                        <div class="main__artist--events__card">
                            <div class="main__artist--events__card--header">
                                <img src="/imgs/artist-event-02-250x300.jpg" alt="">
                            </div>

                            <div class="main__artist--events__card--body">
                                <div class="card--body__date">
                                    OCT 10, 2020
                                </div>

                                <div class="card--body__title">
                                    <h3>
                                        Painting Art Contest 2020
                                    </h3>
                                </div>

                                <div class="card--body__place">
                                    <p><font-awesome-icon :icon="['fas', 'location-dot']" /> New York, US</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="col-6">
                        <!-- 3° Card Events -->
                        <div class="main__artist--events__card">
                            <div class="main__artist--events__card--body text-end">
                                <div class="card--body__date">
                                    NOV 23, 2020
                                </div>

                                <div class="card--body__title">
                                    <h3>
                                        International Art Fair 2020
                                    </h3>
                                </div>

                                <div class="card--body__place">
                                    <p><font-awesome-icon :icon="['fas', 'location-dot']" /> Hamburg, Germany</p>
                                </div>
                            </div>

                            <div class="main__artist--events__card--header">
                                <img src="/imgs/artist-event-03-250x300.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-6">
                        <!-- 4° Card Events -->
                        <div class="main__artist--events__card">
                            <div class="main__artist--events__card--body text-end">
                                <div class="card--body__date">
                                    DEC 15, 2020
                                </div>

                                <div class="card--body__title">
                                    <h3>
                                        Street Performance: Call for Artist
                                    </h3>
                                </div>

                                <div class="card--body__place">
                                    <p><font-awesome-icon :icon="['fas', 'location-dot']" /> Illinois, US</p>
                                </div>
                            </div>

                            <div class="main__artist--events__card--header">
                                <img src="/imgs/artist-event-04-250x300.jpg" alt="">
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
        .main__artist--events__title{
            text-align: center;
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