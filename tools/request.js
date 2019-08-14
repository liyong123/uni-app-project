export default {
	//post请求
	requestPost: function (obj) {
		let copy = {};
		Object.assign(copy, obj);
		copy.method = 'POST';
		copy.header = obj.header || {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		//TODO 前端判断token是否存在
		try{
			const token =  uni.getStorageSync('token');
			if (token) {
				copy.header.token = token;
			} 
		}catch(e){
			console.log("tokenError：",e)
		} 
		copy.success = function(res) {
		
			let title = res.data.msg;
			//接口状态判断
			switch(res.statusCode) {
				case 200:
				   if(res.data.code === 1) {
					   obj.success(res.data);
				   }else if (res.data.code === 401) {
					   uni.showToast({
							title: '登录失效,请重新登录...',
							icon:'none',
							duration: 2000    
						});
						uni.navigateTo({
							url:'/pages/login/login'
						})
				   }else if(res.data.code === 0 ){
					   if(obj.fail) {
						   obj.fail(res)
					   }else {
						   uni.showToast({
								title: title,
								icon:'none',
								duration: 2000
						   });
					   }
				   }
				break;
				case 401:
				    uni.showToast({
						title: '登录失效,请重新登录...',
						icon:'none',
						duration: 2000
					});
					uni.navigateTo({
						url:'/pages/login/login'
					})
				break;
				case 500:
				    uni.showToast({
						title: '服务器500',
						icon:'none',
						duration: 2000
					});
				break;
				default:
					uni.showToast({
						title: '请求失败，请重试...',
						icon:'none',
						duration: 2000
					});
			}
		};
		copy.fail = function (err){
			if(obj.fail){
				obj.fail && obj.fail(err);
			}else{
				if(err.data && err.data.msg){
					uni.showToast({
						title: err.data.msg,
						icon:'none',
						duration: 2000
					});
				}
			}			
		};
		
		uni.request(copy);
	},
	//get请求
	requestGet: function (obj) {
	
		let copy = {};
		Object.assign(copy, obj);
		copy.method = 'GET';
		copy.header = obj.header || {};
		try{
			const token =  uni.getStorageSync('token');
			if (token) {
				copy.header.token = token;
			} 
		}catch(e){
			console.log("tokenError：",e)
		} 
		copy.success = function(res) {
			
			let title = res.data.msg;
			//接口状态判断
			switch(res.statusCode) {
				case 200:
				   if(res.data.code === 1) { 
					   obj.success(res.data);
				   }else if (res.data.code === 401) {
					   uni.showToast({
							title: '登录失效,请重新登录...',
							icon:'none',
							duration: 2000
						});
						uni.navigateTo({
							url:'/pages/login/login'
						})
				   }else if(res.data.code === 0 ){
					   if(obj.fail) {
						   obj.fail(res)
					   }else {
						   uni.showToast({
								title: title,
								icon:'none',
								duration: 2000
						   });
					   }
				   }
				break;
				case 401:
				    uni.showToast({
						title: '登录失效,请重新登录...',
						icon:'none',
						duration: 1000
					});
					uni.navigateTo({
						url:'/pages/login/login'
					})
				break;
				case 500:
				    uni.showToast({
						title: '服务器500',
						icon:'none',
						duration: 2000
					});
				break;
				default:
					uni.showToast({
						title: '请求失败，请重试...',
						icon:'none',
						duration: 2000
					});
			}
		};
		copy.fail = function (err){
	
			if(obj.fail){
				obj.fail && obj.fail(err);
			}else{
				if(err.data && err.data.msg){
					uni.showToast({
						title: err.data.msg,
						icon:'none',
						duration: 2000
					});
				}
			}			
		};
		
		uni.request(copy);
	},
	uploadFiles: function (obj){
		uni.showLoading({
			title: '上传中...'
		}); 
		let copy = {};
		Object.assign(copy, obj);
		copy.header = obj.header || {};
		copy.fileType = obj.fileType || 'image'; 
		try{
			const token =  uni.getStorageSync('token');
			if (token) {
				copy.header.token = token;   
			} 
		}catch(e){
			console.log("tokenError：",e)
		}   
		copy.success = function(res) {
		 	uni.hideLoading(); 
			switch(res.statusCode) {
				case 200:
					let data = JSON.parse(res.data);
					let title = data.msg; 
					if(data.code === 1) { 
					   obj.success(data);
					}else if (data.code === 401) {
					   uni.showToast({
							title: '登录失效,请重新登录...',
							icon:'none',
							duration: 2000
						});
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}else if(data.code === 0 ){
					   if(obj.fail) {
						   obj.fail(res)
					   }else {
						   uni.showToast({
								title: title,
								icon:'none',
								duration: 2000
						   });
					   }
					}
				break;
				case 401:
				   uni.showToast({
						title: '登录失效,请重新登录...',
						icon:'none',
						duration: 2000    
				   });
				   uni.navigateTo({
						url:'/pages/login/login'
				   }) 
				break;
				case 500:
				   uni.showToast({
						title: '服务器500',
						icon:'none',
						duration: 2000
				   }); 
				break;
				default:
				   uni.showToast({
						title: '请求失败，请重试...',
						icon:'none',
						duration: 2000
				   });
			}
		};
		copy.fail = function (err){
			uni.hideLoading(); 
			uni.showToast({
				title: '上传失败',
				icon:'none',
				duration: 2000
			});
			obj.fail && obj.fail(err);
		};	
		
		const uploadTask = uni.uploadFile(copy);
		uploadTask.onProgressUpdate((res) => {
		    console.log('上传进度' + res.progress); 
		    console.log('已经上传的数据长度' + res.totalBytesSent);
		    console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
		});
	}
}