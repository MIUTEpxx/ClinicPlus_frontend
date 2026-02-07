<template>
	<view class="clinic-index">
		<view class="clinic-index__header">
			  <view class="fclinic-indexc__title">
			    <!-- 返回上一级或主页的按钮 -->
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
			    <view class="fclinic-indexc__title-text">诊所详情</view>
			  </view>
			  <!-- 诊所图集 -->
			<scroll-view 
				class="clinic-index__images" 
				scroll-x="true" 
				:show-scrollbar="false"
				enable-flex
			><view 
					v-for="(item, index) in 6" 
					:key="index"
					class="clinic-index__images-item"
				><up-image
						:src="clinicCover"
						mode="aspectFill"
						radius="20rpx"
						width="100%"
						height="100%"
					></up-image>
				</view>
			</scroll-view>
			<!-- 查看所有图片按钮 -->
			<view class="clinic-index__more-images">
				图片 ( {{imgNum}} )
			</view>
		</view>
		<!-- 诊所基础信息 -->
		<view class="clinic-index__clinic-info">
			<view class="clinic-index__clinic-info-top">
				<view class="clinic-index__clinic-title">
					<!-- 诊所名称 -->
					<view class="clinic-index__clinic-name">
						{{clinicName}}
					</view>
					<!-- 诊所标签 -->
					<scroll-view
						class="clinic-index__clinic-tags" 
						scroll-x="true" 
						:show-scrollbar="false"
						enable-flex
					>	<view v-for="(item, index) in 6" :key="index"class="clinic-index__tag-item">
							{{tagName}}
						</view>
					</scroll-view>
				</view>
				<!-- 诊所评分 -->
				<view class="clinic-index__rating-score">
					{{ratingScore}} 
					<view class="clinic-index__rating-score-text">分</view>
				</view>
			</view>
			<!-- 诊所营业时间信息 -->
			<view class="clinic-index__opening-hours">
				营业时间:
				<!-- 一周中营业的天数 -->
				<view class="clinic-index__work-day">
					{{workDay}}
				</view>
				<!-- 一天中的营业时间 -->
				<view class="clinic-index__work-time">
					{{workTime}} 
				</view>
				<!-- 午休时间, 如果有的话 -->
				<view class="clinic-index__lunch-break" v-if="hasLunchBreak">
					午休: {{lunchBreak}}
				</view>
			</view>
			<!-- 分割线 -->
			<up-line></up-line>
			<view class="clinic-index__location">
				<!-- 诊所位置信息 -->
				<view class="clinic-index__location-info">
					<view class="clinic-index__distance">
						步行 {{distance}}m {{timeTaken}}
					</view>
					<view class="clinic-index__address">
						{{address}}
					</view>
				</view>
				<!-- 导航按钮 -->
				<view class="clinic-index__location-button">
					<i class="iconfont icon-dizhi"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const clinicCover = ref<string>("/static/default/img/clinic_cover.png")

const imgNum = ref<number>(4)
const clinicName = ref<string>("诊所名称")
const tagName = ref<string>("标签内容")
const ratingScore = ref<number>(4.5)
const hasLunchBreak = ref<boolean>(true)
const workDay = ref<string>("周一至周日")
const workTime = ref<string>("07:00 - 21:00")
const lunchBreak = ref<string>("11:30-13:30")
const distance = ref<number>(869)
const timeTaken = ref<string>("七分钟")
const address = ref<string>("杭州市 钱塘区6号大街324、326号(云水地铁站A口步行410米)")
</script>

<style lang="scss">
.clinic-index {
	min-height: 100vh;
	background-color: $bg-color;
}

.clinic-index__header {
	background-color: $primary-color;
	padding: 165rpx 0 80rpx 0; /* 调整内边距 */
}

.fclinic-indexc__title {
  display: flex;
  align-items: center;
  margin: 0 25rpx;
  margin-bottom: 20rpx;
}

.fclinic-indexc__title-text {
  font-size: 40rpx;
  font-weight: bold;
  color: #ffffff;
  margin-left: 15rpx;
}
.clinic-index__images {
	/* 关键：设置横向滚动容器 */
	display: flex;
	flex-direction: row;
	white-space: nowrap; /* 防止子元素换行 */
	
	/* 容器尺寸和滚动设置 */
	width: 100vw; /* 占满整个视口宽度 */
	overflow-x: auto; /* 水平滚动 */
	-webkit-overflow-scrolling: touch; /* iOS滚动更流畅 */
	
	/* 子项间隔 */
	padding-left: 25rpx; /* 第一个图片左间距 */
	
}

