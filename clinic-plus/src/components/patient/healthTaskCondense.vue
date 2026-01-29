<template>
	<view class="health-task-condense-container" @click="handleTaskClick(treatmentId)">
		<!-- 疗程名(病名) -->
		<view class="health-task-condense__treatment-name">疗程: {{treatmentName}}</view>
		<!-- 诊所与医生信息 -->
		<view class="health-task-condense__clinic-info">
			<view class="health-task-condense__clinic">
				<i class="iconfont icon-yiyuan health-task-condense__clinic-icon"></i>
				<view class="health-task-condense__clinic-name">{{clinicName}}</view>
			</view>
			<view class="health-task-condense__doctor">
				<i class="iconfont icon-yisheng  health-task-condense__doctor-icon"></i>
				<view class="health-task-condense__doctor-name">{{doctorName}}</view>
			</view>
		</view>
		<!-- 疗程进度 -->
		<view class="health-task-condense__treatment-progress">
			<view class="health-task-condense__treatment-progress-text">进度 </view>
			<up-line-progress :percentage="progress" activeColor="#7DD6CB"></up-line-progress>
		</view>
		<up-line></up-line>
		<!-- 每日任务单元任务状态 -->
		<view class="health-task-condense__unit-task-status">
			<view class="health-task-condense__unit-task-status-item" v-for="(item , index) in listUnitTaskStatus" :key="index">
				<unit-task-status :task-name="item.taskName" :task-status="item.status"></unit-task-status>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import unitTaskStatus from '@/components/patient/UnitTaskStatus.vue';
	import type { THealthTaskItem } from '@/types/treatment/daily-health-task.types';
	interface IHealthTaskCondenseProps {
		treatmentName:string
		clinicName:string
		doctorName:string
		treatmentId:number
		progress:number
		hasMoreTask:boolean
		listUnitTaskStatus:THealthTaskItem[]
	}
	
	const props = withDefaults(defineProps<IHealthTaskCondenseProps>(), {
	  treatmentName: '',
	  clinicName: '',
	  doctorName: '',
	  treatmentId:-1,
	  progress:-1,
	  hasMoreTask : false,
	  listUnitTaskStatus: () => [],
	})
	
	// 事件, 点击查看疗程任务详情
	const handleTaskClick = (treatmentId: number) => {
	  //emit('task-click', treatmentId)
	  // 直接在此处执行页面跳转
	  //待实现
	  
	}
	
</script>

<style lang="scss">
	.health-task-condense-container{
		background-color: $ba-white-trans;
		box-shadow: 0 3rpx 10rpx $shadow-color;
		width: 450rpx;
		height: 380rpx;
		overflow: hidden;
		border-radius: 15rpx;
		margin-bottom: 10rpx;
	}
	.health-task-condense__treatment-name{
		padding: 10rpx 15rpx;
		color: $text-primary;
		font-size: 30rpx;
		font-weight: 500;
		width: 95%;                /* 或固定宽度 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.health-task-condense__clinic-info{
		padding: 0rpx 15rpx;
		color: $text-regular;
		font-size: 25rpx;
		font-weight: 400;
		width: 95%;                /* 或固定宽度 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.health-task-condense__clinic,
	  .health-task-condense__doctor {
	    display: flex;
	    align-items: center;
	    justify-content: flex-start; 
	  }

	.health-task-condense__clinic-info{
		.iconfont {
		      margin-right: 10rpx;
		      font-size: 30rpx;
		    }
	}
	.health-task-condense__treatment-progress{
		margin-top: 10rpx;
		padding: 0 15rpx;
		
		display: flex;
		align-items: center;
		justify-content: flex-star;
	}
	.health-task-condense__treatment-progress-text{
		color: $text-regular;
		font-size: 25rpx;
		margin-right: 5rpx;
		
		position: relative;
		bottom: 2rpx;
	}
	.health-task-condense__unit-task-status{
		padding-bottom: 10rpx;
	}
	.health-task-condense__unit-task-status-item{
		margin: 10rpx 0;
		padding: 0 15rpx;
	}
</style>