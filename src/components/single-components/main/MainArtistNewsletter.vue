<script>
    export default {
        data(){
            return{
                userMail: ''
            }
        }
    }
</script>




<template>
    <!-- Artist Newsletter Section -->
    <section class="main__artist--newsletter">
        <div class="container-sm">
            <div class="row">
                
                <!-- Newsletter Title -->
                <div class="col-4">
                    <h1>
                        Newsletter to get in touch
                    </h1>
                </div>

                <!-- Newsletter Mail Input -->
                <div class="col">
                    <div class="main__artist--newsletter__mailbox">
                        <input type="mail" placeholder="Your e-mail" v-model="userMail">
                        <font-awesome-icon class="main__artist--newsletter__mailbox__arrow-icon" :icon="['fas', 'arrow-right-long']" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Newsletter images -->
        <img class="artist--newsletter__img-left" src="/imgs/artist-shape-color-paint-top-left.png" alt="">
        <img class="artist--newsletter__img-right" src="/imgs/artist-shape-color-paint-bottom-right.png" alt="">
    </section>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;


    .main__artist--newsletter{
        position: relative;
        overflow: hidden;
        padding: 50px 0;
        background-color: #244186;
        color: $app-white;
        font-family: 'Times New Roman', Times, serif;

        .row{
            align-items: center;
        }


        h1{
            max-width: 320px;
            margin-right: 100px;
        }

        input{
            border: none;
            border-bottom: 1px solid rgb(255, 255, 255);
            color: white;
            background-color: transparent;
            padding-left: 5px;
            padding-top: 10px;
            padding-bottom: 10px;
            width: 100%;
            font-size: 26px;
            font-family: 'Times New Roman', Times, serif;
            &::placeholder{
                opacity: 1;
                color: rgb(255, 255, 255);
            }
            &:focus{
                outline: none;
                &::placeholder{
                    color: transparent;
                }
            }
        }

        .main__artist--newsletter__mailbox{
            display: flex;
            align-items: center;
            position: relative;
            z-index: 99;
            .main__artist--newsletter__mailbox__arrow-icon{
                font-size: 26px;
                margin-left: -32px;
                margin-bottom: -10px;
                padding: 3px;
                cursor: pointer;
            }
        }

        img{
            position: absolute;
        }

        .artist--newsletter__img-left{
            left: 0;
            bottom: 0;
            z-index: 1;
        }

        .artist--newsletter__img-right{
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
</style>