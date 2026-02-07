<template>
	<!-- 诊所页评论区 -->
	<view class="clinic-comment-section">
		<view class="clinic-comment-section__title">
			评价 ({{commentCount}})
		</view>
		<!-- 评论排序按钮 -->
		<up-choose 
		class="clinic-comment-section__sort"
		v-model="value" 
		:options="sortType"
		:wrap="false"
		>
		 <template v-slot="slotProps" >
		    <view @click="onCustomClick(slotProps.item.id)" class="clinic-comment-section__sort-item" v-if="slotProps.index != value" >
		      <text>{{ slotProps.item.title }}</text>
		    </view>
			<view @click="onCustomClick(slotProps.item.id)" class="clinic-comment-section__sort-item-selected" v-else>
			  <text>{{ slotProps.item.title }}</text>
			</view>
		</template>
		</up-choose>
		
		<view class="clinic-comment-section__comment">
			<view class="clinic-comment-section__comment-item" v-for="(item, index) in 6" :key="index">
				<CommentItem/>
			</view>
		</view>
	</view>
	
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import CommentItem from '@/components/universal/CommentItem.vue'
	
	const commentCount = ref<number>(79)
	const value = ref(0) // 当前选中的医生类别
	const sortType = ref<any[]>([
		{id: 0, title: '最新'},
		{id: 1, title: '高赞'},
		{id: 2, title: '高分'},
		{id: 3, title: '低分'},
	])
	
	// 医生类别标签选项点击事件
	const onCustomClick =(index:number)=>{
		 console.log('自定义点击事件2，选中索引：', index)
		value.value=index
	}
</script>

<style lang="scss">
	.clinic-comment-section{
		background-color: $bg-white;
		box-shadow: 0rpx 3rpx  $shadow-color;
		padding: 15rpx 25rpx;
		margin-top: 25rpx;
		// 医生类别标签
		&__sort {
		  margin-top: 15rpx;
		  &-item{
			border-radius: 10rpx;
			overflow: hidden;
			padding: 5rpx 15rpx;
			margin-right: 15rpx;
			color: $text-primary;
			background-color: $pxx_gray_light;
		  }
		  // 选中的标签选项
		  &-item-selected{
			border-radius: 10rpx;
			overflow: hidden;
			padding: 2rpx 12rpx;
			margin-right: 15rpx;
			color: $pxx_orange_dark;
			background-color: $pxx_orange-light-light;
			border-style:solid;
			border-width:2px;
			border-color: $pxx_orange_dark;
		  }
		}
		&__comment{
			margin-top: 15rpx;
			
			&-item{
				margin-bottom: 66rpx;
			}
		}
	}
</style>