<template>
  <view class="daily-health-task-container">
    <!-- 头部 -->
    <view class="daily-health-task__header">
		<!-- 标题 -->
      <view class="daily-health-task__header-content">
        <view class="daily-health-task__title">今日健康任务</view>
        <view class="daily-health-task__date">{{ currentDate }}</view>
      </view><!-- 标题 -->
	  
	  <!-- 查看更多任务 -->
      <view 
        class="daily-health-task__more-task"
        @click="handleViewMore"
      >
        <up-badge :is-dot="true" :show="hasTasks"></up-badge>
        <view class="daily-health-task__more-task-text">更多任务</view>
        <up-icon name="arrow-right"></up-icon>
      </view><!-- 查看更多任务 -->
	  
    </view>

    <!-- 任务列表 -->
    <up-scroll-list 
      class="daily-health-task__body"
      indicator-active-color="#37A095"
    >
      <view 
        v-for="(treatmentTask, index) in treatmentList" 
        :key="treatmentTask.treatmentId || index"
        class="daily-health-task__item"
      >
        <health-task-condense 
          :treatmentName="treatmentTask.treatmentName"
          :clinic-name="treatmentTask.clinicName"
          :doctor-name="treatmentTask.doctorName"
		  :treatmentId="treatmentTask.treatmentId"
          :progress="treatmentTask.progress"
		  :hasMoreTask="treatmentTask.has_more_task"
		  :listUnitTaskStatus="treatmentTask.healthTasks"
        />
      </view>
    </up-scroll-list>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HealthTaskCondense from '@/components/patient/HealthTaskCondense.vue'
import type { TTreatmentInfo,THealthTaskItem} from '@/types/treatment/daily-health-task.types'

interface IDailyHealthTaskProps {
  // 疗程列表数据
  treatmentList: TTreatmentInfo[]
  // 当前日期
  currentDate: string
  // 当日是否有更多疗程任务
  hasMoreTask : boolean
}

// Props 定义
const props = withDefaults(defineProps<IDailyHealthTaskProps>(), {
  treatmentList: () => [],
  currentDate: '',
  hasMoreTask : false
})


// 当日是否有更多疗程任务
const hasTasks = computed(() => props.treatmentList.length > 0)

// 事件: 查看更多今日任务
const handleViewMore = () => {
  //emit('view-more')
  // 直接在此处执行页面跳转
  //待实现
  
}


</script>

<style lang="scss" scoped>
/* 块：daily-health-task */
.daily-health-task-container {
 margin: 20rpx 0;
}

/* 块：daily-health-task 的头部元素 */
.daily-health-task__header {
  margin-bottom: 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

/* 块：daily-health-task 的头部内容元素 */
.daily-health-task__header-content {
  display: flex;
  align-items: flex-end;
  gap: 20rpx;
}

/* 块：daily-health-task 的标题元素 */
.daily-health-task__title {
  padding-left: 10rpx;
  font-size: 34rpx;
  font-weight: 600;
  color: $text-primary;
}

/* 块：daily-health-task 的日期元素 */
.daily-health-task__date {
  font-size: 22rpx;
  font-weight: 500;
  color: $text-regular;
}

.daily-health-task__more-task{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.daily-health-task__more-task-text{
	margin: 0 5rpx;
	position: relative;
	bottom:2.5rpx;
	color: $text-regular;
	font-weight: 500;
}
.daily-health-task__item{
	margin-right:20rpx;
}
</style>