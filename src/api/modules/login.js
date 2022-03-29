import request from '../request.js'
export default {
	async login(){
		let res = await request({
			url: '/api/api/js/h5_index', //仅为示例，并非真实接口地址。
			method: 'POST',
			data: {
				page: 1,
				status: 0,
				city_id: 948
			}
		})
		return res
	}
}  