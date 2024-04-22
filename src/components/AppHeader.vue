<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header>
        <!-- Header Ticket Section -->
        <div class="header__ticket">
            <p>Starts TOMORROW! Our biggest event of the year...</p>
            <div class="header__ticket__timer"><span><font-awesome-icon :icon="['far', 'clock']" /></span> 00:00:00:00</div>
            <button>Get Ticket</button>
        </div>

        <!-- Header Navbar Section -->
        <div class="header__navbar">
            <div class="header__navbar__logo">Logo img</div>
            <div class="header__navbar__tabs"><ul><li>tab</li></ul></div>
            componente social icons
        </div>
    </header>
</template>



<style lang="scss" scoped>
    @use '../assets/style/partials/variables.scss' as *;
    @use '../assets/style/partials/mixins.scss' as *;

    .header__ticket{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        background-color: $app-lightgray;
        padding: 20px 0;
        .header__ticket__timer{
            font-weight: bold;
            color: #3F3A64
        }
        
        button{
            @include btn-artist;
        }
    }
</style>