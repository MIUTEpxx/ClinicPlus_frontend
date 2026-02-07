<template>
	<view class="clinic-doctor-list">
		<view class="clinic-doctor-list__title">
			医生团队
			<view class="clinic-doctor-list__title-number">
				({{doctorNumber}})
			</view>
		</view>
		<!-- 医生类别 -->
		<up-choose 
		class="clinic-doctor-list__tags"
		v-model="value" 
		:options="doctorTags"
		:wrap="false"
		>
		 <template v-slot="slotProps" >
		    <view @click="onCustomClick(slotProps.item.id)" class="clinic-doctor-list__tags-item" v-if="slotProps.index != value" >
		      <text>{{ slotProps.item.title }}</text>
		    </view>
			<view @click="onCustomClick(slotProps.item.id)" class="clinic-doctor-list__tags-item-selected" v-else>
			  <text>{{ slotProps.item.title }}</text>
			</view>
		</template>
		</up-choose>
		<view class="clinic-doctor-list__body">
			<view class="clinic-doctor-list__body-items" v-for="(index) in 3" :key="index" >
				<DoctorItem/>
			</view>			
		</view>
		<view class="clinic-doctor-list__more-doctor">
			查看全部医生 
			<up-icon class="iconfont" name="arrow-right" size="34rpx"></up-icon>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import DoctorItem from '@/components/clinic/DoctorItem.vue'
	
	const doctorNumber = ref<number>(20)
	const value = ref(0) // 当前选中的医生类别
	const doctorTags = ref<any[]>([
		{id: 0, title: '全部'},
		{id: 1, title: '儿科'},
		{id: 2, title: '妇科'},
		{id: 3, title: '男科'},
		{id: 4, title: '发热'},
		{id: 5, title: '牙科'},
		{id: 6, title: '中医'},
	])
	
	// 医生类别标签选项点击事件
	const onCustomClick =(index:number)=>{
		 console.log('自定义点击事件，选中索引：', index)
		value.value=index
	}
</script>

<style lang="scss">
	.clinic-doctor-list{
		background-color: $bg-white;
		box-shadow: 0rpx 3rpx  $shadow-color;
		padding: 15rpx 25rpx;
		margin-top: 25rpx;
		
		&__title{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: 35rpx;
			font-weight: bold;
			
			&-number{
				font-size: 30rpx;
				font-weight: normal;
				margin-left: 10rpx;
			}
		}
		// 医生类别标签
		&__tags {
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
		
		&__body{
			height: 1200rpx;
			overflow: hidden;
			&-items{
				margin-top: 50rpx;
				display: block;
			}
		}
		
		&__more-doctor{
			display: flex;
			align-items: flex-start;;
			justify-content: center;
			font-size: 35rpx;
			
			.iconfont{
				margin-left: 5rpx;
				margin-top: 12rpx;
			}
		}
	}
</style>