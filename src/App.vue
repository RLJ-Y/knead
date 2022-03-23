<template>
	<view>	
		<router-view></router-view>
	</view>
</template>
<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import './static/scss/index.scss';
@import "uview-ui/index.scss";

/*每个页面公共css */
page {
	background: $backColor;
	font-size: 30rpx;
	color: $maiBlack;
}
</style>
