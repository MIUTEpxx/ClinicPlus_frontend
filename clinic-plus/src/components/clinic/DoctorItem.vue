<template>
	<view class="doctor-item">
		<view class="doctor-item__info">
			<!-- 医生头像 -->
			<view class="doctor-item__info-avatar">
				<up-image
					:src="doctorAvatar"
					mode="scaleToFill"  
					radius="20rpx"
					width="100%"
					height="100%"
				></up-image>
			</view>
			<!-- 医生信息 -->
			<view class="doctor-item__info-content">
				<!-- 头部 -->
				<view class="doctor-item__info-content-header">
					<!-- 医生名称 -->
					<view class="doctor-item__name">
						{{doctorName}}
					</view>
					<!-- 医生级别 -->
					<view class="doctor-item__rank">
						<i class="iconfont icon-anquan"></i>
						<view class="doctor-item__rank-text">
							{{doctorRank}}
						</view>
					</view>
					<!-- 医生工作经验 -->
					<view class="doctor-item__work-experience">
						从业 {{workExp}}年
					</view>
				</view>
				<!-- 标签 -->
				<view class="doctor-item__info-content-tags">
					<view v-for="(item, index) in doctorTags" :key="index" class="doctor-item__info-content-tags-item">
						{{item}}
					</view>
				</view>
				<!-- 简介 -->
				<up-text
				:text="doctorProfile"
				lines="3"
				size="25rpx"
				color="#666666"
				margin="10rpx 0"
				lineHeight="45rpx"
				></up-text>
				
			</view>
		</view>
		<!-- 按钮 -->
		<view class="doctor-item__button">
			<view class="doctor-item__button-appointment doctor-item__button-1">
				<up-button 
				color="#49B9AD"
				custom-style="
					font-size: 30rpx;
					height: 60rpx;
					border-radius: 20rpx;
				"
				>一键预约</up-button>
			</view>
			<view class="doctor-item__button-consult doctor-item__button-1">
				<up-button 
				color="#82f5e6"
				custom-style="
					font-size: 30rpx;
					height: 60rpx;
					border-radius: 20rpx;
				"
				>在线咨询</up-button>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">import { ref } from 'vue';

	
	const doctorAvatar = ref<string>("/static/default/img/doctor_avatar.png")
	const doctorName = ref<string>("医生名称")
	const doctorRank = ref<string>("主任医师")
	const workExp = ref<number>(3.5)
	const doctorTags =ref<string[]>(["浙江大学博士学位","红十字协会成员","协和认证"])
	const doctorProfile = ref<string>("擅长: 1.各类痛症如头痛、肩周炎、腰椎间盘突出、颈肩腰腿疼痛等。2.内科：脾胃病、肝胆...种植牙检查,牙修复检查,即刻种植,全口/半口牙颌种植,微创即刻种植;甲状腺疾病及内分泌疾病，擅长甲亢、甲减、桥本病、糖尿病、多囊卵巢")
</script>

<style lang="scss">
.doctor-item{
	background-color: $bg-white;
	&__info{
		display: flex;
		// 头像
		&-avatar{
			min-width: 150rpx;
			height: 150rpx;
		}
		// 信息
		&-content{
			flex: 1; /* 占据剩余空间 */
			min-width: 0; /* 防止Flex项目溢出 */
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin: 0 15rpx;
			// 头部 (名字 级别 工作年限)
			&-header{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				.doctor-item__name{
					color: $text-primary;
					font-size: 40rpx;
					text-shadow: 0px 0px 1px $text-primary;
					margin-right: 10rpx;
				}
				.doctor-item__rank{
					display: flex;
					align-items: center;
					justify-content: center;
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
				.doctor-item__work-experience{
					margin-left: 15rpx;
					font-size: 25rpx;
					color: $text-regular;
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
			&-profile{
				margin: 10rpx 0;
			}
		}
	}


	&__-content{
		
	}
	
	&__button{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-top: 15rpx;
		&-1{
			width: 220rpx;
			
			box-shadow: 2px 5rpx 15rpx $primary-ultra-light;
		}
		
		&-appointment{
			margin-right: 50rpx;
		}
	}
}
</style>