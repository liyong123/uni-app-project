<template>
	<view>
		<view class="tip"><text class="modeIcon3" >&#xe638;</text><text>您的商务资质是？</text></view>
		<view class="item-all">
			<view class="item-grp">
				<navigator  class="item" url="/pages/business/uploadPic">
					<view class="name-grp">
						<text :style="{fontSize:'30rpx'}" class="modeIcon2">&#xe63a;</text>
						<text>我是线下汽车租赁公司</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<navigator  class="item" url="/pages/business/uploadPic">
					<view class="name-grp">
						<text class="modeIcon2">&#xe636;</text>
						<text>我是4S店经销商</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<navigator  class="item" url="/pages/business/uploadPic">
					<view class="name-grp">
						<text class="modeIcon2">&#xe639;</text>
						<text>我是二级经销商</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<navigator  class="item" url="/pages/business/uploadPic">
					<view class="name-grp">
						<text class="modeIcon2">&#xe637;</text> 
						<text>我是婚庆公司</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
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
   .tip{
	   height: 80rpx;
	   padding: 0 30rpx;
	   color: #efb14e;
	   font-size: 28rpx;
	   display: flex;
	   justify-content: flex-start;
	   align-items: center;
	   background: #fff;
	   border-top: solid 1rpx #E2E2E2;
   }
   .tip text:last-child{
   	 margin-left: 10rpx;
   }
   .item-grp{
   	margin: 20rpx 0;
   	border-bottom: solid 1rpx #efefef;
   	border-top: solid 1rpx #efefef;
   }
   .item-grp .item:last-child{
   	border-bottom: none;
   }
   .item{
   	height: 90rpx;
   	border-bottom: solid 1rpx #efefef;
   	background: #fff;
   	display: flex;
   	padding: 0 30rpx;
   	justify-content: space-between;
   	align-items: center;
   }
   .name-grp{
   	width: 420rpx;
   	text-align: left;
   	display: flex;
   	align-items: center;
   }
   .name-grp text:last-child{
   	color: #6b6b6b;
   	font-size: 30rpx;
   	margin-left: 40rpx;
   }
   .to-next{
   	width: 100rpx;
   	text-align: right;
   }
</style>
