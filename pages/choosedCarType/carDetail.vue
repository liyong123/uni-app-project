<template>
	<view>
		<view class='advertising-post'>
			<swiper  :style="{height:'220rpx'}" :indicator-dots="true" :indicator-color="indicatorColor2" :indicator-active-color="indicatorColor" :autoplay="true" :circular='true'>
			  <swiper-item class="carItem" v-for="(item,index) in imgAll" :key="index">
				<image  :src="getImgUrl(item)" mode="scaleToFill" />
			  </swiper-item>
			</swiper>
		</view>
		<view class="order_detail">
			<view class="order_name">
				<text>订单详情</text>
			</view>
			<view class="order_item_all">
				<view class="order_item">
					<view class="item_name">
						押金
					</view>
					<view>
						<text>¥</text> 
						<text>{{deposit}}</text>
					</view>
				</view>
				<view class="order_item">
					<view class="item_name">
						合约期(请选择)
					</view>
					<view class="another_unit">
						<picker @change="bindPickerChange" mode="selector" :value="index"  :range="numRange">
							<view class="pickerNum"><text>{{numRange[index]}}</text><text>/天</text></view>
						</picker>
						
					</view> 
				</view>
				<view class="order_item">
					<view class="item_name">
						日利润
					</view>
					<view class="another_unit">
						<text>{{profit}}</text> 
						<text>/天</text>
					</view>
				</view>
				<view class="order_item">
					<view class="item_name">
						平台服务费
					</view>
					<view class="another_unit">
						<text>18%</text> 
						<text>/天</text>
					</view>
				</view>
				<view class="order_item">
					<view class="item_name">
						保险费
					</view>
					<view class="another_unit">
						<text>3%</text> 
						<text>/天</text>
					</view>
				</view>
				<view class="order_item">
					<view class="item_name"> 
						保养费
					</view>
					<view class="another_unit">
						<text>1%</text> 
						<text>/天</text>
					</view>
				</view>
			</view>
		</view>
	    <view  class="btns">
			<button  type="primary" @click="togglePopup('tip')">确认提交</button>
		</view>
		<view class="mask-fixed" :style="{display:show ? 'flex' : 'none'}" >
			<view class="tip-out">
				<view class="uni-tip">
					<view class="uni-tip-title">提示</view> 
					<view class="uni-tip-content">订单提交，平台审核通过后，合约期内由商户单方面原因解除合约的，将扣除违约金200元。每日车辆产生的商户效益，可在当日24点后提现，次日18点前到账。</view>
					<view class="uni-tip-group-button">
						<view class="uni-tip-button" @click="cancel('0')">取消</view>
						<view class="uni-tip-button" @click="cancel('1')">确定</view>
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
				show: false, 
				indicatorColor:"#515837",
				indicatorColor2:"#a6ada5",
				id:'',
				imgAll:[],
				deposit:'',
				index:0,
				profit:'',
				profit_rule_id:'',
				numRange:[],
				profitAll:[],
				rules:[]
				 
			}
		},
		onLoad(params) {
			if(params && params.id){
				this.id = params.id;
			}
		},
		onShow() {
			this.$http.requestGet({
				url:`${this.$baseUrl}/api/car/getCar`,
				data: {
					id:this.id
				},
				success:res=>{
					const data = res.data;
					if(data && data.cartype){
						this.deposit = data.cartype.deposit ||'暂无';
					}
					const imagesAll = data.images;
					const newA = imagesAll.split(",");
					this.imgAll = newA;
					this.rules = res.data.rule;
					for(var i = 0; i< this.rules.length; i++) {
						this.numRange.push(this.rules[i].day);
						this.profitAll.push(this.rules[i].profit)
					}
					this.profit = this.profitAll[0];
					this.profit_rule_id = this.rules[0] && this.rules[0].id || ''
				} 
			})  
		}, 
		methods: {
			  togglePopup(open) {
			  	if (open === 'tip') {
			  		this.show = true
			  	} 
			  },
			  cancel(v) {
				this.show = false 
			  	if (v === '1') {
					//确认提交
					this.$http.requestPost({
						url:`${this.$baseUrl}/api/order/createContract`,
						data:{
							car_id:this.id,
							profit_rule_id:this.profit_rule_id
						},
						success:res => {
							uni.showToast({
								title: "提交成功", 
								icon:'none',
								duration: 2000
							});
							 uni.navigateTo({
								url: `/pages/choosedCarType/rentContract?id=${this.id}`
							})
						}
					})
					
			  		
			  	}
			 
			  },
			   bindPickerChange(e) {
				    const v = e.target.value;
					this.index = v;
					this.profit = this.profitAll[v];
					this.profit_rule_id = this.rules[v].id  
					
				},
		}
	}
</script>

<style>
	page{
		position: relative;
	}
	.advertising-post{
	   width: 100%;
	   height: 220rpx;
	   border-radius: 0rpx;
	   background-color: #fff; 
	   border-top: solid 1rpx #e2e2e2;
	   border-bottom: solid 1rpx #e7e9eb;
	   margin-bottom: 30rpx;
	}
	.carItem {
		text-align: center;
	}
	.advertising-post image{
		height:220rpx;
		width: 310rpx;
		border-radius:0rpx;
	}
	.order_name{
		height: 100rpx;
		padding: 0 30rpx; 
		background: #f5f8ff;
		border-bottom: solid 1rpx #e7e9eb;
		border-top: solid 1rpx #e7e9eb;
		display: flex;
		align-items: center;
		color: #52555c;
		font-size: 30rpx;
	}
	.order_item{
		padding: 0 30rpx;
		height: 100rpx;
		background: #fff;
		border-bottom: solid 1rpx #e7e9eb;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #858585;
		font-size: 30rpx;
	}
	.order_item text{
		color: #efb255; 
	}
	.order_item text:first-child{
		margin-right: 8rpx;
		font-size: 26rpx;
	}
	.order_item text:last-child{
		color: #858585; 
		font-size: 26rpx;
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
	.another_unit .pickerNum{
		font-size: 26rpx; 
	}
	.another_unit .pickerNum text:first-child{
		color: #efb255;
	}
	.another_unit .pickerNum text:last-child{
		color: #858585; 
	}
</style> 
