<template>
	<u-tabbar v-model="current" :list="list" @change='change' ></u-tabbar>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					iconPath: 'home',
					selectedIconPath: 'home-fill',
					text: '首页',
					customIcon: false
				},
				{
					iconPath: 'photo',
					selectedIconPath: 'photo-fill',
					text: '放映厅',
					customIcon: false
				},
				{
					iconPath: 'play-right',
					selectedIconPath: 'play-right-fill',
					text: '直播',
					customIcon: false
				},
				{
					iconPath: 'account',
					selectedIconPath: 'account-fill',
					text: '我的',
					isDot: false,
					customIcon: false
				}
			],
			current: 0
		};
	},
	methods: {
		change(e) {
			console.log(e);
			if (e === 0) {
				this.$router.replace('home');
			} else if (e === 1) {
				this.$router.replace('therapist');
			} else if (e === 3) {
				this.$router.replace('my');
			}
		}
	}
};
</script>

<style></style>
