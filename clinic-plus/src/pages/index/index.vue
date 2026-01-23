<template>
  <view class="index-patient">
		
		<view class="index-patient__top-bg"> <!-- 页面顶部区块 -->
		
			
			<view class="index-patient__top-section"> <!-- 最顶部部分 -->
			  <!-- 当前位置信息 -->
			  <view class="index-patient__location">
				<i class="iconfont icon-dizhi index-patient__location-icon"></i>
				<view class="index-patient__location-info">{{ position }}</view>
			  </view>
			  <!-- 顶部搜索框 -->
			  <view class="index-patient__search-section">
				<search-box></search-box>
			  </view>
			</view> <!-- 最顶部部分 -->
			
			<!-- 今日健康任务 板块 -->
			<daily-health-task
			:treatment-list="treatmentList"
			:current-date="currentDate"
			:hasMoreTasks="hasMoreTasks"
			@view-more="handleViewMore"
			@task-click="handleTaskClick"
			>
			</daily-health-task>
			
		
			<!-- 页面中间内容 发现诊所板块 -->
			<view class="index-patient__find-clinic">
			  <!-- ... -->
			</view>
		</view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TTreatmentInfo} from '@/types/treatment/daily-health-task.types'

import searchBox from '@/components/universal/SearchBox.vue'
// import healthTaskCondense from '@/components/patient/HealthTaskCondense.vue'
import dailyHealthTask from '@/components/patient/DailyHealthTask.vue'

const position = ref<string>('点击选择地址 >') // 当前地址信息
// const current_date = ref<string>('2026.01.19') // 当前日期
// const has_more_task = ref<boolean>(true)

// 疗程列表数据
const treatmentList = ref<TTreatmentInfo[]>([])
const loading = ref<boolean>(false)
const hasMoreTasks = ref<boolean>(true)
const currentDate = ref<string>('2026.01.19')

// 生命周期 - 组件挂载时加载数据
onMounted(() => {
  loadTreatmentData()
})
const loadTreatmentData = async (): Promise<void> => {
  // 将对象包装在数组中
  treatmentList.value = [
    {
      treatmentId: 1,
      treatmentName: '术后康复训练',
      clinicId: 101,
      clinicName: '杭州康复中心',
      doctorId: 1001,
      doctorName: '张医生',
      totalDays: 30,
      completedDays: 10,
      progress: 33,
      healthTasks: [
        {
          taskId: 101,
          taskName: '晨间拉伸运动',
          status: 1, // COMPLETED
          sortOrder: 1,
          startTime: '2026-01-19 08:00:00',
          deadline: '2026-01-19 09:00:00'
        },
        {
          taskId: 102,
          taskName: '药物服用',
          status: 0, // PENDING
          sortOrder: 2,
          startTime: '2026-01-19 12:00:00',
          deadline: '2026-01-19 13:00:00'
        },
        {
          taskId: 103,
          taskName: '晚间康复训练',
          status: 2, // NOT_STARTED
          sortOrder: 3,
          startTime: '2026-01-19 19:00:00',
          deadline: '2026-01-19 20:00:00'
        }
      ],
      startTime: '2026-01-10 00:00:00',
      endTime: '2026-02-10 00:00:00',
      status: 0, // 进行中
      has_more_task: true  // 添加缺失的字段
    },
    {
      treatmentId: 2,
      treatmentName: '慢性病管理',
      clinicId: 102,
      clinicName: '杭州市第一人民医院',
      doctorId: 1002,
      doctorName: '李医生',
      totalDays: 90,
      completedDays: 45,
      progress: 50,
      healthTasks: [
        {
          taskId: 201,
          taskName: '血压监测',
          status: 0, // PENDING
          sortOrder: 1,
          startTime: '2026-01-19 07:00:00',
          deadline: '2026-01-19 08:00:00'
        },
        {
          taskId: 202,
          taskName: '药物服用',
          status: 1, // COMPLETED
          sortOrder: 2
        }
      ],
      startTime: '2025-12-01 00:00:00',
      endTime: '2026-02-28 00:00:00',
      status: 0,
      has_more_task: false  // 添加缺失的字段
    }
  ]; 
  
  hasMoreTasks.value = treatmentList.value.length > 3; 
  
  console.log(treatmentList.value[0].progress)
}

// 事件处理
const handleViewMore = () => {
  console.log('查看更多任务')
  // 跳转到今日任务列表页面
}

const handleTaskClick = (TreatmentTask: any) => {
  console.log('点击任务:', TreatmentTask)
  // 跳转到疗程任务详情页面
}
  


</script>

<style lang="scss">
/* 块：index-patient */
.index-patient {
  /* 确保背景铺满整个页面 */
  min-height: 100vh;
  background-color: $bg-color;
}

/* 块：index-patient 的顶部区域元素 */
.index-patient__top-bg{
	/* 添加渐变色背景 */
	background: linear-gradient(to bottom, $qingse-light, $bg-white);
	padding: 10rpx 25rpx 1rpx 25rpx;

}
.index-patient__top-section {

}

/* 块：index-patient 的位置元素 */
.index-patient__location {
  padding-top: 90rpx;
  margin-left: 10rpx;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

/* 块：index-patient 的位置图标元素 */
.index-patient__location-icon {
  margin-right: 10rpx;
  font-size: 45rpx;
  color: $primary-dark;
}

/* 块：index-patient 的位置信息文本元素 */
.index-patient__location-info {
  font-size: 30rpx;
  color: $text-primary;
}

/* 块：index-patient 的搜索区域元素 */
.index-patient__search-section {
  margin-top: 25rpx;
}


/* 块：daily-health-task 的主体元素 */
.daily-health-task__body {
  // display: flex;
  // align-items: center;
  // justify-content: flex-start;
  //gap: 20rpx;
}
</style>