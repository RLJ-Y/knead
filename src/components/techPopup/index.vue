<template>
	
	<u-popup mode="bottom" v-model="show">
		<view class="popup">
			<view class="row-between introduce">
				<view class="imgbox"><image src="https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png"></image></view>
				<view class="right">
					<view class="name">
						<text>杨蕾</text>
						从业5年
					</view>
					<view class="con">从事按摩理疗五年，性格开朗大方，温柔可人</view>
				</view>
			</view>
			<view class="tip row-between">
				<view class="txt1">保障</view>
				<view class="row-start">
					<image src="@/static/images/therapist/ic-people.png" class="img1" />
					实名认证
				</view>
				<view class="row-start">
					<image src="@/static/images/therapist/ic-pei.png" class="img2" />
					爽约包赔
				</view>
				<view class="row-start">
					<image src="@/static/images/therapist/ic-good.png" class="img3" />
					全场保障
				</view>
			</view>
			<view  class="list">
				<scroll-view scroll-y="true" class='scroll' >
					<view class="rating" >
						<view class="name row-between">
							<view class="row-start">
								<text class="txt1">匿名用户</text>
								<u-rate :count="count" v-model="value" active-color="#ff7800" inactive-icon="star-fill" size='34'/>
							</view>
							<view class="txt2">2022-03-13 10:23:20</view>
						</view>
						<view class="con">按的舒服，服务好</view>
						<view class="tags row-start wrap">
							<view class="tag">手法专业</view><view class="tag">手法专业</view><view class="tag">手法专业</view>
						</view>
					</view>
				</scroll-view>
			</view>
			
		</view>
	</u-popup>
</template>

<script>
// ok
export default {
	data() {
		return {
			show: false,
			count:5,
			value:3
		};
	},
	mounted() {
		this.$bus.$on('openRate', () => {
			this.show = true
		});
	
	},
	beforeDestroy() {
		this.$bus.$off('openRate');
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.popup {
	color: $gray;
	padding: 20rpx;
	.list {
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		border: 2px solid #67be41;
		padding: 20rpx;
		overflow: hidden;
		.scroll{
			max-height: 560rpx;
		}
		.rating {
			padding: 20rpx 0 6rpx 0;
			border-bottom: 1px solid $border;
			&:last-child{
				border-bottom: none;
				padding-bottom:0;
			}
			.name {
				margin-bottom: 20rpx;
				.txt1 {
					margin-right: 20rpx;
				}
				.txt2 {
					color: $gray;
					font-size: 26rpx;
				}
			}
			.con {
				font-size: 28rpx;
				margin-bottom: 24rpx;
			}
			.tags {
				margin: 0 -6rpx;
				.tag {
					padding: 0 8rpx;
					line-height: 44rpx;
					background: #eeeeee;
					display: inline-block;
					font-size: 26rpx;
					margin: 0 6rpx;
					margin-bottom: 14rpx;
				}
			}
		}
	}
	.introduce {
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		border: 2px solid #67be41;
		padding: 20rpx;
		margin-bottom: 20rpx;
		.imgbox {
			width: 110rpx;
			height: 110rpx;
			border: 4rpx solid #E3E3E3;
			border-radius: 100%;
			margin-right: 30rpx;
			image {
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		.right {
			flex: 1;
			.name {
				color: $maiBlack;
				font-size: 28rpx;
				margin-bottom: 15rpx;
				text {
					font-size: 32rpx;
					font-weight: bold;
					margin-right: 24rpx;
				}
			}
			.con {
				line-height: 30rpx;
				font-size: 24rpx;
			}
		}
	}
	.tip {
		width: 100%;
		background: #ffffff;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		border: 2px solid #67be41;
		padding: 30rpx 20rpx;
		font-size: 24rpx;
		margin-bottom: 20rpx;
		.txt1 {
			color: $maiBlack;
			font-size: 28rpx;
		}
		.img1 {
			width: 40rpx;
			height: 36rpx;
			margin-right: 8rpx;
		}
		.img2 {
			width: 32rpx;
			height: 30rpx;
			margin-right: 8rpx;
		}
		.img3 {
			width: 28rpx;
			height: 28rpx;
			margin-right: 8rpx;
		}
	}
}
</style>
