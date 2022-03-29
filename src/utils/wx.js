var jweixin = require('jweixin-module')
export function isLogin() {
	//是否登录 /api/user/is_login
	return !!localStorage.getItem('isLogin')
}
export function jumpWx(
	REDIRECT_URI = 'http://xcx10.datikeji.com/#/pages/home/login',
	appid = 'wx10f8f236ac19c2bc',
) {
	let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(
		REDIRECT_URI,
	)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`
	location.href = url
}

export function initJssdk() {
	jweixin.config({
		debug: false,
		appId: res.appId,
		timestamp: res.timestamp,
		nonceStr: res.nonceStr,
		signature: res.signature,
		jsApiList: ['checkJsApi'],
	})
}

export function hideMenuItems() {
	// jweixin.ready({})
	jweixin.hideAllNonBaseMenuItem()
}

export default { hideMenuItems }
