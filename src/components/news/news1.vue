<template>
	<div class=" shen">
  	 <!--<ul>
  	 	<li v-for="item in newsData">
  	 		<h3>{{item.name}}</h3>
  	 	</li>
  	 </ul>-->
  	 
  	<!--<el-carousel :interval="5000" arrow="always">
	    <el-carousel-item v-for="item in newsData" :key="item">
	      	<img :src alt="item.imgurl" />
	    </el-carousel-item>
  	</el-carousel>-->
  	
  	<div class="news-img">
  		<div class="news-name">
  			<p>精致型男必备</p>
  			<p>男士护肤专场</p>
  			<p>3.8折起</p>
  		</div>
  	</div>
	</div>
</template>
<style lang="less">
.news-img{
	
	width: 100%;
 	height: 5.069444rem;
	background: url(../../assets/20170605155548137.jpg) no-repeat;
 	background-size: 100% 100%;
 	position:relative;
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
 		
 	
 	line-height:0.416666rem;
 }
}
</style>
<script>
	export default{
		data(){
			return {
				newsData:[]
			}
		},
		methods:{
			request(){
				this.$http.get('http://www.mei.com/appapi/home/marketingBanner?platform_code=H5&summary=fc14ba9ea6a665c3610b7d228feb66b3',)
				.then(function(req){
//					console.log(req)
					this.newsData=req.data.banners;
					console.log('newsData')
					
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>