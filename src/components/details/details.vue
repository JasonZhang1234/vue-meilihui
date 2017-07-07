<template>
	
	<div >
		<div class="header">
			<span class="header-left"><router-link :to="{path:'main',query:{index:index}}"><i>&lt;</i></router-link></span>

			<span  class=" header-right"></span>

			<div class="details-title">{{d.infos.brand}}</div>

		</div>
		<div class="details">
			<swiper :options="swiperOption" class="banner">
				<swiper-slide v-for="i in d.infos.images">
					<img :src="i.smallImgUrl" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<h5>{{d.infos.brandName}}</h5>
			<h6>{{d.infos.name}}</h6>
			<button>{{d.infos.discount}}</button>
			<p class="price"> <span>￥{{d.infos.price}}</span><del>￥{{d.infos.marketPrice}}</del></p>


			<p class="send">
				<span></span>
				<p v-html="d.infos.deliveryDate" class="send-date"></p>
			</p>
			<div class="info">
				<div v-for="i in d.promotions">
					<span class="info-icon"></span>
					<p>
						{{i.info}}
						<!-- vfbv -->
					</p>
				</div>
				<u>展开</u>
			</div>
			<div class="size">
				<p>选择尺寸(通用码)</p>
				<button v-for="i in d.infos.size">{{i.filterSize}}</button>

			</div>
			<div class="timer" v-show="d.infos.eventEndDate"><p>限时抢购 活动剩余</p><span>{{content}}</span></div>
			<div class="size-code">
				<h4>SIZE&FIT 尺寸信息<span><i></i>尺码表<b>&gt;</b></span></h4>
				

				<table style="border-collapse:collapse;border:none;">
					<tr v-for="i in d.infos.sizeMeasure.sizeTable">
						<td v-show="i.product_size">{{i.product_size}}</td>
						<td v-show="i.specifications">{{i.specifications}}</td>
						<td v-show="i.def1">{{i.def1}}</td>
						<td v-show="i.def2">{{i.def2}}</td>
						<td v-show="i.def3">{{i.def3}}</td>
						<td v-show="i.def4">{{i.def4}}</td>
						<td v-show="i.def5">{{i.def5}}</td>
						<td v-show="i.def6">{{i.def6}}</td>
						<td v-show="i.def7">{{i.def7}}</td>
						<td v-show="i.def8">{{i.def8}}</td>
						<td v-show="i.def9">{{i.def9}}</td>
						<td v-show="i.def10">{{i.def10}}</td>
						<td v-show="i.def11">{{i.def11}}</td>
						<td v-show="i.def12">{{i.def12}}</td>
						<td v-show="i.def13">{{i.def13}}</td>
						<td v-show="i.def14">{{i.def14}}</td>
						<td v-show="i.def15">{{i.def15}}</td>
						<td v-show="i.def16">{{i.def16}}</td>
						<td v-show="i.def17">{{i.def17}}</td>
						<td v-show="i.def18">{{i.def18}}</td>
						<td v-show="i.def19">{{i.def19}}</td>
						<td v-show="i.def20">{{i.def20}}</td>
						<td v-show="i.def21">{{i.def21}}</td>
						<td v-show="i.def22">{{i.def22}}</td>
						<td v-show="i.def23">{{i.def23}}</td>
						<td v-show="i.def24">{{i.def24}}</td>
						<td v-show="i.def25">{{i.def25}}</td>
						<td v-show="i.def26">{{i.def26}}</td>
						<td v-show="i.def27">{{i.def27}}</td>
						<td v-show="i.def28">{{i.def28}}</td>
						<td v-show="i.def29">{{i.def29}}</td>
						<td v-show="i.def30">{{i.def30}}</td>
					</tr>

				</table>

			</div>
			<div class="opi">
				<h4>产品信息</h4>
				<p>{{d.infos.description.design}} </p>
				<li v-for="i in d.infos.description.attributesList">
					<span>{{i.name}}</span>
					<span>{{i.value}}</span>
				</li>

				<img :src="d.infos.description.material_quality_img" alt="" v-show="d.infos.description.material_quality_img">
			</div>
			<h4>保养</h4>
			<ul>
				<li>
					<p v-for="i in d.infos.description.maintenanceList">{{i}}</p>
				</li>
			</ul>
			<div class="message">
				<span>*</span><p>{{d.infos.description.message}} </p>

			</div>
			<img :src="d.infos.priceImageUrl
			" alt="">
			<div  v-for="i in d.infos.images">
				<img :src="i.bigImgUrl" alt="">
			</div>
			<div class="ensure">
				<h4>100%官方正品保证</h4>
				<div>
					<p>魅力惠郑重承诺,我们的[<span>{{d.infos.brand}}</span>]商品为品牌商（授权经销商）直接提供的原装正品，并由我们的魅力惠时尚顾问为您精心挑选呈现。产地及销售渠道完全符合中国法律要求。魅力惠致力于为您带来最佳奢品购物体验。 </p>
				</div>
			</div>






		</div>	
		<div class="footer">
			<div class="footer-box"><div></div></div>
			<button>加入购物车</button>
		</div>
	</div>
