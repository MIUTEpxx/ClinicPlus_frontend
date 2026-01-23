<template>
	<view class="unit-task-status-container">
		<view class="unit-task-status__task-name">{{props.taskName}}</view>
		<view 
		class="unit-task-status__task-status" 
		:class="`status${props.taskStatus}`"
		>{{ statusText }}</view>
	</view>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	
	// 定义 Props 类型
	/* 单元任务状态组件 Props */
	type TUnitTaskStatusProps = {
		// 任务名称
		taskName: string
		// 任务状态：0-待完成 1-已完成 2-未开始 3-已逾期
		taskStatus: number
	}
	
	// 定义 Props（使用 withDefaults 设置默认值）
	const props = withDefaults(defineProps<TUnitTaskStatusProps>(), {
		taskName: '任务名称',
		taskStatus: 0
	})
	
	// 计算状态文本
	const statusText = computed(() => {
		const statusMap = {
			0: '待完成',
			1: '已完成', 
			2: '未开始',
			3: '已逾期'
		}
		return statusMap[props.taskStatus] || '未知状态'
	})
</script>

<style lang="scss">
	.unit-task-status-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.unit-task-status__task-name{
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: $text-primary;
		font-weight: 500;
	}
	.unit-task-status__task-status{
		border-radius: 15rpx;
		padding: 3rpx 10rpx;
		font-weight: 500;
		box-shadow: 0 2rpx 3rpx $shadow-color;
		white-space: nowrap;
		// 状态样式
		&.status0 { 
			/* 待完成 */ 
			background-color:$pxx_orange-light-light ;
			color: $pxx_orange_dark;
		}
		&.status1 {
			/* 已完成 */ 
			background-color:$pxx_green-light-light ;
			color: $pxx_green;
		}
		&.status2 {
			/* 未开始 */ 
			background-color:$pxx_gray_light ;
			color: $pxx_gray;
			} 
		&.status3 {
			/* 已逾期 */ 
			background-color:$pxx_red-light-light ;
			color: $pxx_red;
			}
	}
</style>