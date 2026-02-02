<template>
  <view class="find-clinic">
    
    
    <up-sticky
		offsetTop = "-150rpx"
	>
	<view class="find-clinic__header">
	  <view class="find-clinic__title">
	    <up-navbar-mini
	      class="find-clinic__back"
	      :fixed="false"
	      :safeAreaInsetTop="false"
	      bgColor="rgba(255, 255, 255, 0.2)"
	      homeUrl="/pages/index/index"
	    >
	      <template #left>
	        <up-icon name="arrow-left" size="19"></up-icon>
	      </template>
	    </up-navbar-mini>
	    <view class="find-clinic__title-text">找诊所</view>
	  </view>
	  <view class="find-clinic__search-box">
	    <search-box></search-box>
	  </view>
	</view>
      <view class="find-clinic__classification">
        <up-tabs 
          :list="list1"
          lineWidth="60"
          lineHeight="4"
          lineColor="#FCAE7A"
          :activeStyle="{
            color: '#333333',
            fontWeight: 'bold',
            fontSize: '32rpx',
            transform: 'scale(1.05)'
          }"
          :inactiveStyle="{
            color: '#999999',
            transform: 'scale(1)',
            fontSize: '30rpx',
          }"
          itemStyle="
            padding: 0 15px; 
            height: 40px;
            margin-bottom: 5rpx;
          "
        ></up-tabs>
        
        <view class="find-clinic__classification-bottom">
          <view class="find-clinic__location">
            <location></location>
          </view>
          
		  <view class="find-clinic__sort">
			  <up-select
				v-model:current="sortType"
				:options="sortOptions"
				:label="sortName"
				@select="handleSelect"
			  >
				<template #icon>
				 <up-icon 
					name="arrow-down"
					bold="true"
					size="30rpx"
					></up-icon>
				</template>
			  </up-select>		  	
		  </view>
        </view>
      </view>
    </up-sticky>
	
	<view class="find-clinic__clinic-list">
		<view class="find-clinic__clinic-item" v-for="(index,item) in findClinicItemList">
			<find-clinic-item></find-clinic-item>
		</view>
		<view class="find-clinic__clinic-item" v-for="(index,item) in findClinicItemList">
			<find-clinic-item></find-clinic-item>
		</view>
		<view class="find-clinic__clinic-item" v-for="(index,item) in findClinicItemList">
			<find-clinic-item></find-clinic-item>
		</view>
		<up-divider text="已经到底了"></up-divider>
	</view>
 
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TClinicBasicInfo, TClinicTag } from '@/types/clinic/clinic.types.ts'

import findClinicItem from '@/components/clinic/FindClinicItem.vue'
import searchBox from '@/components/universal/SearchBox.vue'
import location from '@/components/universal/Location.vue'

// 保持原有变量名称
const showSortPop = ref<boolean>(false)
const sortType = ref<number>(0) // 保持原类型，0-综合排序 1-距离优先 2-评分高
const sortName = ref<string>("综合排序")

	const findClinicItemList = ref<TClinicBasicInfo[]>([
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				name:"医保定点",
				},
				{
				tagId:2,
				name:"儿科",
				},
			]
		},
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				name:"医保定点",
				},
				{
				tagId:2,
				name:"儿科",
				},
			]
		},
		{
			clinicId:1,
			clinicName:"xx诊所",
			clinicCoverUrl:"@/static/default/img/clinic_cover.png",
			ratingScore:4.5,
			ratingCount:23333,
			tags:[
				{
				tagId:1,
				name:"医保定点",
				},
				{
				tagId:2,
				name:"儿科",
				},
			]
		},
	])
const list1 = ref<TClinicTag[]>([
  {
    tagId: 0,
    name: "全科/综合诊所"
  },
  {
    tagId: 1,
    name: "儿科诊所"
  },
  {
    tagId: 2,
    name: "牙科/口腔诊所"
  },
  {
    tagId: 3,
    name: "妇科"
  },
])

// 定义排序选项
const sortOptions = [
  { id: 0, name: '综合排序' },
  { id: 1, name: '距离优先' },
  { id: 2, name: '评分优先'}
]

// 处理选择事件
const handleSelect = (option: any) => {
  sortType.value = option.id
  sortName.value = option.name
  showSortPop.value = !showSortPop.value
  // 调用原排序函数
  sortClinic(sortType.value)
}

// 原排序函数
const sortClinic = (type: number) => {
  console.log(`执行排序: ${type}`)
  // 这里不实现具体功能
}
</script>

<style lang="scss">
.find-clinic {
  min-height: 100vh;
  background-color: $bg-color;
}

.find-clinic__header {
  background-color: $primary-color;
  padding: 0 25rpx;
  padding-top: 90rpx;
  padding-bottom: 120rpx;
}

.find-clinic__title {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
}

.find-clinic__title-text {
  font-size: 40rpx;
  font-weight: bold;
  color: #ffffff;
}

.find-clinic__classification {
  background-color: $bg-white;
  height: 160rpx;
  border-radius: 25rpx;
  padding-top: 15rpx;
  position: absolute;
  bottom: -75rpx;
}

.find-clinic__classification-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15rpx;
}

/* 保持原有排序按钮样式 */
.find-clinic__sort {
  display: flex;
  justify-content: flex-end;
  
  margin-right: 35rpx;
  padding: 5rpx 15rpx;
  background-color: $pxx_gray_light;
  border-radius: 15rpx;
  font-size: 30rpx;
  color: $text-primary;
}

/* 隐藏 up-select 默认样式，使其看起来像普通按钮 */
// ::v-deep .up-select__body {
//   background: $pxx_gray_light;
//   border-radius: 15rpx;
//   padding: 5rpx 15rpx;
//   display: flex;
//   align-items: center;
//   gap: 5rpx;
//   min-height: auto;
//   height: auto;
// }

// ::v-deep .up-select__label {
//   font-size: 28rpx;
//   color: #333;
//   display: flex;
//   align-items: center;
//   gap: 5rpx;
// }

.find-clinic__clinic-list{
	margin-top: 95rpx;
	padding-bottom: 30rpx;
}
.find-clinic__clinic-item{
	background-color: $bg-white;
	padding: 15rpx;
	margin: 15rpx 10rpx;
	border-radius: 15rpx;
	box-shadow: 0 3rpx 10rpx $shadow-color;
}
</style>