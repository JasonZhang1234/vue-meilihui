<template>

	<swiper :options="swiperOption">
		<swiper-slide v-for="slide in swiperSlides">
			<img :src="slide.imgUrl" />
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<style scoped>
	img {
		width: 100%;
	}
</style>
<script>
	export default {

		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					autoplay: 3500,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
				},
				swiperSlides: []
			}
		},
		methods: {
			request() {
				this.$http.get('http://www.mei.com/appapi/home/marketingBanner?platform_code=H5&summary=fc14ba9ea6a665c3610b7d228feb66b3', )
					.then(function(req) {
						this.swiperSlides = req.data.banners;

					});
			}
		},

		mounted() {

			let _this = this;
			this.request();
			setInterval(function() {

				let swiperSlides = _this.swiperSlides
				if(swiperSlides.length < 2) {
					swiperSlides.push(swiperSlides.length + 1)
				}
			}, 3000)
		}
	}
</script>