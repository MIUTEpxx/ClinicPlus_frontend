<template>
	<view class="clinic-index">
		<view class="clinic-index__header">
			<scroll-view 
				class="clinic-index__images" 
				scroll-x="true" 
				:show-scrollbar="false"
				enable-flex
			>
				<view 
					v-for="(item, index) in 6" 
					:key="index"
					class="clinic-index__images-item"
				>
					<up-image
						:src="clinicCover"
						mode="aspectFill"
						radius="20rpx"
						width="100%"
						height="100%"
					></up-image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const clinicCover = ref<string>("/static/default/img/clinic_cover.png")
</script>

<style lang="scss">
.clinic-index {
	min-height: 100vh;
	background-color: $bg-color;
}

.clinic-index__header {
	background-color: $primary-color;
	padding: 90rpx 0 30rpx 0; /* 调整内边距 */
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
	gap: 20rpx; /* 图片之间的间距 */
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
</style>