<template>
	<view>
		<view class="btns">
			<navigator  class="nav" url="/pages/business/businessType">
				<text>商务合作</text>
			</navigator>
			<view class="nav nav2"></view>
			<navigator  class="nav" url="">
				<text>金牌推广</text>
			</navigator>
		</view>
		<view class="article">
			文字
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
  .btns{
	  display: flex;
	  height: 120rpx;
	  padding: 0 70rpx;
	  justify-content: space-between;
	  align-items: center;
	  color: #fff;
	  font-size: 32rpx;
	  background: #fff;
	  border-top: solid 1rpx #E2E2E2;
  }
  .nav{
	  width: 200rpx;
	  height: 70rpx; 
	  border-radius: 10rpx;
	  background-color:#efb14e ;
	  display: flex;
	  justify-content: center;
	  align-items: center;
  }
  .nav2{
	  width: 1rpx;
	  background-color: #dedede;
  }
  .article{
	  padding:30rpx;
	  color: #6b6b6b;
	  font-size: 28rpx;
  }
</style>
