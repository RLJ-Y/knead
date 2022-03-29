export function jump(url,type=1){
	// 白名单
	const list = [];
	// 获取当前页面地址
	let current = getCur()
	let token = '测试'
	// 假如当前页面不在白名单并且没登录
	if(list.indexOf(current)<0 && !token){
		// 不是登录页，登录页直接return
		if(current!=='pages/home/login'){
			uni.navigateTo({
				url:'/pages/home/login'
			});
		}
		return 
	}
	if(type===1){
		uni.navigateTo({
			url
		});
	}else{
		uni.redirectTo({
			url
		})
	}	
}
function getCur(){
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	return routes[routes.length - 1].route //获取当前页面路由
}


// uni.showToast({
// title: '提交成功',
// duration: 2000

// uni.getLocation({
// 			type: 'wgs84',
// 			success: function(res) {
// 				console.log(res)
// 				console.log('当前位置的经度：' + res.longitude);
// 				console.log('当前位置的纬度：' + res.latitude);
// 			},
// 			fail: function(err) {
// 				console.log(err);
// 			}
// 		});