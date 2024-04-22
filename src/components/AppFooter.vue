<script>
    import FooterInfo from './single-components/footer/FooterInfo.vue'
    import FooterCopyright from './single-components/footer/FooterCopyright.vue'

    export default {
        components:{
            FooterInfo,
            FooterCopyright
        },

        data(){            
            return {
                footerAddress:{
                    title: 'Address',
                    infos: ['382 NE 191st St # 87394 Miami, FL 33179-3899', '+1(305) 547-9909 (91m - 5pm EST, Monday - Friday)', 'support@maxcoach.com']
                },

                footerExplore:{
                    title: 'Explore',
                    infos: [
                        {
                            name: 'Start here',
                            href: '#'
                        }, 
                        {
                            name: 'Success',
                            href: '#'
                        }, 
                        {
                            name: 'Story',
                            href: '#'
                        },
                        {
                            name: 'Blog',
                            href: '#'
                        }, 
                        {
                            name: 'Courses',
                            href: '#'
                        }, 
                        {
                            name: 'Contact Us',
                            href: '#'
                        }
                    ]
                },

                footerInformations:{
                    title: 'Informations',
                    infos: [
                        {
                            name: 'Membership',
                            href: '#'
                        }, 
                        {
                            name: 'Purchase guide',
                            href: '#'
                        }, 
                        {
                            name: 'Pirvacy Policy',
                            href: '#'
                        }, 
                        {
                            name: 'Terms of services',
                            href: '#'
                        },                         
                    ]
                },

                footerInstagram:{
                    title: 'Instagram',
                    infos: ['/imgs/artist-info-01.jpg', '/imgs/artist-info-02.jpg', '/imgs/artist-info-03.jpg']
                },
                
            }
        }
        
    }
</script>





<template>
    <footer>
        <!-- Footer Info Section -->
        <FooterInfo
         :address="footerAddress"
         :explore="footerExplore"
         :informations="footerInformations"
         :instagram="footerInstagram"
        ></FooterInfo>

        <FooterCopyright></FooterCopyright>
    </footer>
</template>




<style lang="scss" scoped>
</style>