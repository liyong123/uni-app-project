<template>
	
	<view class="all">
		<view class="status_bar"></view>
		<view class="zdy-nav-bar-all">
			<view class="zdy-nav-bar">
				<view><text class="modeIcon" @click="toLogin()">&#xe62a;</text></view> 
				<view><image src="../../static/logo5.png"></image></view>
				<view><text class="modeIcon">&#xe62b;</text></view>
			</view>
			<view class="rental-car-mode">
				<view class="modeItem" @click="carTypeChoosed(1)">
					<!-- <text class="modeIcon" :style="{fontSize:'48rpx'}">&#xe623;</text> -->
					<view>入门车型</view>
				</view>
				<view class="modeItem" @click="carTypeChoosed(2)">
					<!-- <text class="modeIcon modeIcon3">&#xe626;</text> -->
					<view>新能源车型</view>
				</view>
				<view class="modeItem" @click="carTypeChoosed(3)">
				<!-- 	<text class="modeIcon modeIcon2">&#xe628;</text> -->
					<view>商务车型</view> 
				</view>
				<view class="modeItem" @click="carTypeChoosed(4)">
					<!-- <text class="modeIcon modeIcon4">&#xe629;</text> -->
					<view>豪华车型</view>
				</view>
			</view>
		</view>
		<view>
			<view class='advertising-post'>
				<swiper  :style="{height:'220rpx'}" :indicator-dots="true" :indicator-color="indicatorColor2" :indicator-active-color="indicatorColor" :autoplay="true" :circular='true'>
				  <swiper-item v-for="(item,index) in imgAll" :key="index">
					<image  :src="getImgUrl(item.image)" mode="scaleToFill" />
				  </swiper-item>
				</swiper>
			</view>
			<view class="rental-car-mode2" > 
				<view class="title">
					推荐车型
				</view>
				<view class="carTypeAll">
					<view class="carItem" v-for="(item,index) in carTypeAll" :key="index" @click="toCarDetail(item.id)">
						<image :src="getImgUrl(item.image)" />
						<view class="carMesAll">
							<view class="carNameNum" >
								<view class="carName">{{item.name}}</view>
								<view class="yajing yajing2"><text>¥</text><text>{{item.profit.toString().substring(0,4)}}</text><text>/日利</text></view>
							</view> 
							<!-- <view class="moneyAll">
								<view class="yajing"><text>押金：</text><text>¥</text><text>{{item.money}}</text></view>
								<view class="kucun"><text>库存：</text><text>{{item.num}}</text></view>
							</view>	 -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>


	export default {
		data() { 
			return { 
				indicatorColor:"#515837",
			 	indicatorColor2:"#a6ada5",
				imgAll:[], 
				carTypeAll:[]
			}
		},
		onLoad() {
			
		},
		onShow() {
			const that =this;
			that.$http.requestGet({
				url:`${that.$baseUrl}/api/index/index`,
				success:res=>{
					const data = res.data;
					if(data){
						that.imgAll = data.slide;
						that.carTypeAll = data.cars
					}
				} 
			})  
		},
		methods: { 
			toLogin() {
				uni.navigateTo({
					url:"/pages/login/login"
				})	
			},
			carTypeChoosed(v){
				uni.navigateTo({
					url:`/pages/choosedCarType/choosedCarType?type=${v}`
				})	
			},
			toCarDetail(id) { 
			    uni.navigateTo({
					url: `/pages/choosedCarType/carDetail?id=${id}` 
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
      height: var(--status-bar-height);
      width: 100%;
	}
	.main{
		position: fixed;
		top: 200rpx;
		width: 100%;
		bottom: 0;
		overflow: auto
	}
	.zdy-nav-bar-all{
		position: fixed;
		top: var(--status-bar-height);
		background: #fff;
		z-index: 9999;
		left: 0;
		right: 0;
	}
	.zdy-nav-bar{
		height: 86rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;

	}
	.zdy-nav-bar view{
		flex: none;
	}
	.zdy-nav-bar view:nth-child(2){
		width: 160rpx;
		height: 44rpx;
	}
	.zdy-nav-bar > view > image{
		width: 160rpx;
		height: 44rpx;  
	}
	.advertising-post{
	  width: 100%;
	  height: 220rpx;
	  margin-top: 150rpx;
	  border-radius: 0rpx;
	  background-color: #fff; 
	}
	.advertising-post image{
		height:220rpx;
		width:100%;
		border-radius:0rpx;
	}
	.rental-car-mode{
		height: 64rpx;
		background: #fff;
		display: flex; 
		justify-content: space-between;
		padding: 0 10rpx;
	}
	.modeItem{
		width: 170rpx;
		flex: none;  
		font-size: 30rpx;  
		color: #6b6b6b;
		letter-spacing: 1rpx;
		font-weight:500 ;
		text-align: center;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.modeItem.active{
		color: #efb255;
	}
	.rental-car-mode2{
		background: #fff;
		width: 100%;
		display: flex;
		padding: 0;
		flex-direction:column ;
		justify-content: flex-start;
		margin: 20rpx auto;
		margin-bottom: 20rpx;
	}
	.title{
		padding: 30rpx;
		color: #212338;
		letter-spacing: 2rpx;
		font-size: 34rpx;
	}
	.carTypeAll{
		padding: 0 20rpx ;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.carItem{
		width: 310rpx;
		flex: none;
		display: flex;
		flex-direction: column;
		padding: 20rpx;
		margin-bottom: 20rpx;
		background: #f5f6f8;
		border-radius:16rpx ;
		justify-content:flex-start;
		box-shadow: 0 0rpx 20rpx #f5f6f8;
	}
	.carItem image{
		width: 100%;
		height: 150rpx;
		flex: none;
		border-radius: 16rpx;
	}
	.carMesAll{
		display: flex;
		flex-direction: column;
		flex: none;
	}
	.carMesAll .carNameNum{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin:  30rpx 0 16rpx;
	}
	.carMesAll .carNameNum .carName{
		color: #5a5a5a;
		font-size: 28rpx;
		letter-spacing: 0;
	}
	.kucun{
		color: #999;
		font-size: 24rpx;
	}
	.kucun text:last-child{
		color: #efb255;
	}
	.moneyAll{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.yajing{
		height: 30rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.yajing:last-child{
		margin-bottom: 0;
	}
	.yajing text{
		font-size: 24rpx;
		color: #a1a1a1;
	}
	.yajing text:nth-child(2){
		color: #efb255;
	}
	.yajing text:nth-child(3){
		color: #efb255; 
		font-size: 26rpx;
	}
	.yajing2 text{
		color: #efb255;
	}
	.yajing2 text:nth-child(2){
		font-size: 26rpx;
	}
	.yajing2 text:nth-child(3){
		color: #a1a1a1;;
	}
	
</style>
