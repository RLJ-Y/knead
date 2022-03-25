<template>
	<view class="content column-center">
		<view class="box">
			<view class="row borderbottom row-start">
				<image src="@/static/images/my/man.png" class="icon"></image>
				<text class="tit">联系人</text>
				<input class="input" type="text" v-model="addressData.name" placeholder="姓名" placeholder-class="placeholder" />
			</view>
			<view class="row borderbottom row-start">
				<image src="@/static/images/my/phone.png" class="icon"></image>
				<text class="tit">手机号</text>
				<input class="input" type="number" v-model="addressData.mobile" placeholder="手机号" placeholder-class="placeholder" />
			</view>
			<view class="row borderbottom row-start">
				<image src="@/static/images/my/location.png" class="icon"></image>
				<text class="tit">服务地址</text>
				<text @click="chooseLocation" class="input">{{ addressData.addressName }}</text>
				<u-icon name="arrow-right" color="#111111" size="14"></u-icon>
			</view>
			<view class="row row-start">
				<image src="@/static/images/my/door.png" class="icon"></image>
				<text class="tit">门牌号</text>
				<input class="input" type="text" v-model="addressData.area" placeholder="某酒店**房间（某小区**号）" placeholder-class="placeholder" />
			</view>
		</view>

		<button class="main-btn" @click="confirm">保存</button>
	</view>
</template>

<script>
// ok
export default {
	data() {
		return {
			addressData: {
				name: '',
				mobile: '',
				addressName: '点击选择您的地址',
				address: '',
				area: '',
				default: false
			}
		};
	},
	onLoad(option) {
		let title = '新增收货地址';
		if (option.type === 'edit') {
			title = '编辑收货地址';
			this.addressData = JSON.parse(option.data);
		}
		this.manageType = option.type;
		uni.setNavigationBarTitle({
			title
		});
	},
	methods: {
		switchChange(e) {
			this.addressData.default = e.detail;
		},
		//地图选择地址
		chooseLocation() {
			console.log('地图');
			uni.chooseLocation({
				success: data => {
					this.addressData.addressName = data.name;
					this.addressData.address = data.name;
				}
			});
		},
		//提交
		confirm() {
			let data = this.addressData;
			if (!data.name) {
				this.$api.msg('请填写收货人姓名');
				return;
			}
			if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)) {
				this.$api.msg('请输入正确的手机号码');
				return;
			}
			if (!data.address) {
				this.$api.msg('请在地图选择所在位置');
				return;
			}
			if (!data.area) {
				this.$api.msg('请填写门牌号信息');
				return;
			}
			//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
			this.$api.prePage().refreshList(data, this.manageType);
			this.$api.msg(`地址${this.manageType == 'edit' ? '修改' : '添加'}成功`);
			setTimeout(() => {
				uni.navigateBack();
			}, 800);
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.content {
	padding-top: 20rpx;
	.box {
		width: 710rpx;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 60rpx;
		padding: 0 20rpx;
		.row {
			display: flex;
			align-items: center;
			position: relative;
			padding: 30rpx 0;
			background: #fff;
			font-size: 28rpx;
			.icon {
				width: 32rpx;
				height: 32rpx;
				margin-right: 10rpx;
			}
			.tit {
				width: 140rpx;
			}
			.input {
				flex: 1;
				font-size: 28rpx;
			}
		}
	}
}
</style>
