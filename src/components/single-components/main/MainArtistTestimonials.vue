<script>
    export default {
        
    }
</script>



<template>
    <!-- Testimonials Section -->
    <div class="main__artist--testimonials">
        <!-- Testimonials Title -->
        <div class="main__artist--testimonials__title">
            <p class="artist-sign">Testimonials</p>
            <h1>Why do people love me?</h1>
        </div>

        <!-- Testimonials Cards -->
        <div class="main__artist--testimonials__card-box">
            <div class="row">
                <div class="col-4">
                    <div class="main__artist--testimonials__card-box__card">

                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonials Scrollbar -->
        <div class="main__artist--testimonials__scrollbar">
            
        </div>
    </div>
</template>



<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;
    @use '../../../assets/style/partials/mixins.scss' as *;

    
    .main__artist--testimonials{
        text-align: center;
        h1{
            font-weight: 600;
        }
    }

</style>