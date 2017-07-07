<template>
	<div class="list">
		<template v-if="dataList.lists">



			<swiper :options="swiperOption" id="d">
				<swiper-slide v-for="slide in swiperSlides">
					<img :src="slide.imgUrl" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<div class="guest">
				<p><span>新客专享</span> <i class="line"></i></p>
				<img src="https://cdn14.mei.com/category/20170612/20170612101155162.jpg?x-oss-process=image/resize,w_750" alt="">
			</div>
		</template>
		
		<div class="news-img"  v-for="item in dataList.lists">
			
			<div class="item-name">
				<p><b>{{item.name}}</b> <i class="line"></i><span></span></p>
			</div>
			
			<div class="list-box" v-for="i in item.events">
			<router-link :to="{path:'main',query:{index:i.eventCode}}">
					<img v-lazy="i.imageUrl" alt="图片加载失败">
					<div class="news-name">
						<p>{{i.englishName}}</p>
						<p>{{i.chineseName}}</p>
						<p>{{i.discountText}}</p>
					</div>
				</router-link>
			</div>

		</div> 

		<div class="news-img"  v-for="item in dataList.eventList">
			<router-link :to="{path:'main',query:{index:item.eventCode}}">
				<div class="list-box" @click="click(item.eventCode)">
					<img v-lazy="item.imageUrl" alt="图片加载失败">
					<div class="news-name">
						<p>{{item.englishName}}</p>
						<p>{{item.chineseName}}</p>
						<p>{{item.discountText}}</p>
					</div>
				</div>
			</router-link>
		</div> 
		<!-- <ul>
			<li v-for="item in dataList.lists">
				{{item.name}}
				<p v-for="em in item.events">{{em.chineseName}}</p>
			</li>
		</ul>

		<div class="news-img">
		<img src="" alt="图片加载失败">
	  		<div class="news-name">

	  			<p>精致型男必备</p>
	  			<p>男士护肤专场</p>
	  			<p>3.8折起</p>
	  		</div>
  		</div>
  	-->

  </div>
</template>
<style lang="less" scoped>
	.guest{
		P{
			display: flex;

			align-items: center;
			span{
				margin: 0 0.277778rem;
				font-size: 0.333333rem;
				line-height: 0.972222rem;
			}
		}

		img{
			width: 100%;
		}
	}
	.item-name{
		p{
			display: flex;
			align-items: center;
			span{
				display: inline-block;
				width: 2.222222rem;
				height: 0.416667rem;
				background: url(http://www.mei.com/resources/images/icon_new.jpg) no-repeat;
				background-size: 100%;
			}
			i{
				width: 55%;
			}
			b{
				font-size: 0.333333rem;
				line-height: 0.972222rem;
				margin: 0 0.277778rem;

			}
		}
	}
	.line{
		display: inline-block;
		width: 70%;
		height: 1px;
		background: url(http://www.mei.com/resources/images/line_solid.jpg) no-repeat center;
		background-size: 100%;
	}
	.news-img{

		width: 100%;
 	// height: 5.069444rem;
 	
 	img{
 		height: 5.069444rem;
 	}
 }
 .list-box{
 	position:relative;
 	img{
 		margin: 2px 0;
 	}
 }
 .news-name{
 	width: 4.444444rem;
 	height: 1.763888rem;
 	font-size: 0.277777rem;
 	color: #FFFFFB;
 	background-color: rgba(0,0,0,.5);
 	
 	padding:0.069444rem 0.138888rem ;
 	position: absolute;
 	bottom: 0.208333rem;
 	right: 0;
 	
 	>p{
 		
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
 		line-height:0.416666rem;
 	}
 }
 img {
 	width: 100%;
 }
</style>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default {
		data() {
			return {
				swiperOption: {
					notNextTick:true,
					autoplay: 3500,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					observeParents: true,
					debugger:true,
					autoplayDisableOnInteraction:false,
					loop:true
				},
				swiperSlides: []

			}
		},
		components:{
			swiper,
			swiperSlide
		},
		methods: {
			request() {
				this.$http.get('http://www.mei.com/appapi/home/marketingBanner?platform_code=H5&summary=fc14ba9ea6a665c3610b7d228feb66b3', )
				.then(function(req) {
					this.swiperSlides = req.data.banners;

				});
			},
			click(num) {
				//https://www.mei.com/appapi/event/productForH5?sort=&eventCode=25407&pageIndex=1&platform_code=H5


				// this.$http({
				// 	method: 'GET',
				// 	url: 'https://www.mei.com/appapi/event/productForH5',
				// 	params: {
				// 		sort:'',
				// 		eventCode:num,
				// 		pageIndex:'1',
				// 		platform_code:'H5'

				// 	}
				// }).then(function(req){
					// console.log(req)
					this.$store.commit('listData',{
						// data: req.data,
						count:num
					});
				// })
			}
		},

		mounted() {

			let _this = this;
			this.request();
			// setInterval(function() {

			// 	let swiperSlides = _this.swiperSlides
			// 	if(swiperSlides.length < 2) {
			// 		swiperSlides.push(swiperSlides.length + 1)
			// 	}
			// }, 3000)
		},
		computed: {
			dataList(){
				// console.log(this.$store.state.newsData.data)/
				return this.$store.state.newsData.data;
				
			}
		}
	}
</script>


