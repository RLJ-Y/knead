<template>
	
	<u-popup mode="bottom" v-model="showAppoint">
		<view class="popup">
			<view class="row-between-a introduce">
				<view class="imgbox"><image src="https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png"></image></view>
				<view class="right ">
					<view class="info row-between">
						<view class='name'>
							<text class='txt1'>杨蕾</text>
							<text class='txt2 green'>从业时间：5年</text>
						</view>
						<view class='orange num'>4.9分</view>
					</view>
					<view class="con">从事按摩理疗五年，性格开朗大方，温柔可人</view>
					<view class="tip row-between">
						<view class="row-start">
							<image src="@/static/images/therapist/ic-people.png" class="img1" />
							实名认证
						</view>
						<view class="row-start">
							<image src="@/static/images/therapist/ic-pei.png" class="img2" />
							爽约包赔
						</view>
						<view class="row-start">
							<image src="@/static/images/therapist/ic-zs.png" class="img3" />
							资质证书
						</view>
					</view>
				</view>
			</view>
			
			<view class="list">
				<scroll-view scroll-y="true" class='scroll' >
					<Item></Item>
					<Item></Item>
					<Item></Item>
					<Item></Item>
					<Item></Item>
					<Item></Item>
				</scroll-view>
			</view>
			
			<!-- 底部 -->
			<view class="footer row-between">
				<view class="price-content">
					<text class='txt1'>合计：</text>
					<text class="price orange ">￥</text>
					<text class="price orange weight">475</text>
				</view>
				<text class="submit" >提交订单</text>
			</view>
			
		</view>
	</u-popup>
</template>

<script>
// ok
import Item from './item.vue';
export default {
	
	data() {
		return {
			show: false,
			count:5,
			value:3,
			showAppoint:false
		};
	},
	components: {
		Item
	},
	mounted() {
		this.$bus.$on('openRate', () => {
			this.show = true
		});
		this.$bus.$on('openAppoint', () => {
			this.showAppoint = true
		});
	},
	beforeDestroy() {
		this.$bus.$off('openRate');
		this.$bus.$off('openAppoint');
	}
};
</script>

<style lang="scss" scoped>
@import '@/static/scss/index.scss';
.popup {
	color: $gray;
	padding: 20rpx;
	background: #F6F6F6 ;
	.list {
		width: 100%;
	
		overflow: hidden;
		.scroll{
			max-height: 560rpx;
		}
	}
	.footer {
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px 0px 8rpx 0px rgba(218, 218, 218, 0.5);
		border-radius: 12rpx;
		padding:0 20rpx;
		height: 140rpx;
		.txt1 {
			font-size: 28rpx;
		}
		.price {
			font-size: 40rpx;	
		}
		.submit {
			width: 240rpx;
			height: 80rpx;
			line-height:  80rpx;
			background: $greenColor;
			border-radius: 12rpx;
			text-align: center;
			color: #fff;
			font-size: 36rpx;
			font-weight: bold;
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
			.info{
				font-size: 28rpx;		
				.name {
					color: $maiBlack;
					margin-bottom: 15rpx;
					.txt1 {
						font-size: 32rpx;
						font-weight: bold;
						margin-right: 20rpx;
					}
				}
			}
			
			.con {
				line-height: 30rpx;
				font-size: 24rpx;
				margin-bottom: 18rpx
			}
			
			.tip {
				width: 100%;
				font-size: 24rpx;
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
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
			}
		}
	}
	
}
</style>
