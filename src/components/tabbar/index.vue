<template>
	<u-tabbar v-model="current" :list="list" active-color="#67BE41" inactive-color="#111111" icon-size="36" height="56px" @change="changeTab"></u-tabbar>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			list: [
				{
					iconPath: '/static/images/tabbar/icon1.png',
					selectedIconPath: '/static/images/tabbar/aicon1.png',
					text: '首页',
					customIcon: false
				},
				{
					iconPath: '/static/images/tabbar/icon2.png',
					selectedIconPath: '/static/images/tabbar/aicon2.png',
					text: '理疗师',
					customIcon: false
				},
				{
					iconPath: '/static/images/tabbar/icon3.png',
					selectedIconPath: '/static/images/tabbar/aicon3.png',
					text: '订单',
					customIcon: false
				},
				{
					iconPath: '/static/images/tabbar/icon4.png',
					selectedIconPath: '/static/images/tabbar/aicon4.png',
					text: '我的',
					customIcon: false,
				}
			]
		};
	},
	methods: {
		changeTab(e) {
			if (e === 0) {
				this.$router.replace('/pages/home/index');
			} else if (e === 1) {
				this.$router.replace('/pages/therapist/index');
			} else if (e === 2) {
				this.$router.replace('/pages/order/index');
			} else if (e === 3) {
				this.$router.replace('/pages/my/index');
			}
		}
	}
};
</script>

<style></style>
