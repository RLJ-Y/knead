<template>
	<view class='main column-center'>
		<image src='../../static/images/detail/banner.png' class='banner'></image>
		<view class='boxOuter column-center'>
			<view class='txt'>中式推拿</view>
			<view class='row-between money'>
				<view class='row-start '>
					<view class='txt1 row-start'>
						<u-icon name="rmb" color="#FF7800" size="20"></u-icon>198
					</view>
					<view class='txt3 row-start'>
						<u-icon name="clock-fill" color="#67BE41" size="30" class='icon3'></u-icon>60分钟
					</view>
				</view>
				<view class='num'>超<text class='green'>555</text>人选择</view>
			</view>
			<image src='../../static/images/detail/protect.png' mode="widthFix" class='protect'></image>
		</view>
		<image src='../../static/images/detail/intro.png' class='intro mgb20'></image>

		<view class='boxOuter column-center'>
			<view class='txt'>项目详情</view>
			<image src='../../static/images/detail/title1.png' class='title'></image>
			<image src='../../static/images/detail/detail.png' class='pic' mode="widthFix"></image>
			<image src='../../static/images/detail/title2.png' class='title'></image>
			<image src='../../static/images/detail/taboo.png' class='pic' mode="widthFix"></image>
			<image src='../../static/images/detail/title3.png' class='title'></image>
			<image src='../../static/images/detail/safe.png' class='pic mgb20' mode="widthFix"></image>
		</view>

		<button class="main-btn">
			选择技师
		</button>

	</view>
</template>

<script>
	// ok
</script>

<style lang="scss" scoped>
	@import '@/static/scss/index.scss';

	.main {
		padding-bottom: 140rpx;
		background: $backColor;

		.banner {
			width: 100%;
			height: 500rpx;
		}

		.protect {
			width: 100%
		}

		.intro {
			width: 726rpx;
			height: 212rpx;
		}

		.title {
			width: 516rpx;
			height: 48rpx;
			margin-bottom: 40rpx;
		}

		.pic {
			width: 100%;
			margin-bottom: 40rpx;
		}

		.boxOuter {
			width: 710rpx;

			.txt {
				width: 100%;
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 20rpx;
			}
		}

		.main-btn {
			position: fixed;
			left: 20rpx;
			bottom: 20rpx;
		}

		.money {
			width: 100%;
			line-height: 50rpx;
			font-size: 24rpx;
			color: $gray;

			margin-bottom: 30rpx;

			.txt1 {
				margin-right: 65rpx;
				color: $orange;
				font-size: 36rpx;
				font-weight: bold;
				align-items: baseline;
			}

			.txt3 {

				.icon3 {
					margin-right: 5rpx;
				}
			}

			.num {
				font-size: 20rpx;
				color: $gray;

				text {
					color: $greenColor
				}
			}

		}
	}
</style>
