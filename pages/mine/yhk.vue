<template>
	<view>
		<form @submit="formSubmit" >
			<view class="tip"><text class="modeIcon3" >&#xe638;</text><text>基本信息</text></view>
			<view class="inputArea">
				  <input class="uni-input" name="name"  placeholder="请填写您的姓名" placeholder-class="input-placeholder2" />
			</view>
			<view class="inputArea inputArea2">
				  <input class="uni-input" name="card" type="number"  placeholder="请填写您的银行卡卡号" placeholder-class="input-placeholder2" />
			</view>
			<view class="tip"><text class="modeIcon3" >&#xe638;</text><text>上传银行卡</text></view>
			<view class="uploadPicBtn" @click="uploadPic('1')" >
				<view class="picArea" :style="{display:yinyeShow ? 'flex' : 'none'}">
					<view><text class="modeIcon">&#xe63b;</text></view>
					<text>上传银行卡正面</text>
				</view>
				<view class="picture" :style="{display:!yinyeShow ? 'flex' : 'none'}">
					<image :src="getImgUrl(yhkzmImgUrl)"></image>
				</view>
			</view>
			<view class="uploadPicBtn" @click="uploadPic('2')" :style="{paddingTop:'10rpx'}" >
				<view class="picArea" :style="{display:yinyeShow2 ? 'flex' : 'none'}">
					<view><text class="modeIcon">&#xe63b;</text></view>
					<text>上传银行卡反面</text>
				</view>
				<view class="picture" :style="{display:!yinyeShow2 ? 'flex' : 'none'}">
					<image :src="getImgUrl(yhkfmImgUrl)"></image>
				</view>
			</view>
			<!-- 提交 -->
			<view  class="btns">
				<button formType="submit"  type="primary">提交</button>
			</view>
		</form>	
		<!-- <view class="mask-fixed" :style="{display:maskShow ? 'flex' : 'none'}" >
			<view class="tip-out">
				<view class="uni-tip">
					<view class="uni-tip-title">提示</view> 
					<view class="uni-tip-content">提交成功！</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel('1')">确定</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				yinyeShow: true,
				yinyeShow2: true,
				yhkzmImgUrl: "",
				yhkfmImgUrl: "",
				maskShow: false
			}
		},
		methods: {
			uploadPic(v) {
				var that = this;
				if(v==='1'){
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: [], //album 从相册选图，camera 使用相机，默认二者都有
						success: function (res) {
							const tempFilePaths = res.tempFilePaths;
							that.$http.uploadFiles({
								url: `${that.$baseUrl}/api/common/upload`,
								filePath: tempFilePaths[0],
								name: 'file',
								success: (res,status) => {
									uni.showToast({  
										title: '上传成功',
										icon:'none',  
										duration: 2000 
									});
									that.yhkzmImgUrl = res.data.url;
									that.yinyeShow = false;
								}
							})
						},
						
					});
				}else if(v==='2'){
					uni.chooseImage({
						count: 1, 
						sizeType: ['original'], 
						sourceType: [], 
						success: function (res) {
							const tempFilePaths = res.tempFilePaths;
							that.$http.uploadFiles({
								url: `${that.$baseUrl}/api/common/upload`,
								filePath: tempFilePaths[0],
								name: 'file',
								success: (res,status) => {
									uni.showToast({  
										title: '上传成功',
										icon:'none',  
										duration: 2000 
									});
									that.yhkfmImgUrl = res.data.url;
									that.yinyeShow2 = false;
								}
							}) 
						}, 
						
					});
				}  
				
			},
			formSubmit: function(e) {
			   const that = this;
			   const vs = e.detail.value;
			   const imgs = {
				   image1:this.yhkzmImgUrl,
				   image2:this.yhkfmImgUrl
			   };
			   const newO = Object.assign(vs,imgs);
			   that.$http.requestPost({
				   url:`${that.$baseUrl}/api/user/bankCard`,
				   data: newO,
				   success: res=>{ 
					   uni.showToast({
							title: "提交成功", 
							icon:'none',
							duration: 2000
					   });
						uni.switchTab({
							url: "/pages/mine/mine"
					   })
				   }
			   })
			},
			/* togglePopup(open) {
				if (open === 'tip') {
					this.maskShow = true
				} 
			},
			cancel(v) {
				this.maskShow = false
				if (v === '1') {
					 uni.switchTab({
						url: "/pages/home/home"
					})
				} 
						 
			} */
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
   .uploadPicBtn{
	   padding: 60rpx 100rpx;
   }
   .picArea, .picture{
	   height: 350rpx;
	   border-radius: 10rpx;
	   background: #E7E9EB;
	   display: flex;
	   flex-direction: column;
	   justify-content: center;
	   align-items: center;
   }
  
   .picArea > view{
	   display: flex;
	   justify-content: center;
	   align-items: center;
	   height: 120rpx;
	   width: 120rpx;
	   border-radius: 60rpx;
	   background: rgba(0,0,0,0.3);
   }
    .picArea > view > text{
		 font-size: 60rpx;
		 color: #fff;
	}
   .picArea > text:last-child{
	   color: #999;  
	   font-size: 28rpx;
	   margin-top: 20rpx;
   }
   .picture image {
	   width: 100%;
	   height: 100%;
	   border-radius: 10rpx;
   }
   .inputArea{
	   padding: 30rpx 100rpx;
   }
   .inputArea2{
   	   padding-top: 0;
   }
   .inputArea input{
	  background: #fff;
	  height: 76rpx;
	  color: #6B6B6B;
	  font-size: 30rpx;
	  padding: 0 20rpx;
	  border-radius: 10rpx;
   }
   .input-placeholder2{
	   color: #DEDEDE;
   }
   .btns{
   	  margin-top: 30rpx;
   	  margin-bottom: 30rpx;
   	  padding: 30rpx;
	  background: #fff;
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
	text-align: center;
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
