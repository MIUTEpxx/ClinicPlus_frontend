<template>
	<view class="location-container">
		<i class="iconfont icon-dizhi location__icon"></i>
		<view class="location__info">{{ position }}</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	const position = ref<string>('点击选择地址 >') // 当前地址信息
</script>

<style lang="scss">
	.location-container{
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
	}
	/* 块：index-patient 的位置图标元素 */
	.location__icon {
	  margin-right: 10rpx;
	  font-size: 45rpx;
	  color: $primary-dark;
	}
	
	/* 块：index-patient 的位置信息文本元素 */
	.location__info {
	  font-size: 30rpx;
	  color: $text-primary;
	}
	
</style>