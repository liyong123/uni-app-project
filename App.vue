<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			baseUrl :'http://kedou6.3711wan.com',
			imgUrlGlobal :'http://kedou6.3711wan.com'
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	$fontcolor: #ff0000;
	.uni-actionsheet .uni-actionsheet__cell {
		font-size: 28upx !important;
	}
	.vip_text{
		color: #ffd76b !important;
	}
	page{
		background-color: #f5f5f5 !important;
	}
	page *{
		box-sizing:content-box ;
	}
	html,
	body {
		font-family: "微软雅黑" !important;
		/**
	 * 在ios下点击view容器时会出现灰色背景   去掉灰色背景  只在ios中有效
	 */
		/* -webkit-tap-highlight-color: rgba(0, 0, 0, 0); */
		
	}
	uni-tabbar .uni-tabbar__bd{
		height: 110rpx !important
	}
	uni-tabbar .uni-tabbar__label{
		font-size: 24rpx !important
	}
	uni-tabbar .uni-tabbar__icon{
		width: 48rpx !important;
		height: 48rpx !important;
	}
	uni-page-body,
	uni-page-refresh {
		height: 100%;
	}

	uni-slider .uni-slider-handle-wrapper {
		height: 9upx;
	}

	uni-slider .uni-slider-thumb {
		z-index: 2;
		box-shadow: none;
		border: 1px solid #ffb27d;
	}
	uni-tabbar .uni-tabbar-border{
		background-color: #cacaca !important
	}
	uni-toast {
		z-index: 99999999;
		position: fixed;
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 1174346 */
	  src: url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.eot');
	  src: url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_1174346_4ghgbhbw3rv.svg#iconfont') format('svg');
	}
	.modeIcon {
	    font-family: iconfont; 
		color: #565656;
		font-size: 42rpx; 
	};
	.modeIcon2 {
	    font-family: iconfont; 
		color: #6b6b6b;
		font-size: 38rpx; 
	}; 
	.modeIcon3 {
	    font-family: iconfont; 
		color: #efb14e;
		font-size: 32rpx; 
	}; 
</style>
