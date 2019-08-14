<template>
	<view>
		<view class="contract-img">
			<image :src="imageUrl"></image>
			<view class="sign">
				张三
			</view>
		</view>
		<view class="btns">
			<button   type="primary" @click="test()">商户确认</button>
		</view>
		<view class="mask-fixed" :style="{display:show ? 'flex' : 'none'}" >
			<view class="tip-out">
				<view class="uni-tip" :style="{display:showIn ? 'block' : 'none'}">
					<view class="uni-tip-title">提示</view> 
					<view class="uni-tip-content">您已签约成功，可至<text @click="toContract()">我的-合同</text>查看合同详情</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel('0')">确定</view>
					</view>
				</view>
				<view class="uni-tip" :style="{display:showIn ? 'none' : 'block'}">
					<view class="uni-tip-title">提示</view> 
					<view class="uni-tip-content" :style="{textAlign:'center'}">签约失败,请联系客服</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel('1')">取消</view>
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
				id:'',
				imageUrl:'',
				show: false,
				showIn: false
			}
		}, 
		onLoad(params) {
			if(params && params.id){
				this.id = params.id;
			}
			this.imageUrl = '/static/swiper01.jpg'
			
		},
		methods: {
			test(){
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					success: function (res) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePaths[0],
							success: function () {
								console.log('save success');
							} 
						});
					}
				})
			}
			,
			 submit() {
				 //todo :接口联调
				 if(1===1) {
					this.show = true;
					this.showIn = true;
				 }else{
					this.show = true;
					this.showIn = false;
				 }
			 },
			  cancel(v) {
	
				this.show = false
			 	if (v === '0') {
			 		uni.switchTab({
			 			url: "/pages/home/home"
			 		})
			 	}		 
			 },
			 toContract() {
				 //跳转到 我的-合同
				 uni.navigateTo({
				 	url: ""
				 }) 
			 }
		}
	}
</script>

<style>
	.contract-img{
		display: flex;
		position: relative;
		padding: 0 30rpx;
		justify-content: center;
	}
	.contract-img image{
		
	}
	.sign{
		position: absolute;
		left: 50rpx;
		bottom: 10rpx;
		z-index: 999;
		font-size: 32rpx;
		color: #121212;
	}
	.btns{
		  margin-top: 30rpx;
		  margin-bottom: 30rpx;
		  padding: 0 30rpx;
	}
	.btns > button{
		height:90rpx;  
		background-color: #efb14e;
		border: none;
		color: fff !important; 
		font-size: 32rpx; 
		display: flex;
		align-items: center; 
		justify-content: center;  
		box-shadow: none;
	}
	/* 提示窗口 */
	.mask-fixed{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		overflow: hidden;
		background:rgba(0, 0, 0, .4)
	}
	.tip-out{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.uni-tip {
		padding: 30rpx;
		width: 600rpx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 20rpx;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 32rpx;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 30rpx;
		font-size: 28rpx;
		color: #666;
	}
	
	.uni-tip-group-button {
		margin-top: 20rpx;
		display: flex;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 28rpx;
		color: #3b4144;
	}
</style>
