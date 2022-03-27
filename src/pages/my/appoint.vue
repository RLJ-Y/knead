<template>
	<view class='content'>
		<image src='/static/images/my/appoint-top.png' class='top-bg'></image>
		<view class='main column-center-c'>
			<view class='title'>加入我们</view>
			<view class='row row-between'>
				<text class='lf'>姓名</text>
				<view class='rt'>
					<input class="input" type="text"  placeholder="请输入姓名" placeholder-class="placeholder" />
				</view>
			</view>
			<view class='row row-between'>
				<text class='lf'>性别</text>
				<view class='rt'>
					<u-radio-group  @change="radioGroupChange"   size='40' icon-size='40'>
						<u-radio active-color="#67be41" shape="circle" v-for="(item, index) in radioList" :key="index" :name="item.name" class="radio">
							<text class="input">{{ item.name }}</text>
						</u-radio>
					</u-radio-group>
				</view>
			</view>
			<view class='row row-between'>
				<text class='lf'>手机号码</text>
				<view class='rt'>
					<input class="input" type="text"  placeholder="请输入联系方式" placeholder-class="placeholder" />
				</view>
			</view>
			<view class='row row-between'>
				<text class='lf'>年龄</text>
				<view class='rt'>
					<input class="input" type="text"  placeholder="请输入年龄" placeholder-class="placeholder" />
				</view>
			</view>
			<view class='row row-between'>
				<text class='lf'>意向合作城市</text>
				<view class='rt'>
					<view class="input row-start" @click='show=true'>
						<text>杭州市</text>
					<u-icon name="arrow-right" color="#111111" size="36"
							class="mgl15"></u-icon>
					</view>
				</view>
			</view>
			<view class='upload row-between-a'>
				<view class='column-center-a'>
					<text class='txt1'>请上传本人近期照</text>
					<text class='txt2'>图片不得超过2M</text>
				</view>
				
				<u-upload width="200" height="200" class='image' max-count='1' :custom-btn='true'>
					<!-- <image src='/static/images/my/upload.png' class='image'></image> -->

							 <image src='/static/images/my/upload.png' class='image' slot="addBtn"></image>
				
				</u-upload>
			</view>
			<view class='btn'>提交</view>
		</view>
		<u-picker mode="selector" v-model="show" :default-selector="[0]" :range="citys"></u-picker>
	</view>
</template>

<script>
//ok
export default {
	onLoad: function (options) {
		console.log('start pulldown');

			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
	data() {
		return {
			value: '',
			type: 'textarea',
			border: true,
			height: 200,
			autoHeight: true,
			show: false,
			citys: ['中国', '美国', '日本'],
			radioList: [
				{
					name: '男',
					checked: true,
					disabled: false
				},
				{
					name: '女',
					checked: false,
					disabled: false
				}
			]
		};
	}
};
</script>


<style lang="scss" scoped>
	@import '@/static/scss/index.scss';

	.content {
		background-color: #6FCF44;
	}

	.top-bg {
		width: 100%;
		height: 534rpx;
		display: block;
	}

	.main {
		width: 750rpx;
		height: 1186rpx;
		background: url(../../static/images/my/apponit.png);
		background-size: 100% 100%;
		position: relative;
		top: -20px;
		.upload{
			width: 630rpx;
			padding:30rpx;
			background: rgba(89, 177, 50, 0.1);
			border-radius: 16rpx;
			margin-bottom: 40rpx;
			.txt1{
				font-size:32rpx;
				font-weight: bold;
				margin-bottom: 16rpx;
			}
			.txt2{
				color:$gray;
				font-size:28rpx;
			}
			.image{
				width:200rpx;
				height:200rpx
			}
		}
		.title{
			font-size:40rpx;
			color:#fff;
			line-height: 68rpx;
			margin-bottom: 50rpx;
			letter-spacing: 2px;
		}
		.btn{
			width: 630rpx;
			height: 90rpx;
			line-height: 90rpx;
			background: linear-gradient(180deg, #FFD944 0%, #FF7800 100%);
			border-radius: 45rpx;
			font-size: 36rpx;
			color:#fff;
			text-align: center;
			font-weight: bold;
		}
		.row{
			width: 630rpx;
			padding:20rpx 30rpx;
			line-height:40rpx;
			border-radius: 16rpx;
			border: 3rpx solid $greenColor;
			margin-bottom: 20rpx;
			.lf{
				font-size:32rpx;
				color:$gray;
				width:250rpx;
			}
			.rt{
				display: flex;
				flex:1;
				justify-content: flex-end;
				.input{
					text-align: right;
					font-size:32rpx;
					font-weight: bold;
				}
			}
			
		}
		.placeholder{
			font-size:32rpx;
			color:$maiBlack;
			font-weight: bold;
		}
	}
</style>
