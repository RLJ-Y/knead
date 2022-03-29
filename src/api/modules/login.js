import request from '../request.js'
export default {
	async login(code) {
		let res = await request({
			url: '/api/user/wxlogin', //仅为示例，并非真实接口地址。
			method: 'POST',
			data: {
				code,
			},
		})
		return res
	},
}
