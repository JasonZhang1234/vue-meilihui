<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>
 
<script>
	


  export default {
  
    data () {
      return {
        banners: [ 'https://www.mei.com/resources/images/icon_bag.png', 'https://www.mei.com/resources/images/icon_bag.png', 'https://www.mei.com/resources/images/icon_bag.png' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    mounted() {
      console.log('app init')
      setTimeout(() => {
        this.banners.push('/https://www.mei.com/resources/images/icon_bag.pngs')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper, 
        'It will slideTo banners 3')
      this.mySwiper.slideTo(3)
    }
  }
</script>