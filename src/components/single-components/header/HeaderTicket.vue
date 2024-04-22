<script>
    export default {
        props:{
            timer: Object,
        },

        data(){
            return{

            }
        }
    }
</script>


<template>
    <div class="header__ticket">
        <p class="header__ticket__intro">Starts TOMORROW! Our biggest event of the year...</p>
        <div class="header__ticket__timer">
            <span class="header__ticket__timer--icon"> <font-awesome-icon :icon="['far', 'clock']"/> </span>  
            <span class="header__ticket__timer--time"> {{timer.days}} : {{timer.hours}} : {{timer.minutes}} : {{timer.seconds}} </span>
        </div>
        <button>Get Ticket</button>
    </div>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;


    /* Ticket Section*/
    .header__ticket{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background-color: $app-lightgray;
        padding: 10px 0;
        .header__ticket__intro{
            font-size: 14px;
        }
        .header__ticket__timer{
            font-size: 18px;
            font-weight: bold;
            color: #3F3A64;
            .header__ticket__timer--icon{
                margin-right: 10px
            }
        }
        
        button{
            @include btn-artist;
            padding: 8px 40px;
        }
    }

</style>