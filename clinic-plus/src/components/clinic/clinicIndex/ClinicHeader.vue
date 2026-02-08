<template>
  <view class="clinic-header">
    <view class="clinic-header__title-container">
      <!-- 返回上一级或主页的按钮 -->
      <up-navbar-mini
        class="clinic-header__nav-back"
        :fixed="false"
        :safeAreaInsetTop="false"
        bgColor="rgba(255, 255, 255, 0.2)"
        homeUrl="/pages/index/index"
      >
        <template #left>
          <up-icon name="arrow-left" size="19"></up-icon>
        </template>
      </up-navbar-mini>
      <view class="clinic-header__title-text">{{ title }}</view>
    </view>
    
    <!-- 诊所图集 -->
    <scroll-view 
      class="clinic-header__images" 
      scroll-x="true" 
      :show-scrollbar="false"
      enable-flex
    >
      <view 
        v-for="(image, index) in imageList" 
        :key="index"
        class="clinic-header__images-item"
      >
        <up-image
          :src="image"
          mode="aspectFill"
          radius="20rpx"
          width="100%"
          height="100%"
        ></up-image>
      </view>
    </scroll-view>
    
    <!-- 查看所有图片按钮 -->
    <view class="clinic-header__images-more">
      图片 ( {{ imageCount }} )
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  imageList: string[]
  imageCount: number
}>()
</script>

<style lang="scss" scoped>
.clinic-header {
  background-color: $primary-color;
  padding: 100rpx 0 80rpx 0;
  
  &__title-container {
    display: flex;
    align-items: center;
    margin: 0 25rpx;
    margin-bottom: 20rpx;
  }
  
  &__title-text {
    font-size: 40rpx;
    font-weight: bold;
    color: #ffffff;
    margin-left: 15rpx;
  }
  
  &__images {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    width: 100vw;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
	margin-top: 30rpx;
    padding-left: 25rpx;
    
    &-item {
      display: inline-block;
      flex: 0 0 auto;
      width: 240rpx;
      height: 240rpx;
      border-radius: 20rpx;
      overflow: hidden;
      box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
      margin-right: 25rpx;
    }
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
  
  &__images-more {
    position: absolute;
    right: 20rpx;
    top: 405rpx;
    padding: 5rpx 10rpx;
    background-color: $ba-dark-trans;
    border-radius: 10rpx;
    color: $pxx_gray_light;
  }
}
</style>