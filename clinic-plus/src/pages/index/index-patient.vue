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
			
			
			<view class="daily-health-task"> <!-- 健康任务区块 -->
				
			  <view class="daily-health-task__header">
					<view class="daily-health-task__header-content">
					  <view class="daily-health-task__title">今日健康任务</view>
					  <view class="daily-health-task__date">{{ current_date }}</view>
					</view> 
					<view class="daily-health-task__more-task">
						<up-badge :isDot="true"  :show="has_more_task"></up-badge>
						<view class="daily-health-task__more-task-text">更多任务</view>
						<up-icon name="arrow-right"></up-icon>
					</view>
			  </view> <!-- daily-health-task__header -->
			  
			  <up-scroll-list 
			  class="daily-health-task__body"
			  indicatorActiveColor  = "#37A095 "
			  >
				   <view class="daily-health-task__item" v-for="(item, index) in listTreatmentInfo" :key="index">
				       <health-task-condense></health-task-condense>  <!-- 需要传入疗程信息 -->
				   </view>
			  </up-scroll-list>
			  
			</view> <!-- 健康任务区块 -->
			
		</view> <!-- 页面顶部区块 -->
		
		<!-- 页面中间内容 发现诊所板块 -->
		<view class="index-patient__find-clinic">
		  <!-- ... -->
		</view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import searchBox from '@/components/universal/SearchBox.vue'
import healthTaskCondense from '@/components/patient/HealthTaskCondense.vue'

const position = ref<string>('点击选择地址 >') // 当前地址信息
const current_date = ref<string>('2026.01.19') // 当前日期
const has_more_task = ref<boolean>(true)

const listTreatmentInfo = ref([  // 测试用的模拟数据 后续将会从后端请求疗程数据
    {  
        test: "1"  
    },  
	{
	    test: "1"  
	}, 
	{
	    test: "1"  
	}, 
	{
	    test: "1"  
	}, 
]);  


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

/* 块：daily-health-task */
.daily-health-task {
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
/* 块：daily-health-task 的主体元素 */
.daily-health-task__body {
  // display: flex;
  // align-items: center;
  // justify-content: flex-start;
  //gap: 20rpx;
}
</style>