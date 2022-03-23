<template>
	<view class='content'>
		<view class='top'>
			<view>
				<view>
					<view><image src='https://dongjiaodaojia.oss-cn-chengdu.aliyuncs.com//uploads/20211230/7f5c22d055822ee8fdabca116f354cbf.png'></image></view>
					<view>
						<view>张一山</view>
						<view>普通会员</view>
					</view>
				</view>
				<image src='../../static/images/my/ic-setup.png'></image>
			</view>
			<image></image>
		</view>
		<view class='row-between collection'>
			<view>
				<text>我的收藏</text>
				<text>22</text>
			</view>
			<view>
				<text>优惠券</text>
				<text>6</text>
			</view>
		</view>
		<view class='fun'>
			<view>其他功能</view>
			<view class='row-start'>
				<view>
					<image src='../../static/images/my/pic-kefu.png'></image>
					<text>联系客服</text>
				</view>
				<view>
					<image src='../../static/images/my/pic-diz.png'></image>
					<text>地址管理</text>
				</view>
				<view>
					<image src='../../static/images/my/pic-zhaomu.png'></image>
					<text>技师招募</text>
				</view>
			</view>
		</view>
		<image src='../../static/images/my/pic-share.png'></image>
		<view class='recommend'>
			<view class='row-center'>
				<image src='../../static/images/my/pic-gift.png'></image>
				<text></text>
			</view>
			<view class="list column-center">
				<technician></technician>
			</view>
		</view>
		<tabbar/>
	</view>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../../static/scss/index.scss';
</style>
