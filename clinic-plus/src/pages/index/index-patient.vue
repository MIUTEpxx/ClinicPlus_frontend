<template>
  <view class="index">
	<view class="top">
		<view class="position">
			<i class="iconfont icon-dizhi"></i>
			<view class="position-info">{{position}}</view>
		</view>
		<view class="search-bar">
			<search-box></search-box>
		</view>
		<view class="today-health-task">
			
		</view>
	</view>
	<view class="body">
		
	</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import searchBox from '@/components/universal-components/search-box.vue'
const position = ref('请开启定位 以获取地址 >')

</script>

<style lang="scss">
.index{
	  /* 确保背景铺满整个页面 */
	  min-height: 100vh;
	  background-color:$bg-color;;
}
.index .top{
	/* 添加渐变色背景 */
	 background: linear-gradient(to bottom, $qingse-light, #FFFFFF);
	 padding: 25rpx;
	 padding-bottom: 50rpx;
}

.position{
	padding-top: 90rpx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.position .iconfont{
	margin-right: 20rpx;
	font-size: 40rpx;
}
.position-info{
	font-size: 30rpx;
}
.top .search-bar{
	margin-top: 25rpx;
}
.today-health-task{
	height: 80rpx;
}
</style>
