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
		padding:10rpx 35rpx 12rpx 35rpx;
		border-radius:50rpx;
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
		background-color: #ffffff;
		border-radius: 50rpx;
		padding: 5rpx 10rpx;
		width: 100%;
	}
</style>