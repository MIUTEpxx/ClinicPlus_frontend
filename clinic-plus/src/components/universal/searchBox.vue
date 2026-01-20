<template>
	<view class="search-box-container">
		<up-search 
		placeholder="搜索诊所 帖子 用户" 
		:clearabled="true"
		bgColor = "#ffffff"
		height="65rpx"
		searchIconSize="60rpx"
		actionStyle="
		color:#ffffff;
		font-size:30rpx;
		font-weight:400;
		background:#49B9AD;
		padding:10rpx 15rpx 12rpx 15rpx;
		border-radius:20rpx;
		margin-left:15rpx
		"
		inputStyle="
		font-size:30 rpx
		"
		v-model="keyword" 
		></up-search>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	let keyword = ref<string>("")
	keyword.value = "test";
</script>

<style lang="scss">
	.search-box-container{
		
	}
</style>