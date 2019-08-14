<template>
	<view class="typeAllCars">
	<!-- 	<view class="title">选择车型</view> -->
		<view class="carTab">
			<text v-for="(item,index) in carType" :key="index" :class="{active:paramsCarType == index}" @click="chooseCarType(index)">{{item.name}}</text>
		</view>
		<view class="carTypeAll">
			<view class="carItem" v-for="(item,index) in carTypeAll" :key="index" @click="carDetail(item.id)">
				<image :src="getImgUrl(item.image)" />
				<view class="carMesAll">
					<view class="carNameNum" >
						<view class="carName">{{item.name}}</view>
						<view class="kucun"><text>库存：</text><text>{{item.stock}}</text></view>
					</view>
					<view class="yajing yajing2"><text>押金：</text><text>¥</text><text>{{item.cartype.deposit}}</text></view>
					<view class="yajing"><text>日利润：</text><text>¥</text><text>{{item.profit}}</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				paramsCarType : 0,
				carType:[
					{name:'全部',id:0},
					{name:'入门型',id:1},
					{name:'新能源型',id:2},
					{name:'商务型',id:3},
					{name:'豪华型',id:4},
				],
				carTypeAll:[]
			}
		},
		onLoad(params) {
			if(params && params.type){
				this.paramsCarType = params.type;
			}
			
		},
		onShow() {
			const that = this;
			that.$http.requestGet({
				url:`${that.$baseUrl}/api/car/getCarsByType`,
				data:{
					tid:this.paramsCarType
				},
				success:res=>{
					const data = res.data;
					if(data.length > 0){
						this.carTypeAll = data;
					}else {
						//暂无数据
					}
					
				} 
			})  
			
		},
		methods: { 
			chooseCarType(i) {
				const that = this;
				that.paramsCarType = i;
				that.carTypeAll = [];
				that.$http.requestGet({
					url:`${that.$baseUrl}/api/car/getCarsByType`,
					data:{
						tid:this.paramsCarType
					},
					success:res=>{
						const data = res.data;
						if(data.length > 0){
							this.carTypeAll = data;
						}else {
							//暂无数据
						}
						
					}    
				})   
			},
			carDetail(id) {
			    uni.navigateTo({
					url: `/pages/choosedCarType/carDetail?id=${id}`
				})
			}
		}
	}
</script>

<style>
	page{
		background: #f5f5f5 !important;
	}
	.title{
		height: 52rpx;
		padding: 10rpx  0;
		color: #000;
		letter-spacing: 2rpx;
		font-size: 36rpx;
		background: #fff;
		text-align: center;
		font-weight: normal;
		border-bottom: solid 2rpx #e2e2e2;
	}
	.carTab{
		position: fixed;
		top: 0;
		left: 0;
		height: 74rpx; 
		background: #fff;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 30rpx 0;
		border-top: solid 1rpx #e2e2e2;
	}
	.carTab text{
		flex: none;
		width: 104rpx;
		font-size:30rpx;  
		color: #757575; 
		margin-right: 40rpx;
	}
	.carTab text.active{
		color:#efb255 ;
	}
	.carTab text:first-child{ 
		width: 76rpx;
	}
	.carTab text:nth-child(3){
		width: 140rpx;
	}
  .carTypeAll{
  	padding: 0 ;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
	margin-bottom: 30rpx;
	margin-top: 98rpx;
  }
  .carItem{
  	display: flex;
  	flex-direction: row;
  	padding: 24rpx 30rpx 16rpx; 
  	margin-bottom: 20rpx;
  	background: #fff;
  	border-radius:10rpx ;
  	justify-content:flex-start;
	border-top: solid 1rpx #eee;
	border-bottom: solid 1rpx #eee; 
  }
  .carItem:last-child{
  	border-bottom:none;
  }
  .carItem image{
  	width: 200rpx;
  	height: 100rpx;  
	margin-top: 40rpx; 
  	flex: none;
  	margin-right: 45rpx;
  	border-radius: 16rpx; 
  }
  .carMesAll{
  	display: flex;
  	flex-direction: column;
  	flex: none;
  	width: 430rpx; 
  	padding: 10rpx 0 0;
  }
  .carMesAll .carNameNum{
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
	align-items: center;
	padding-bottom: 20rpx;
	margin-bottom: 16rpx;
	border-bottom: solid 1rpx #eee;
  }
  .carMesAll .carNameNum .carName{
  	color: #3a3a3a;
  	font-size: 34rpx;
  }
  .carMesAll .carNameNum .kucun{
  	color: #a1a1a1;
  	font-size: 26rpx;
  }
  .carMesAll .carNameNum .kucun text:last-child{
  	color: #efb255;
  }
  .yajing text{
  	font-size: 26rpx;
  	color: #a1a1a1;
  }
  .yajing text:nth-child(2){
  	color: #efb255;
  	margin-right: 10rpx;
  }
  .yajing text:nth-child(3){
  	color: #efb255;
  	margin-right: 20rpx; 
	font-size: 28rpx;
  }
  .yajing2{
	  margin-bottom: 6rpx;
  }
  /* .yajing text:last-child{
  	font-size: 24rpx;
  } */
</style>
