<template>
	<!-- 诊所概况及更多信息 -->
	<view class="clinic-index__overview">
		<view class="clinic-index__overview-title">
			诊所概况
		</view>
		<up-read-more
			showHeight = "350rpx"
			toggle="true"
			color="#37A095"
		><rich-text class="clinic-index__overview-content" :nodes="clinicOverview"></rich-text>
		</up-read-more>
		<view class="clinic-index__overview-more-info">
			更多 信息/设施 <up-icon class="iconfont" name="arrow-right"></up-icon>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const clinicId = ref<number>(10086)
	const clinicOverview = ref<string>("邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办邻家好医是一家创办是一家创办邻家好医是一家创办10年的中国连锁医疗集团，2014年起步，历经近10年的深耕，覆盖12座城市开设22家分院，打造中国领先的生殖专科连锁品牌，为客户提供专业的、品质、有温度的医疗服务")
</script>

<style lang="scss">
	.clinic-index__overview{
		  background-color: $bg-white;
		  box-shadow: 0rpx 3rpx  $shadow-color;
		  padding: 15rpx 25rpx;
		  margin-top: 25rpx;
		  
		  &-title{
			  font-size: 35rpx;
			  font-weight: bold;
			  margin-bottom: 10rpx;
			  color: $text-primary;
		  }
		  &-content{
			  color: $text-regular ;
		  }
		  
		  &-more-info{
			  display: flex;
			  align-items: center;
			  justify-content: flex-end;
			  margin: 15rpx 15rpx 5rpx 0;
			  font-size: 30rpx;
			  color: $text-regular;
			  .iconfont{
				  margin-top: 3.6rpx;
				  margin-left: 5rpx;
			  }
		  }
	}
</style>