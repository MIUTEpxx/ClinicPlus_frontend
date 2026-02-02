<template>
	<view class="find-clinic-item-container" @click="handleFindClinicClick">
		<!-- 封面 -->
		<view class="find-clinic-item__clinic-cover">
			<up-image
			:src="clinicCover"
			mode="scaleToFill"  
			radius="20rpx"
			width="100%"
			height="100%"
			></up-image>
		</view><!-- 封面 -->
			
		
		<!-- 诊所基础信息 -->
		<view class="find-clinic-item__clinic-info">
			<!-- 诊所名 距离 -->
			<view class="find-clinic-item__clinic-info-title">
				<view class="find-clinic-item__clinic-info-name">{{clinicName}}</view>
				<view class="find-clinic-item__clinic-info-distance">{{distance}} m</view>
			</view>
			<!-- 评分 评论数 -->
			<view class="find-clinic-item__clinic-info-rating">
				<view class="find-clinic-item__clinic-info-score">
						<view class="find-clinic-item__clinic-info-rating-value">{{ratingScore}} 
						<view style=" font-size:25rpx;font-weight: 500;margin-left:5rpx;">分</view>
						</view>
						<view class="find-clinic-item__clinic-info-rating-count">{{ratingCount}} 条评价</view>
				</view>
			</view>
			<!-- tag标签 -->
			<view class="find-clinic-item__clinic-info-tag-section">
				<view class="find-clinic-item__clinic-info-tag" v-for="(tag,index) in tagList" :key="index">
					{{tag}}
				</view>
			</view>
			
		</view><!-- 诊所基础信息 -->
		
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const clinicName = ref<string>("xx诊所")
	const distance = ref<number>(114)
	const ratingScore = ref<number>(4.5)
	const ratingCount = ref<number>(114514)
	const tagList = ref<string[]>(["医保定点","入职体检","儿科"])
	const clinicCover = ref<string>("/static/default/img/clinic_cover.png")

	const handleFindClinicClick =()=>{
		uni.navigateTo({
			url: '/pages/clinic/clinic-index',
		})
	}
</script>

<style lang="scss">
.find-clinic-item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.find-clinic-item__clinic-cover {
  width: 165rpx;
  height: 165rpx;
  margin-right: 15rpx;
}

.find-clinic-item__clinic-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.find-clinic-item__clinic-info-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8rpx;
}

.find-clinic-item__clinic-info-name {
  flex: 1;
  font-size: 32rpx;
  font-weight: 600;
  color: $text-primary;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-right: 20rpx;
}

.find-clinic-item__clinic-info-distance {
  color: $text-secondary;
  font-size: 25rpx;
  font-weight: 500;
  white-space: nowrap;
}

.find-clinic-item__clinic-info-rating {
  margin-bottom: 12rpx;
}

.find-clinic-item__clinic-info-score {
  display: flex;
  align-items: center;
}

.find-clinic-item__clinic-info-rating-value {
  font-size: 32rpx;
  color: $pxx_orange_dark;
  font-weight: 600;
  margin-right: 15rpx;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.find-clinic-item__clinic-info-rating-count {
  font-size: 23rpx;
  color: $text-secondary;
}

// .find-clinic-item__clinic-info-rating-count::before {
//   content: "";
//   display: inline-block;
//   width: 2rpx;
//   height: 20rpx;
//   background-color: $border-color;
//   margin: 0 8rpx;
//   vertical-align: middle;
// }

.find-clinic-item__clinic-info-tag-section{
	display: flex;
	
}

.find-clinic-item__clinic-info-tag {
  padding: 4rpx 12rpx;
  background-color: $pxx_gray_light;
  color: $text-regular;
  font-size: 20rpx;
  font-weight: 500;
  border-radius: 4rpx;
  margin-right: 8rpx;
  margin-bottom: 4rpx;
  border: 1rpx solid $pxx_gray_light;
}

.find-clinic-item__clinic-info-tag:last-child {
  margin-right: 0;
}

</style>