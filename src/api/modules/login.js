import request from '../request.js'
export default {
	async login(){
		let res = await request({
			url: '/datiapi/api/user/is_login', //仅为示例，并非真实接口地址。
		})
		return res
	}
}  