<template>
	<view class="all">
		<view class="title">登录</view>
		<view class="userInfo">
			<form @submit="formSubmit" >
                <view class="item">
                    <text class="modeIcon" :style="{fontSize:'36rpx'}">&#xe640;</text>
                    <input class="itemInput" placeholder-class="itemInputHolder" type="number" name="username" placeholder="请输入手机号" />
                </view>
				<view class="item">
				    <text class="modeIcon">&#xe63f;</text>
				    <input class="itemInput" placeholder-class="itemInputHolder" password="true" type="text" name="password" placeholder="请输入密码" />
				</view>
				<view class="toRegister" @click="toRegister()">注册</view>
                <view class="btns">
                    <button formType="submit">登录</button>
                </view>
				
            </form>
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
		   formSubmit: function(e) {
			   const that = this;
			   const vs = e.detail.value;
			   that.$http.requestPost({
				   url:`${that.$baseUrl}/api/user/login`,
				   data: vs,
				   success: res=>{
					   if(res.data && res.data.userinfo && res.data.userinfo.token){
					       const token = res.data.userinfo.token;
						   uni.setStorageSync("token",token)	
					   }
					  
					   uni.showToast({
							title: res.msg, 
							icon:'none',
							duration: 2000
					   });
					    uni.switchTab({
							url: "/pages/home/home"
					   })
				   }
			   })
		   },
		   toRegister: function() {
			   uni.navigateTo({
			   	  url:"/pages/register/register"
			   })
		   }
		}
	}
</script>

<style>
	page{
		background-color: #fff !important;
	}
	.all{
		padding: 80rpx 50rpx; 
	}
   .title{
	   color: #333;
	   font-size: 50rpx;
   }
   .userInfo{
	   margin-top: 100rpx;
   }
   .item{
	   padding-left: 20rpx;
	   height: 120rpx; 
	   border-bottom: solid 1rpx #EaEaEa;  
	   display: flex;
	   justify-content: flex-start; 
	   align-items: center; 
   }
   .btns{
	   margin-top: 100rpx;
   }
   .itemInput{ 
	   color: #6B6B6B;
	   font-size: 34rpx;  
	   padding: 0 20rpx;
   }
   .itemInputHolder{ 
	   color: #DEDEDE;
   }
  .item .modeIcon{
	  color: #6B6B6B;
	  font-size:44rpx; 
	  margin-right: 30rpx;
  }
  .btns button{
	  height:90rpx;  
	  background-color: #efb14e; 
	  border: none; 
	  color: #fff !important;
	  font-size: 32rpx; 
	  display: flex;
	  align-items: center; 
	  justify-content: center;  
	  box-shadow: none;
  }
  .btns button:after{
  	  border: none !important;
  }
  .toRegister{
	  color: #efb14e;
	  font-size: 30rpx;
	  text-align: right;
	  margin-top: 20rpx;
  }
</style>
