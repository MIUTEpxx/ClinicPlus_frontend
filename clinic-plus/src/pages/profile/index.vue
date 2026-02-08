<template>
	<view class="profile-index">
		<up-toast ref="uToastRef"></up-toast>
		<view class="profile-index__bg"></view>
		<!-- 切换角色按钮 -->
		<view class="profile-index__role" @click="changeRole">
			{{currentRole()}}
		</view>
		<!-- 用户信息 -->
		<UserSection @click="loginReminder"/>
		
		<view class="profile-index__body" @click="loginReminder">
			<view class="profile-index__body-item">
				<i class="iconfont icon-quanke"></i>
				我的预约
				<up-icon class="up-iconfont" name="arrow-right" size="35rpx"></up-icon>
			</view>
			<up-line></up-line>
			<view class="profile-index__body-item">
				<i class="iconfont icon-lishi"></i>
				浏览记录
				<up-icon class="up-iconfont" name="arrow-right" size="35rpx"></up-icon>
			</view>
			<up-line></up-line>
			<view class="profile-index__body-item">
				<i class="iconfont icon-xingji"></i>
				我的收藏
				<up-icon class="up-iconfont" name="arrow-right" size="35rpx"></up-icon>
			</view>
			<up-line></up-line>
			<view class="profile-index__body-item">
				<i class="iconfont icon-yisheng"></i>
				医生认证
				<up-icon class="up-iconfont" name="arrow-right" size="35rpx"></up-icon>
			</view>
			<up-line></up-line>
			<view class="profile-index__body-item">
				<i class="iconfont icon-yiyuan"></i>
				我的诊所
				<up-icon class="up-iconfont" name="arrow-right" size="35rpx"></up-icon>
			</view>
			<up-line></up-line>
		</view>
		<up-alert 
		v-if="!isLogin"
		title="当前未登录账号" 
		type = "warning" 
		fontSize="25rpx"
		showIcon="true"
		icon="warning"
		></up-alert>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	
	import UserSection from '@/components/user/porfile/UserSection.vue'
	
	const role = ref<number>(0) // 当前角色
	const isLogin = ref<boolean>(false)
	// Toast 引用
	const uToastRef = ref()
		
	const changeRole =()=>{
		// 模拟切换用户角色
		if(role.value == 1) role.value = 0;
		else {
			// 检查是否拥有医生认证 
			// ...
			role.value = 1; // 切换到医生角色(医生端)
		}
	}
	
	const currentRole =()=>{
		if(role.value == 1) return "切换至患者端"
		else return "切换至医生端"
	}
	
	// 点击用户区域
	const loginReminder =()=>{
		// 判断是否登录
		if(!isLogin.value){
			// 显示未登录提示
			showLoginToast()
		}else{
			// 其他操作
		}
	}
	
	// 显示登录提示
		const showLoginToast = () => {
			// 通过 ref 调用 Toast 的 show 方法
			uToastRef.value.show({
				// 提示类型，可以是 'default'、'success'、'error'、'warning'、'loading'
				type: 'warning',
				// 提示消息
				message: '请先登录',
				// 显示位置，可选 'top'、'center'、'bottom'
				position: 'center',
				// 显示时长（毫秒），设为 -1 则不自动关闭
				duration: 1000,
				// 是否显示加载图标
				loading: false,
				// 自定义图标
				// icon: 'https://example.com/icon.png',
				// 完成后的回调
				complete: () => {
					console.log('Toast 已关闭')
					// 跳转到登录页面
					uni.navigateTo({
						url: '/pages/login/login',
					})
				}
			})
		}
</script>

<style lang="scss" scoped>
	.profile-index{
		background-color: $bg-white;
		height: 100vh;
		&__bg{
			// background-color: $primary-color;
			background: linear-gradient(to bottom, $primary-light, $bg-white);
			height: 600rpx;
		}
		&__role{
			position: absolute;
			top: 180rpx;
			right: 0;
			padding: 10rpx 15rpx 12rpx 20rpx;
			color: $text-white;
			background-color: $black-20;
			border-radius: 25rpx 0 0 25rpx ;
		}
		
		&__body{
			margin: 35rpx;
			&-item{
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin: 35rpx 0;
				font-size: 35rpx;
				.iconfont{
					font-size: 50rpx;
					color: $primary-color;
					margin-right: 15rpx;
					margin-top: 4rpx;
				}
				.up-iconfont{
					margin-left: auto;
					margin-top: 4rpx;
				}
			}
		}
	}
</style>