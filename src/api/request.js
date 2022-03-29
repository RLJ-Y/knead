
export default function service(options){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			//请求url中如果没有method，默认是get
			method:options.method||'GET',
			//请求url中如果没有data，默认为空
			data: options.data || {},
			// header: {
			// 	'Content-Type': 'application/x-www-form-urlencoded'
			// },
			// dataType: 'json',
			success:res=>{
				console.log(res.statusCode)
				if(res.statusCode === 200 && res.data.code===1){
					const data = res.data.data
					resolve(data)
				}else{
					return uni.showToast({icon:'loading',title:'获取数据失败'})
				}
				
			},
			fail:err=>{
				return uni.showToast({
					icon:'loading',
					title:'请求失败'
				})
				reject(err)
			}
		})
	})
}
