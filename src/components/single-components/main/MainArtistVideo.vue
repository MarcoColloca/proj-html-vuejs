<script>
    export default {
        
    }
</script>



<template>
    <!-- Artist Video Section -->
    <div class="main__artist--video">
        <div class="container-sm">
            <div class="row">
                <div class="col-12">
                    <div class="main__artist--video__imgs-wrapper">
                        <!-- Il numero nelle classi delle immagini, indica lo z-index, quindi la loro posizione rispetto l'asse z. -->
                        <img class="main__artist--video__preview-10" src="/imgs/artist-video-poster.jpg" alt="">
                        <img class="main__artist--video__icon-11" src="/imgs/icon-youtube-play.png" alt="">
                        <img class="artist--video-img-1" src="/imgs/artist-shape-00.png" alt="">
                        <img class="artist--video-img-2" src="/imgs/maxcoach-shape-05.png" alt="">
                        <img class="artist--video-img-3" src="/imgs/maxcoach-shape-12.png" alt="">
                        <img class="artist--video-img-12" src="/imgs/artist-shape-06.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

    .main__artist--video{
        .row{
            padding: 50px 0;
            .main__artist--video__imgs-wrapper{
                position: relative;
                .main__artist--video__preview-10{
                    position: relative;
                    z-index: 11;
                }
                .main__artist--video__icon-11{
                    position: absolute;
                    z-index: 11;
                    cursor: pointer;
                    top: 43%;
                    left: 43%;
                }        
        
                .artist--video-img-1{
                    position: absolute;
                    z-index: 1;
                    left: -165px;
                    top: -48px;
                    width: 250px;
                }

                .artist--video-img-2{
                    position: absolute;
                    z-index: 2;
                    left: -31px;
                    top: -25px;
                }

                .artist--video-img-3{
                    position: absolute;
                    z-index: 3;
                    left: 921px;
                    top: 412px;
                }

                .artist--video-img-12{
                    position: absolute;
                    z-index: 12;
                    left: 930px;
                    top: 130px;
                    width: 120px;
                }
            }
        }

    }
</style>