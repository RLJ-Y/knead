export default {
	getHomeList(){
		console.log('你好啊')
		uni.request({
			url: '/api/api/js/h5_index', //仅为示例，并非真实接口地址。
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			dataType: 'json',
			data: {
				page: 1,
				status: 0,
				city_id: 948
			},
			success: res => {
				console.log(res.data);
				this.text = 'request success';
			}
		});
	},
	getHomeList2(){
		console.log('你好啊')
		uni.request({
			url: '/api/api/js/h5_index', //仅为示例，并非真实接口地址。
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			dataType: 'json',
			data: {
				page: 1,
				status: 0,
				city_id: 948
			},
			success: res => {
				console.log(res.data);
				this.text = 'request success';
			}
		});
	}
}  