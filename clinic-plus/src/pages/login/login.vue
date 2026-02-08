<template>
	<view class="login">
		<!-- 顶部标题区域 -->
		<view class="login__header">
			<view class="login__title">
				<view class="login__title-1">
					Clinic Plus
				</view>
				<view class="login__title-2">
					诊所就医小程序
				</view>
			</view>
		</view>

		<!-- 中间内容区域 -->
		<view class="login__content">
			<!-- 可以在这里添加诊所特色介绍或图片 -->
			<view class="login__features">
				<view class="login__feature-item">
					<up-icon name="checkmark-circle" color="#7DD6CB" size="20"></up-icon>
					<text class="login__feature-item-txt">诊所预约线上咨询</text>
				</view>
				<view class="login__feature-item">
					<up-icon name="checkmark-circle" color="#7DD6CB" size="20"></up-icon>
					<text  class="login__feature-item-txt">可持续的康复疗程</text>
				</view>
				<view class="login__feature-item">
					<up-icon name="checkmark-circle" color="#7DD6CB" size="20"></up-icon>
					<text class="login__feature-item-txt">健康社区分享精彩</text>
				</view>
			</view>
		</view>

		<!-- 底部登录区域 -->
		<view class="login__footer">
			<!-- 微信登录按钮 -->
			<view class="login__btn" @click="handleWechatLogin">
				<up-icon name="weixin-fill" color="#07C160" size="30"></up-icon>
				<text class="login__text">微信一键登录</text>
			</view>

			<!-- 其他登录方式区域（预留） -->
			<view class="login__btn">
				<up-icon name="email-fill" color="#5A8BFF" size="30"></up-icon>
				<text class="login__text">邮箱验证登录</text>
			</view>

			<!-- 服务协议 -->
			<view class="login__agreement">
				<text>登录即代表同意《用户协议》和《隐私政策》</text>
			</view>
		</view>

		<!-- Toast 组件 -->
		<up-toast ref="uToastRef"></up-toast>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Toast 引用
const uToastRef = ref()

// 微信登录处理
const handleWechatLogin = async () => {
	try {
		// 显示加载中
		uToastRef.value?.show({
			type: 'loading',
			message: '登录中...',
			duration: -1
		})

		// 1. 从微信服务器获取微信登录code	
		// 2. 获取用户信息（需要用户授权）
		// 同时发起两个请求，而不是先后
		const [loginRes, userInfoRes] = await Promise.all([
		  uni.login(),  // 获取code
		  uni.getUserProfile({  // 获取用户信息
		    desc: '用于完善会员资料'
		  })
		])
	
		if (!loginRes.code) {
		  throw new Error('获取登录code失败')
		}
		// 3. 打印详细信息用于调试
		console.log('=== 调试信息开始 ===')
		console.log('1. 登录code:', loginRes.code)
		console.log('2. 用户昵称:', userInfoRes.userInfo.nickName)
		console.log('3. 用户头像:', userInfoRes.userInfo.avatarUrl)
		console.log('4. 用户性别:', userInfoRes.userInfo.gender)
		console.log('5. 用户地区:', `${userInfoRes.userInfo.country} ${userInfoRes.userInfo.province} ${userInfoRes.userInfo.city}`)
		console.log('6. 完整用户信息:', JSON.stringify(userInfoRes.userInfo, null, 2))
		console.log('=== 调试信息结束 ===')
		
		// 3. 调用后端登录接口
		// TODO: 替换为实际的后端接口
		const loginResult = await requestWechatLogin({
			code: loginRes.code,
			userInfo: userInfoRes.userInfo
		})

		// 4. 登录成功处理
		uToastRef.value?.show({
			type: 'success',
			message: '登录成功',
			duration: 1500
		})

		// 5. 跳转到首页或之前页面
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/index/index'
			})
		}, 1500)

	} catch (error: any) {
		console.error('微信登录失败:', error)
		
		// 隐藏加载中
		uToastRef.value?.hide()
		
		// 显示错误提示
		uToastRef.value?.show({
			type: 'error',
			message: error.message || '登录失败，请重试',
			duration: 2000
		})
	}
}

// 模拟后端登录接口
const requestWechatLogin = (data: any): Promise<any> => {
	return new Promise((resolve, reject) => {
		// TODO: 替换为实际的后端API调用
		setTimeout(() => {
			// 模拟成功响应
			resolve({
				success: true,
				data: {
					token: 'mock_token_' + Date.now(),
					userInfo: data.userInfo
				}
			})
			
			// 模拟错误响应
			// reject(new Error('模拟登录失败'))
		}, 1000)
	})
}

// 其他登录方式（预留）
const handleOtherLogin = () => {
	// TODO: 实现其他登录方式
	console.log('其他登录方式')
}
</script>

<style lang="scss" scoped>
.login {
	height: 100vh;
	background: linear-gradient(135deg, $primary-color 0%, $primary-dark 100%);
	display: flex;
	flex-direction: column;
	
	&__header {
		flex: 0 0 auto;
		padding: 120rpx 50rpx 60rpx;
	}
	
	&__title {
		color: $text-white;
		text-align: center;
		
		&-1 {
			font-size: 88rpx;
			font-weight: bold;
			line-height: 1.2;
			margin-bottom: 10rpx;
			text-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
		}
		
		&-2 {
			font-size: 36rpx;
			font-weight: 500;
			opacity: 0.9;
		}
	}
	
	&__content {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 50rpx;
	}
	
	&__features {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 20rpx;
		padding: 40rpx;
		width: 100%;
	}
	
	&__feature-item {
		display: flex;
		align-items: center;
		margin-bottom: 25rpx;
		color: $text-white;
		font-size: 28rpx;
		gap: 15rpx;
		&:last-child {
			margin-bottom: 0;
		}
		&-txt{
			font-size: 35rpx;
			margin-bottom: 3rpx;
		}
	}
	
	&__footer {
		flex: 0 0 auto;
		padding: 0 50rpx 80rpx;
	}
	
	&__btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: $text-white;
		border-radius: 50rpx;
		padding: 20rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		
		&:active {
			transform: scale(0.98);
			box-shadow: 0 5rpx 15rpx rgba(0, 0, 0, 0.1);
		}
	}
	
	&__text {
		font-size: 32rpx;
		font-weight: 500;
		color: $text-primary;
		margin-left: 15rpx;
	}
	
	&__other-options {
		// 预留其他登录方式区域样式
		margin-bottom: 30rpx;
	}
	
	&__agreement {
		text-align: center;
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.7);
	}
}
</style>