.clinic-index__images-item {
	display: inline-block;
	/* 关键：设置固定尺寸，不换行 */
	flex: 0 0 auto; /* 不伸缩，不收缩，自动计算基础尺寸 */
	width: 240rpx; /* 图片宽度，根据设计调整 */
	height: 240rpx; /* 图片高度，保持3:4比例 */
	
	/* 圆角和溢出隐藏 */
	border-radius: 20rpx;
	overflow: hidden;
	
	/* 阴影效果（可选） */
	box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	
	margin-right: 25rpx;
}

/* 为了更好的滚动体验，可以添加滚动条样式 */
.clinic-index__images::-webkit-scrollbar {
	display: none; /* 隐藏滚动条 */
}
.clinic-index__more-images{
	position: absolute;
	right: 20rpx;
	top: 405rpx;
	
	padding: 5rpx 10rpx;
	background-color: $ba-dark-trans;
	border-radius: 10rpx;
	color: $pxx_gray_light;
}
.clinic-index__clinic-info{
	position: relative;
	top: -60rpx;
	
	padding: 15rpx 25rpx;
	background-color: $bg-white;
	border-radius: 25rpx 25rpx 0 0;
}
.clinic-index__clinic-info-top{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.clinic-index__clinic-title{
	flex: 1; /* 关键：占据剩余空间 */
	min-width: 0; /* 防止内容溢出 */
}
.clinic-index__clinic-name{
	font-size: 38rpx;
	font-weight: bold;
	color:$text-primary;
}
.clinic-index__clinic-tags{
	/* 关键：设置横向滚动容器 */
	display: flex;
	flex-direction: row;
	white-space: nowrap; /* 防止子元素换行 */
	
	/* 容器尺寸和滚动设置 */
	width: 100%; /* 占满容器宽度*/
	overflow-x: auto; /* 水平滚动 */
	-webkit-overflow-scrolling: touch; /* iOS滚动更流畅 */
	margin-top: 15rpx;
	overflow: hidden;	
}
.clinic-index__tag-item{
	display: inline-block;
	/* 关键：设置固定尺寸，不换行 */
	flex: 0 0 auto; /* 不伸缩，不收缩，自动计算基础尺寸 */

	
	/* 圆角和溢出隐藏 */
	border-radius: 10rpx;
	overflow: hidden;
	
	
	padding: 5rpx 10rpx;
	margin-right: 15rpx;
	
	color: $text-primary;
	background-color: $pxx_gray_light;
}
.clinic-index__rating-score{
	flex-shrink: 0; /* 防止被压缩 */
	font-size: 55rpx; /* 设置字体大小 */
	font-weight: bold;
	color: $pxx_orange_dark; /* 设置评分颜色 */
	padding: 15rpx 0 25rpx 0;
	margin-left: 50rpx;
	
	display: flex;
	align-items: center;
	.clinic-index__rating-score-text{
		font-weight: normal;
		font-size: 40rpx;
		margin-left: 10rpx;
	}
}
.clinic-index__opening-hours{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: bold;
	font-size: 25rpx;
	color:$text-primary ;
	margin-bottom: 15rpx;
}
.clinic-index__work-day{
	font-weight: normal;
	margin-left: 5rpx;
}
.clinic-index__work-time{
	font-weight: normal;
	margin-left: 5rpx;
}
.clinic-index__lunch-break{
	font-weight: normal;
	margin-left: 25rpx;
}
.clinic-index__location{
	display: flex;
	margin-top: 25rpx;
}
.clinic-index__location-info{
	flex: 1;
	min-width: 0;
}
.clinic-index__distance{
	font-size: 30rpx;
	font-weight: bold;
	color: $text-primary;
}
.clinic-index__address{
	font-size: 25rpx;
	color: $text-regular;
	
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.clinic-index__location-button{
	width: 80rpx;
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color:$pxx_gray_light_light ;
	border-radius: 50rpx;
	
	margin-left: 25rpx;
	.iconfont{
		font-size: 55rpx;
		color: $primary-color;
	}
}


</style>