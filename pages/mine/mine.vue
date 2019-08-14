<template>
	<view>
		<view class="bg"></view>
		<view class="member-head">
			<view class="user-info">
				<view><image src="../../static/car_detail_03.png"></image></view>
				<view>张三</view>
			</view>
		</view>
		<view class="item-all">
			<view class="item-grp">
				<navigator  class="item" url="/pages/mine/smrz">
					<view class="name-grp">
						<text class="modeIcon2">&#xe62d;</text>
						<text>实名认证</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<navigator  class="item" url="/pages/mine/yhk">
					<view class="name-grp">
						<text class="modeIcon2">&#xe62c;</text>
						<text>银行卡</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
				<navigator  class="item" url="/pages/mine/wdzc">
					<view class="name-grp">
						<text class="modeIcon2">&#xe631;</text>
						<text>我的资产</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<!-- <navigator  class="item" url="">
					<view class="name-grp">
						<text class="modeIcon2">&#xe62f;</text>
						<text>团队</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator> -->
				<navigator  class="item" url=""> 
					<view class="name-grp">
						<text class="modeIcon2">&#xe634;</text> 
						<text>全民推广</text>
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<navigator  class="item" url="">
					<view class="name-grp">
						<text class="modeIcon2">&#xe635;</text>
						<text>我的订单</text>  
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
				<navigator  class="item" url="">
					<view class="name-grp">
						<text class="modeIcon2">&#xe62e;</text>
						<text>合同</text> 
					</view>
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</navigator>
			</view>
			<view class="item-grp">
				<view  class="item"  @click="logout()">
					<view class="name-grp">
						<text class="modeIcon2">&#xe630;</text> 
						<text>退出</text>
					</view> 
					<view class="to-next"><text class="modeIcon2">&#xe633;</text></view>
				</view>
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
			logout() {
			   const that = this;
			   uni.showModal({
			   	 title:"提示",
				 content:"您确定退出？",
				 success: function (res) {   
					if (res.confirm) {
						that.$http.requestGet({
							url:`${that.$baseUrl}/api/user/logout`,
							success: res => {
								/* uni.removeStorageSync('token'); */
								uni.showToast({
									title:"注销成功",
									icon:'none',
									duration: 2000
								})
							}
						})
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				 }
			   })
			}
		}
	}
</script>

<style>
	.bg{
		height: 130rpx;
		background: #fae64f;
		
	}
	.member-head {
		height: 260rpx;
		background: transparent;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		border-radius: 35%;
		background: #fae64f; 
		z-index: 9;
		margin-top: -130rpx;
	}
	.user-info{
		flex: none;
		width:160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30rpx;
		z-index: 9; 
	}
	.user-info image{
		flex: none;
		width:140rpx;
		height: 140rpx;
		border-radius: 100rpx;
		border: solid 6rpx #fff;
		background: #EEEEEE;
		margin-bottom: 10rpx;  
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
		width: 300rpx;
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
