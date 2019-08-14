<template>
	<view>
		<view class="bg">
		</view>
		<view class="bg2"></view>
		<view class="moneyAll">
			<view class="moneyItem">
				<navigator class="mingxi" url=""> <text class="modeIcon">&#xe635;</text></navigator>
				<text>余额（元）</text>
				<text>1000.75</text>
			</view> 
			 <view  class="btns">
				<button  type="primary" @click="moneyInOut('1')"><text>充值</text></button>
				<button  type="primary" @click="moneyInOut('2')"><text>提现</text></button>
			</view>
		</view>
		<view class="moneyAll yunlibao">
			<view class="moneyItem">
				<text>云利宝（元）</text>
				<text>990.75</text>
			</view>
			<view  class="btns shouyi">
				<view class="shouyiItem">
					<text>累计收益（元）</text>
					<text>290.5</text>
				</view>
				<view class="shouyiItem">
					<text>费率</text>
					<text>2.00%</text>
				</view>
			</view>
			 <view  class="btns">
				<button  type="primary" @click="moneyInOut('3')"><text>转入</text></button>
				<button  type="primary" @click="moneyInOut('4')"><text>转出</text></button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
  .bg{
	  height: 150rpx;
	  background: #fae64f;
  }
  .bg2{
	  height: 500rpx; 
	  background: #fae64f;
	  background: -webkit-linear-gradient(#fae64f, #F5F5F5); /* Safari 5.1 - 6.0 */
	  background: -o-linear-gradient(#fae64f, #F5F5F5); /* Opera 11.1 - 12.0 */
	  background: -moz-linear-gradient(#fae64f, #F5F5F5); /* Firefox 3.6 - 15 */
	  background: linear-gradient(#fae64f, #F5F5F5); /* 标准的语法 */ 
  }
  .moneyAll{
	  position: relative;
	  margin: 0 auto;
	  margin-top: -630rpx;
	  z-index: 9;
	  width: 92%; 
	  border-radius: 10rpx;
	  background: #fff;
	  color: #333;
	  padding: 50rpx 0;
	  display: flex;
	  justify-content: center;
	  flex-direction: column;
	  align-items: center;
  }
  .moneyItem{
	  display: flex;
	  flex-direction: column;
	  height: 120rpx;
	  justify-content: center;
	  align-items: center;
	  color: #999;
	  font-size: 28rpx;
  }
  .moneyItem .mingxi{
	  position: absolute;
	  top: 44rpx;
	  right: 30rpx;
	  z-index: 998;  
  }
  .moneyItem .mingxi .modeIcon{
  	 color: #999;
	 font-size: 34rpx;
  	 font-weight: normal; 
  }
  .moneyItem text:nth-child(2){
  	 margin-bottom: 30rpx;
  }
  .moneyItem text:last-child{
  	 font-size: 50rpx;
	 color: #121212;
	 font-weight: bold;
	 letter-spacing: 2rpx;
  }
  .btns{
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  height: 150rpx;
	  flex-direction: row;
	  width: 100%;
	  margin-top: 40rpx;
  }
  .btns button{
	  width: 43%;
	  padding: 0 !important;
	  height: 90rpx;
	  flex: none;
	  border-radius: 8rpx;
	  font-weight: lighter;
	  background: #efb14e;
	  border: none;
	  font-size: 34rpx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
  }
  .btns button:first-child:active{
	  color: #fff;
	  background: #efb14e;
  }
   .btns button:last-child{
  	  background:#fff1ee;
	  color: #efb14e;
  }
  .btns button:after{
	  border: none !important;
  }
  .yunlibao{
	 border-radius: 10rpx;
	 background: #fff;
	 padding: 50rpx 0;
	 display: flex;
	 justify-content: center;
	 flex-direction: column;
	 align-items: center; 
	 z-index: 9;
	 width: 92%; 
	 margin: 30rpx auto 0;
  }
  .shouyi {
	  justify-content: center;
	  
  }
  .shouyi > view{
	  width: 45%;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  color: #d1d1d1;
	  font-size: 30rpx;
  }
   .shouyi > view text:last-child{
	   color: #121212;
	   font-size: 32rpx;
	   margin-top: 30rpx;
   }
</style>
