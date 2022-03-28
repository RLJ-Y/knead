<template>
	<view class="main column-center">
		<view class="top">
			<view class="row-between info">
				<view class="left row-start">
					<view class="imgbox"><image src="https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png"></image></view>
					<view class="column-center-a">
						<view class="name">张一山</view>
						<view class="vip">普通会员</view>
					</view>
				</view>
				<image src="@/static/images/my/ic-setup.png" class="icon" @click='toSetting'></image>
			</view>
			<view class="money row-between">
				<view class="num column-center-a">
					<text class="txt1">账户余额(元)</text>
					<text class="txt2">0.00</text>
				</view>
				<view class="btn" @click='toPay'>立即充值</view>
			</view>
		</view>
		<view class="row-between collection">
			<view class="item column-center">
				<text class="txt1">我的收藏</text>
				<text class="txt2">22</text>
			</view>
			<view class="item column-center" @click='toVoucher'>
				<text class="txt1">优惠券</text>
				<text class="txt2">6</text>
			</view>
		</view>
		<view class="fun">
			<view class="title">其他功能</view>
			<view class="row-start">
				<view class="item column-center">
					<image src="@/static/images/my/pic-kefu.png"></image>
					<text>联系客服</text>
				</view>
				<view class="item column-center" @click='toAdd'>
					<image src="@/static/images/my/pic-diz.png"></image>
					<text>地址管理</text>
				</view>
				<view class="item column-center" @click='toAppoint'>
					<image src="@/static/images/my/pic-zhaomu.png"></image>
					<text>技师招募</text>
				</view>
			</view>
		</view>
		<image src="@/static/images/my/pic-share.png" class="share-img"></image>
		<view class="recommend">
			<view class="row-center title">
				<image src="@/static/images/my/pic-gift.png"></image>
				<text>为您推荐</text>
			</view>
			<view class="list column-center"><technician v-for="(item, index) in 10"></technician></view>
		</view>
	</view>
</template>

<script>
	// ok
	export default {
		methods:{
			toVoucher(){
				this.$router.push('/pages/my/vouchers');
			},
			toAdd(){
				this.$router.push('/pages/address/index');
			},
			toPay(){
				this.$router.push('/pages/pay/index');
			},
			toSetting(){
				this.$router.push('/pages/setting/index');
			},
			toAppoint(){
				this.$router.push('appoint');
			}
		}
	}
	
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.main {
	background: $backColor;
	.top {
		width: 100%;
		height: 390rpx;
		background: url(@/static/images/my/pic-bc.png);
		background-size: 100% 100%;
		padding:30rpx 30rpx 0;
		margin-bottom: 20rpx;
		position: relative;
		.info {
			.left {
				.imgbox {
					width: 150rpx;
					height: 150rpx;
					border: 6rpx solid #fff;
					border-radius: 100%;
					margin-right: 20rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 100%;
					}
				}
				.name {
					font-size: 40rpx;
					font-weight: bold;
					color: #fff;
					margin-bottom: 15rpx;
				}
				.vip {
					width: 140rpx;
					height: 44rpx;
					line-height: 44rpx;
					background: rgba(0, 0, 0, 0.6);
					border-radius: 22rpx;
					text-align: center;
					color: #fff;
					font-size: 26rpx;
				}
			}
			.icon {
				width: 56rpx;
				height: 56rpx;
			}
		}
		.money {
			width: 690rpx;
			height: 180rpx;
			background: url(@/static/images/my/pic-car.png);
			background-size: 100% 100%;
			position: absolute;
			left: 30rpx;
			bottom: 0;
			padding: 0 30rpx;
			.txt1 {
				color: #5a4129;
			}
			.txt2 {
				color: #775737;
				font-size: 56rpx;
				font-weight: bold;
			}
			.btn {
				text-align: center;
				color: #775737;
				font-weight: bold;
				font-size: 32rpx;
				width: 230rpx;
				height: 70rpx;
				line-height: 70rpx;
				background: #d9bb85;
				border-radius: 35rpx;
			}
		}
	}

	.collection {
		width: 710rpx;
		background: #fff;
		padding: 30rpx;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		.item {
			width: 312rpx;
			height: 140rpx;
			background: url(@/static/images/my/pic-background.png);
			background-size: 100% 100%;
			color: #fff;
			.txt2 {
				font-size: 56rpx;
				font-weight: bold;
			}
		}
	}
	.fun {
		width: 710rpx;
		background: #fff;
		padding: 40rpx 30rpx;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		margin-bottom: 20rpx;
		.title {
			font-size: 32rpx;
			margin-bottom: 30rpx;
		}
		.item {
			width: 120rpx;
			margin-right: 90rpx;
			image {
				width: 90rpx;
				height: 90rpx;

				margin-bottom: 15rpx;
			}
			text {
				font-size: 26rpx;
			}
		}
	}
	.share-img {
		width: 710rpx;
		height: 150rpx;
	}
	.recommend {
		.title {
			padding-top: 40rpx;
			margin-bottom: 20rpx;
			image {
				width: 48rpx;
				height: 48rpx;
				margin-right: 12rpx;
			}
			text {
				font-size: 40rpx;
				font-weight: bold;
			}
		}
	}
}
</style>
