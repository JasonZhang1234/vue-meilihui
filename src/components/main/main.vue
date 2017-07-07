<template>
	<div>
		<div class="header">
			
			<span class="header-left"><router-link to="news"><i>&lt;</i></router-link></span>
			<router-link to="login">
			<span  class=" header-right"></span>
			</router-link>

			<div class="main-title">{{dataList.english_name}}</div>
		</div>
		<div class="main">
			<div class="state">
				<p class="timer"><i></i><span><v-time></v-time></span></p>
				<p class="price"><span>价格</span>

					<span>分享</span></p>
					<p class="info" v-for="i in dataList.promotions" v-show="i.info instanceof Array?false:true"><span></span>{{i.info}}</p>
					<!-- <p class="info" v-for="i in dataList.promotions"><span></span>
					<span v-for="j in i.info">{{j.gwpContent}}</span>
					</p> -->
				</div>
					
					<ul>

						<li v-for="i in dataList.products" >
						<router-link :to="{path:'details',query:{text:text,id:i.glsCode}}">
							<img v-lazy="i.imageUrl" alt="">
							<div class="bewrite">
								<p>{{i.brandName}}</p>
								<p class="productName">{{i.productName}}</p>
								<p class="money"><b>￥{{i.price}}</b><del>￥{{i.marketPrice}}</del></p>
							</div>
							</router-link>
						</li>

					</ul>
				
			</div>
		</div>

	</template>

	<style lang="less" scoped>
		.main{
			color: #1A1A1A;
			position: absolute;
			top: 1.25rem;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: auto;

			p{
				font-size: 0.305556rem;
		// padding:0 20px;
		color: #000;
	}
	.state{
		.timer{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.416667rem;
			i{
				width: 0.361111rem;
				height: 0.361111rem;
				background: url('https://www.mei.com/resources/images/icon_countdown.png') no-repeat;
				background-size: 100% 100%;
				margin-right:0.138889rem; 
			}
			span{
				font-size: 0.361111rem;
			}

		}
		p{
			padding:0 20px;
			border-bottom: 1px solid;
			
		}
		p:not(.info){
			text-align: center;
			line-height: 1.25rem;
			height: 1.25rem;
			span{

				line-height: 1.25rem;
			}
		}
		.info{
			// line-height: 1rem;
			padding: 0.347222rem 20px;
			border-bottom:1px solid;
			font-size: 0.333333rem;
			span{
				display: inline-block;
				width: 0.305556rem;
				height: 0.361111rem;
				background: url(https://www.mei.com/resources/images/icon_gift.png)  center;
				background-size: 100%;
				margin-right: 0.277778rem;
			}
		}
		.price span{
			font-size: 0.305556rem;
		}
		.price span:nth-of-type(1) {
			float: left;
		}
		.price span:nth-of-type(n+2) {
			float: right;
		}

	}
	ul{
		background-color:#eeeeee; 
		display: flex;
	
		padding:  0.277778rem;
		flex-wrap: wrap;
		justify-content: space-between;
		
		li{
			width: 48.3%;
			margin-bottom: 0.277778rem ;

				img{
					width: 100%;
					height: 6.111111rem;
				}
				.bewrite{
					padding: 0.277778rem;
					background-color: #fff;
					margin-top: 2px;

					P{
						line-height: 0.416667rem;
						font-size: 0.23rem;
						del{
							margin-left: 0.2rem;
							font-size: 0.222222rem;
							color: #B1B1B1;
						}
					}
					.productName{
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size: 0.305556rem;
					}
					b{
						font-size:0.305556rem;
						color: #E8033C;
					}
					.money{
						margin-top: 0.138889rem;
					}
				}

			}
		}
	}
	.main-title{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		line-height: 1.25rem;
		font-size:0.416667rem;
	}
	.header {
		height: 1.25rem;
		padding: 0 15px;
		background:#fff;
		border-bottom: 1px solid ;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}
	.header span{
		line-height:1.25rem;
	}
	
	.header-left{
		float:left;
		width: 0.458333rem;
		height: 100%;
	}
	.header-left i{

		width: 0.458333rem;
		height: 0.375rem;

		margin: 100% auto;
		font-size: 0.833333rem;

	}
	.header-right {
		float:right;
		height:1.25rem;
		width: 0.5rem;
		line-height: 1.25rem;
		background: url(https://www.mei.com/resources/images/icon_bag.png) no-repeat center;
		background-size:100% auto;
	}	
</style>

<script>
	import  vTime from '../read/read.vue'
	export default{
		data(){
			return{
				dataList:{},
				text : this.$route.query.index
			}
		},
		methods: {
			
			request(num){
				
				this.$http({
					method: 'GET',
					url: 'https://www.mei.com/appapi/event/productForH5',
					params: {
						sort:'',
						eventCode:num,
						pageIndex:'1',
						platform_code:'H5'
						
					}
				}).then(function(req){
					// console.log(req)
					// console.log(this.$store.state.main.count)
					// console.log(req.data.promotions[0].info[0])
					this.dataList=req.data
					// this.$store.commit('listData',{
					// 	// data: req.data,
					// 	count:num
					// });
				})
			}
			// ,
			// 	click(num) {
			// 	//http://www.mei.com/appapi/product/detailForH5?glsCode=RF7-412-00087&
			// 	//eventCode=24884&platform_code=H5&summary=b415f367c60a546ecd086f94104cd621
			// 	this.$http({
			// 		method: 'GET',
			// 		url: 'http://www.mei.com/appapi/product/detailForH5',
			// 		params: {
			// 			glsCode:this.$route.query.id,
			// 			eventCode:this.$route.query.index,
			// 			platform_code:'H5'
						
			// 		}
			// 	}).then(function(req){
			// 		// console.log(req.data.infos.eventEndDate)
			// 		this.$store.commit('detailsData',{
			// 			data: req.data,
			// 			date:req.data.infos.eventEndDate
						
			// 		});
			// 	})
			// }
		},
		mounted(){
			// console.log(this.$route.query.index);
			this.request(this.$route.query.index);
		},



		// methods:{
		// 	click(num) {
		// 		//http://www.mei.com/appapi/product/detailForH5?glsCode=RF7-412-00087&
		// 		//eventCode=24884&platform_code=H5&summary=b415f367c60a546ecd086f94104cd621
		// 		this.$http({
		// 			method: 'GET',
		// 			url: 'http://www.mei.com/appapi/product/detailForH5',
		// 			params: {
		// 				glsCode:num,
		// 				eventCode:this.$store.state.main.count,
		// 				platform_code:'H5'
						
		// 			}
		// 		}).then(function(req){
		// 			// console.log(req.data.infos.eventEndDate)
		// 			this.$store.commit('detailsData',{
		// 				data: req.data,
		// 				date:req.data.infos.eventEndDate
						
		// 			});
		// 		})
		// 	}
		// },
		// computed: {
		// 	dataList(){
		// 		console.log(this.$store.state.main.count)
		// 		return this.$store.state.main.data
				
				
		// 	}
		// },
		components: {
			vTime
		}
		
	}
</script>