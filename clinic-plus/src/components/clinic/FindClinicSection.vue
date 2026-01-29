<template>
	<view class="find-clinic-section-container">
		<view class="find-clinic-section__title">找诊所</view>
		<up-line></up-line>
		<view class="find-clinic-section_items" 
		v-for="(clinicItem,index) in findClinicItemList" 
		:key="index">
			<find-clinic-item></find-clinic-item>
		</view>
		<!-- 查找更多诊所的按钮 -->
		<view class="find-clinic-section_button">
			<up-button 
			type="primary" 
			color="#7DD6CB"
			custom-style="
				font-size: 35rpx;
			"
			@click="handleFindClinicClick"
			>
			查找更多诊所
			</up-button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import type { TClinicBasicInfo } from '@/types/clinic/clinic.types'
	
	// 引入组件
	import findClinicItem from '@/components/clinic/FindClinicItem.vue';
	
	const findClinicItemList = ref<TClinicBasicInfo[]>([
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				tagName:"医保定点",
				},
				{
				tagId:2,
				tagName:"儿科",
				},
			]
		},
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				tagName:"医保定点",
				},
				{
				tagId:2,
				tagName:"儿科",
				},
			]
		},
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				tagName:"医保定点",
				},
				{
				tagId:2,
				tagName:"儿科",
				},
			]
		},
	])
	
	// 事件, 点击j进入找诊所页面
	const handleFindClinicClick = () => {
	  // 直接在此处执行页面跳转
	  //待实现
	  uni.navigateTo({
	  		url: '/pages/clinic/find-clinic',
	  	})
	}
	
</script>

<style lang="scss" scoped>
	.find-clinic-section-container{
		background-color:$bg-white ;
		padding: 0 25rpx;
		padding-bottom: 15rpx;
	}
	.find-clinic-section__title{
		padding: 15rpx 0;
		
		color: $text-primary;
		font-size: 32rpx;
		font-weight: 600;
	}
	.find-clinic-section_items{
		margin: 20rpx 0;
	}
	.find-clinic-section_button{
		margin: 15rpx 20rpx;
	}
</style>