</template>
<style lang="less" scoped>
img{
	width: 100%;
}
h4{
	font-size: 0.347222rem;
}
p{
	font-size: 0.347222rem;
}

	.details{
		padding: 0 0.277778rem;

		position: absolute;
		top:1.25rem;
		bottom: 1.25rem;
		left: 0;
		right: 0;
		overflow: auto;
		
		h5{
			font-size: 0.416667rem;

		}
		h6{
			font-size: 0.347222rem;
			line-height: 1.069444rem;
			position: relative;
		}
		>button{
			float: right;
			width: 1.2rem;
			height: 0.625rem;
			font-size: 0.319444rem;
			background-color: red;
			color: #fff;
			font-weight: bold;
		}
		.price{
			margin-bottom: 0.833333rem;
			span{
				font-size: 0.347222rem;
				color: red;
				font-weight: bold;
			}
			del{
				font-size: 0.277778rem;
			}
		}
		.send{
			font-size: 0.277778rem;
			display: flex;
			display: inline-block;
			span{
				display: inline-block;
				width: 0.416667rem;
				height: 0.416667rem;
				background:url(https://www.mei.com/resources/images/icon_countdown.png) no-repeat;
				background-size:100% 100%; 
			}
				// p{
				// 	display: inline-block;
				// }
			}
			.send-date{
				// color: red;
				margin: 0 0.277778rem;
				display: inline-block;
			
			
			}
			.info{
				height: 2.5rem;
				background-color:#EFEFEF;
				padding: 0.416667rem 0 ;
				position: relative;

				div{
					display: flex;
					justify-content: center;
					align-items: center;
				}
				p{
					width: 8.333333rem;
					line-height: 0.444444rem;
					font-size:0.305556rem;
				// float: left;

			} 
			u{
				position: absolute;
				right: 0.277778rem;
				bottom: 0.277778rem;
				font-size: 0.319444rem;
			}
			.info-icon{
				// display: inline-block;
				width: 0.444444rem;
				height: 0.555556rem;
				background: url(https://www.mei.com/resources/images/icon_promo.png) no-repeat center;
				background-size: 100% ;
				margin:  0 0.277778rem;
				// float: left;
			}

		}
		.size{
			padding: 0.138889rem 0 0.277778rem 0;
			border-bottom: 2px solid #E0E0E0;
			p{
				line-height: 0.972222rem;
				font-size: 0.361111rem;
				color: #B7B7B7;
			}
			button{
				width: 1.041667rem;
				height: 0.694444rem;
				font-size: 0.277778rem;
				margin:0 0.138889rem;
			}
		}
		.timer{
			height: 1.388889rem;
			border-bottom: 1px solid #e0e0e0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 0 0.277778rem 0;
			span{
				font-size: 0.347222rem;
			}
		}
		.size-code{
			border-top: 0.277778rem solid #eeeeee;
			h4{
				line-height: 1.25rem;
				font-size: 0.347222rem;
				span{
					float: right;
					font-size:0.347222rem;
					line-height: 1.25rem;
					font-weight: bold;
					i{
						// padding: 0 0.277778rem;
						margin: 0 0.277778rem 0 0;
						display: inline-block;
						width: 0.5rem;
						height: 0.194444rem;
						background: url(https://www.mei.com/resources/images/detail/size.png) no-repeat;
						background-size: 100% 100%;

					}
					b{
						margin: 0 0.138889rem;
						font-size: 0.486111rem;
					}
				}
			}
			table{
				width: 100%;
				overflow-x:auto;
				// white-space: nowrap;
				display: flex;
				border-color: #fff;
				
				tr td:nth-of-type(odd){
					background-color: #eee;
				}
				tr td:nth-child(even){
					background-color:#fff; 
				}
				tr:nth-child(1)  td{
					background-color:#000;
					color: #fff;
				}
				tr{
					display: inline-block;
					// width: 12%;
				}

				td{
					width:1.875rem;
					line-height: 0.763889rem;
					text-align: center;
					color: #000;
					display: block;
					font-size: 0.333333rem;
					border:solid #fff 1px;
				}
			}
		}
		.opi{

			h4{
				margin: 0.486111rem 0 0.972222rem 0;
				font-size: 0.347222rem;
			}
			p{
				font-size: 0.333333rem;
				line-height: 0.486111rem;
			}
			li{
				display: flex;
				height: 0.972222rem;
				align-items: center;
				justify-content:space-between;
				border-bottom: 1px solid #cacaca;
				span:nth-child(1) {
					color:#9b9b9b;
					font-size:0.347222rem;
				}
				span{
					font-size:0.347222rem;
				}
			}
			img{
				width: 100%;
				height: 3.75rem;
				margin: 0.277778rem 0;
			}
		}
		ul{
			list-style: disc;
			padding:0 20px ;
			border-bottom: 2px solid #ededed;
			li{
				list-style: disc;
				line-height: 0.486111rem;
				p{
					line-height: 0.486111rem;
				}

			}
		}
		.message{
			display: flex;
			padding: 0.416667rem 0 0 0;
			span{
				margin-right:0.208333rem;

			}

		}

		.ensure {
			div{
				width: 300px;
				height: 410px;
				// width: 590px;
				// height: 820px;
				padding: 0 20px;
				background: url(https://www.mei.com/resources/images/pic_promise2.jpg)  no-repeat;
				background-size: 100% 100%;
				margin:  0 auto;

				display: flex;
				p{

					font-size: 12px;
					line-height: 20px;
					margin: auto;
					span{
						font-size: 12px;
					}
				}


			}
			h4{
				font-size:0.347222rem;
				line-height: 0.694444rem;
			}
		}
		
	}
	.footer{
		height: 1.25rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:  0 0.277778rem;
		.footer-box {

			div{
				width: 0.972222rem;
				height: 0.972222rem;
				background: url(https://www.mei.com/resources/images/mini_bag.png) no-repeat;
				background-size:100%;
				margin-left:1.666667rem;
						// flex:2;
					}
				}
				button{
					width: 5.833333rem;
					height: 0.972222rem;
					background-color: #DC2925;
					color: #fff;
					font-size:0.333333rem;
					// flex:6;
				}
			}
			.header{
				width: 100%;
				height: 1.25rem;
				padding: 0 15px;
				background-color: #000;
				color: #fff;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				.header-left{

					float: left;


					i{

						width: 0.458333rem;
						height: 0.375rem;
						color: #fff;
						margin: 100% auto;
						font-size: 0.833333rem;

					}
				}
				.header-right {
					float:right;
					height: 100%;
			// height:0.972222rem;
			width: 0.888889rem;
			line-height: 1.25rem;
			background: url(https://www.mei.com/resources/images/btn_share.png) no-repeat center;
			background-size:100% auto;


		}
		.details-title{
			text-align: center;
			line-height: 1.25rem;
			font-size: 0.555556rem;
		}	
	}
	.banner img{
		width: 60%;
		margin: 0.277778rem auto;
	}
	.red{
		color: red;
		background-color:red; 
		>strong{
			color: red;
		}
	}
	::-webkit-scrollbar{
		display: none;
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
				swiperSlides: [],
				content: '',
				d:{},
				index:this.$route.query.text,
			}
		},
		components:{
			swiper,
			swiperSlide
		},
        methods: {
           countdowm(timestamp){
            let self = this;
            let timer = setInterval(function(){
                let nowTime = new Date();
                let endTime = new Date(timestamp * 1000);
                let t = endTime.getTime() - nowTime.getTime();
                if(t>0){
                    let day = Math.floor(t/86400000);
                    
                    let hour=Math.floor((t/3600000)%24);
                    let min=Math.floor((t/60000)%60);
                    let sec=Math.floor((t/1000)%60);
                    hour = hour < 10 ? "0" + hour : hour;
                    min = min < 10 ? "0" + min : min;
                    sec = sec < 10 ? "0" + sec : sec;
                    let format = '';
                    if(day > 0){
                       format =  `${day}天${hour}小时${min}分${sec}秒`;
                    }
                    if(day <= 0 && hour > 0 ){
                       format = `${hour}小时${min}分${sec}秒`;
                    }
                    if(day <= 0 && hour <= 0){
                       format =`${min}分${sec}秒`;
                    }
                    self.content = format;
                    }else{
                      clearInterval(timer);
                      self.content = self.endText;
                      // self._callback();
                    }
                 },1000);
             },
             	click(num) {
				//http://www.mei.com/appapi/product/detailForH5?glsCode=RF7-412-00087&
				//eventCode=24884&platform_code=H5&summary=b415f367c60a546ecd086f94104cd621
				this.$http({
					method: 'GET',
					url: 'http://www.mei.com/appapi/product/detailForH5',
					params: {
						glsCode:num,
						eventCode:this.$route.query.text,
						platform_code:'H5'
						
					}
				}).then(function(req){
					// console.log(req.data.infos.eventEndDate)
					this.d=req.data
					this.$store.commit('detailsData',{
						
						date:req.data.infos.eventEndDate
						
					});
				})
			}
            
            },
            mounted () {
          this.countdowm(this.$store.state.details.date)
          this.click(this.$route.query.id)
        }

	}
</script>