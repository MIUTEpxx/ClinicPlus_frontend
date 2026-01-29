<template>
	<view class="post-push-section-container">
		<view class="post-push-section__title">热门帖子</view>
		<up-line></up-line>
		<view class="find-clinic-section_items"
		v-for="(postItem,index) in postList" 
		:key="index">
			<post-item-list></post-item-list>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import PostItemList from '@/components/community/PostItemList.vue'
	import type { TPostBasicInfo } from '@/types/community/post.type';
	
	const postList = ref<TPostBasicInfo[]>([
		{
			postId:1,
			postCategory:1,
			postCoverUrl:"123",
			postTitle:"test",
			likeCount:123,
			commentCount:123,
			userAvatarUrl:"123",
			userId:123,
			userName:"123"
		},
		{
			postId:1,
			postCategory:1,
			postCoverUrl:"123",
			postTitle:"test",
			likeCount:123,
			commentCount:123,
			userAvatarUrl:"123",
			userId:123,
			userName:"123"
		},
		{
			postId:1,
			postCategory:1,
			postCoverUrl:"123",
			postTitle:"test",
			likeCount:123,
			commentCount:123,
			userAvatarUrl:"123",
			userId:123,
			userName:"123"
		},
	])
	
	
</script>

<style lang="scss">
	.post-push-section-container{
		
		// padding: 0 25rpx;
		// padding-bottom: 15rpx;
	}
	.post-push-section__title{
		background-color:$bg-white ;
		padding: 15rpx 25rpx;
		color: $text-primary;
		font-size: 32rpx;
		font-weight: 600;
	}
	.find-clinic-section_items{
		margin: 15rpx 0;
	}
</style>