<template>
	<view class="user-section">
		<!-- 用户头像 -->
		<view class="user-section__avatar">
			<up-image
				:src="avatar"
				mode="scaleToFill"  
				radius="20rpx"
				width="100%"
				height="100%"
			></up-image>
		</view>
		<!-- 用户信息 -->
		<view class="user-section__info">
			<view class="user-section__info-name">
				{{name}}
			</view>
			<!-- 医生级别 当用户拥有医生认证时-->
			<view class="user-section__info-rank" v-if="isDoctor">
				<i class="iconfont icon-anquan"></i>
				<view class="user-section__info-rank-text">
					{{doctorRank}}
				</view>
			</view>
			<!-- 医生标签 当用户拥有医生认证时-->
			<view class="user-section__info-tags" v-if="isDoctor">
				<view v-for="(item, index) in doctorTags" :key="index" class="user-section__info-tags-item">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';

	const isDoctor = ref<boolean>(true)
	const doctorRank = ref<string>("主任医师")
	const doctorTags =ref<string[]>(["浙江大学博士学位","红十字协会成员","协和认证"])
	const avatar = ref<string>("/static/default/img/avatar.png")
	const name = ref<string>("请登录账号")
	
</script>

<style lang="scss" scoped>
	.user-section{
		background-color: $white-50;
		min-height: 230rpx;
		margin: 0 25rpx;
		margin-top: -320rpx;
		border-radius: 25rpx;
		box-shadow: 0rpx 5rpx 15rpx $primary-ultra-light;
		padding: 15rpx;
		
		display: flex;
		&__avatar{
			min-width: 150rpx;
			height: 150rpx;
			padding: 10rpx;
			margin: 15rpx;
			border-style: solid;
			border-width: 5rpx;
			border-color: $primary-semi-light;
			border-radius: 500rpx;
		}
		
		&__info{
			flex: 1;
			min-width: 0; /* 防止Flex项目溢出 */
			margin-top: 15rpx;
			
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			&-name{
				font-size: 35rpx;
				text-shadow: 0px 0px 1px $text-primary;
				margin-bottom: 15rpx;
			}
			
			&-rank{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin-bottom: 15rpx;
				.iconfont{
					font-size: 45rpx;
					color: white;
					padding: 3rpx;
					background-color: $primary-color;
					border-radius: 50rpx;
				}
				&-text{
					font-size: 25rpx;
					color: white;
					margin-left: -8rpx;
					padding: 0 15rpx 3rpx 5rpx;
					background-color:$primary-color ;
					border-radius: 0  25rpx 25rpx 0;
				}
				
			}
			// 标签
			&-tags{
				display: flex;
				white-space: nowrap; /* 确保子元素不会换行 */
				overflow-x: scroll; /* 启用水平滚动 */
				overflow-y: hidden; /* 隐藏垂直滚动条 */
				width: 100%; /* 确保宽度为100% */
				margin-top: 10rpx;
				&-item{
					display: inline-block; /* 使元素水平排列 */
					white-space: nowrap; /* 防止文本换行 */
					padding: 2rpx 8rpx 4rpx 8rpx;
					margin-right: 15rpx;
					background-color: $pxx_gray_light;
					border-radius: 10rpx;
					
					font-size: 25rpx;
					color:$text-primary ;
					
				}
			}
		}
	}
</style>