<template>
  <view class="clinic-basic-info">
    <view class="clinic-basic-info__top">
      <view class="clinic-basic-info__header">
        <!-- 诊所名称 -->
        <view class="clinic-basic-info__name">
          {{ clinicInfo.name }}
        </view>
        <!-- 诊所标签 -->
        <scroll-view
          class="clinic-basic-info__tags" 
          scroll-x="true" 
          :show-scrollbar="false"
          enable-flex
        >
          <view 
            v-for="(tag, index) in tags" 
            :key="index"
            class="clinic-basic-info__tags-item"
          >
            {{ tag }}
          </view>
        </scroll-view>
      </view>
      <!-- 诊所评分 -->
      <view class="clinic-basic-info__rating">
        {{ rating }} 
        <view class="clinic-basic-info__rating-unit">分</view>
      </view>
    </view>
    
    <!-- 诊所营业时间信息 -->
    <view class="clinic-basic-info__hours">
      营业时间:
      <!-- 一周中营业的天数 -->
      <view class="clinic-basic-info__hours-days">
        {{ openingHours.workDay }}
      </view>
      <!-- 一天中的营业时间 -->
      <view class="clinic-basic-info__hours-time">
        {{ openingHours.workTime }} 
      </view>
      <!-- 午休时间, 如果有的话 -->
      <view 
        class="clinic-basic-info__hours-lunch" 
        v-if="openingHours.hasLunchBreak"
      >
        午休: {{ openingHours.lunchBreak }}
      </view>
    </view>
    
    <!-- 分割线 -->
    <up-line></up-line>
    
    <view class="clinic-basic-info__location">
      <!-- 诊所位置信息 -->
      <view class="clinic-basic-info__location-info">
        <view class="clinic-basic-info__location-distance">
          步行 {{ location.distance }}m {{ location.timeTaken }}
        </view>
        <view class="clinic-basic-info__location-address">
          {{ location.address }}
        </view>
      </view>
      <!-- 导航按钮 -->
      <view class="clinic-basic-info__location-btn">
        <i class="iconfont icon-dizhi"></i>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  clinicInfo: {
    name: string
  }
  tags: string[]
  rating: number
  openingHours: {
    workDay: string
    workTime: string
    lunchBreak: string
    hasLunchBreak: boolean
  }
  location: {
    distance: number
    timeTaken: string
    address: string
  }
}>()
</script>

<style lang="scss" scoped>
.clinic-basic-info {
  // position: relative;
  // top: -60rpx;
  margin-top: -60rpx;
  padding: 15rpx 25rpx;
  background-color: $bg-white;
  border-radius: 25rpx 25rpx 0 0;
  box-shadow: 0rpx 3rpx  $shadow-color;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  &__header {
    flex: 1;
    min-width: 0;
  }
  
  &__name {
    font-size: 45rpx;
    font-weight: bold;
    color: $text-primary;
  }
  
  &__tags {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 15rpx;
    overflow: hidden;
    
    &-item {
      display: inline-block;
      flex: 0 0 auto;
      border-radius: 10rpx;
      overflow: hidden;
      padding: 5rpx 10rpx;
      margin-right: 15rpx;
      color: $text-primary;
      background-color: $pxx_gray_light;
      min-height: 0;
      height: 40rpx;
    }
  }
  
  &__rating {
    flex-shrink: 0;
    font-size: 55rpx;
    font-weight: bold;
    color: $pxx_orange_dark;
    padding: 15rpx 0 25rpx 0;
    margin-left: 50rpx;
    display: flex;
    align-items: center;
    
    &-unit {
      font-weight: normal;
      font-size: 40rpx;
      margin-left: 10rpx;
    }
  }
  
  &__hours {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    font-size: 25rpx;
    color: $text-primary;
    margin-bottom: 15rpx;
    
    &-days,
    &-time,
    &-lunch {
      font-weight: normal;
      margin-left: 5rpx;
    }
    
    &-lunch {
      margin-left: 25rpx;
    }
  }
  
  &__location {
    display: flex;
    margin-top: 25rpx;
    
    &-info {
      flex: 1;
      min-width: 0;
    }
    
    &-distance {
      font-size: 30rpx;
      font-weight: bold;
      color: $text-primary;
    }
    
    &-address {
      font-size: 25rpx;
      color: $text-regular;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    &-btn {
      width: 80rpx;
      height: 80rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $pxx_gray_light_light;
      border-radius: 50rpx;
      margin-left: 25rpx;
      
      .iconfont {
        font-size: 55rpx;
        color: $primary-color;
      }
    }
  }
}
</style>