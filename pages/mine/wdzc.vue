<template>
	<view>
		<view class="bg">
			<view class="name">张三</view>
		</view>
		<view class="bg2"></view>
		<view class="moneyAll">
			<view class="item another">
				<text>总资产（元）</text>
				<text>26000</text>
			</view>
			<navigator  class="item" url="/pages/mine/yue"> 
				<text class="modeIcon" :style="{color:'#50befa'}">&#xe63c;</text>
				<text>余额</text>
				<text>¥</text>
				<text>20000</text>
			</navigator>
			<view class="item">
				<text class="modeIcon" :style="{color:'#fa8c50',fontSize:'50rpx',marginRight:'16rpx'}">&#xe63d;</text>
				<text>保证金</text>
				<text>¥</text>
				<text>6000</text>
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
	  height: 100rpx; 
	  background: #fae64f;
	  background: -webkit-linear-gradient(#fae64f, #F5F5F5); /* Safari 5.1 - 6.0 */
	  background: -o-linear-gradient(#fae64f, #F5F5F5); /* Opera 11.1 - 12.0 */
	  background: -moz-linear-gradient(#fae64f, #F5F5F5); /* Firefox 3.6 - 15 */
	  background: linear-gradient(#fae64f, #F5F5F5); /* 标准的语法 */ 
  }
  .name{
	  font-size: 36rpx;
	  color: #fff;
	  padding: 20rpx 40rpx;
  }
  .moneyAll{
	  position: relative;
	  margin: 0 auto;
	  margin-top: -120rpx;
	  z-index: 9;
	  height: 500rpx;
	  width: 92%; 
	  border-radius: 10rpx;
	  background: #fff;
	  color: #999;
	  padding: 50rpx 0;
	  display: flex;
	  justify-content: center;
	  flex-direction: column;
	  align-items: center;
  }
  .moneyAll >view.another{
	  position: absolute;
	  top: 30rpx;
	  left: 0rpx;
	  right: 0;
	  width: auto;
	  color: #999;
	  font-size: 28rpx;
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	  height: 120rpx;
	  border-bottom: solid 1rpx #F5F5F5;
  }
  .moneyAll .item{
	  height: 100rpx;
	  width: 350rpx;
	  display: flex;
	  padding: 0 50rpx;
	  justify-content: flex-start;
	  align-items: center; 
	  font-size: 30rpx;
  }
  .moneyAll .item > text:first-child{
		font-size: 46rpx;
		margin-right: 20rpx;
  }
  .moneyAll .item > text:nth-child(2){
  	  font-size: 34rpx;
	  margin-right: 20rpx;
  }
   .moneyAll .item >text:nth-child(3){
  	  font-size: 28rpx;
  	  margin-right: 5rpx;
	  color: #efb255;
  }
  .moneyAll .item >text:last-child{
  	  color: #efb255; 
  }
  .moneyAll >view.another > text:first-child{
  	 font-size: 28rpx;
	 margin-bottom: 16rpx;
  }
   .moneyAll >view.another > text:last-child{
  	 font-size: 42rpx;
	 color: #121212;
  }
</style>
