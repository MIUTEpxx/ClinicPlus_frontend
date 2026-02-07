<template>
	<!-- 评论项 -->
	<view class="comment-item">
		<view class="comment-item__header">
			<!-- 头像 -->
			<view class="comment-item__header-avatar">
				<up-image
					:src="avatar"
					mode="scaleToFill"  
					radius="20rpx"
					width="100%"
					height="100%"
				></up-image>
			</view>
			<view class="comment-item__header-info">
				<!-- 昵称 -->
				<view class="comment-item__header-info-name">
					{{name}}
				</view>
				<!-- 评分 -->
				<view class="comment-item__header-info-rate">
					<up-rate 
					count="5" 
					v-model="rateValue"
					activeColor="#FF7C50"
					inactiveColor="#FCAE7A"
					allowHalf='true'
					readonly
					size="30rpx"
					gutter="2"
					></up-rate>
					<view class="comment-item__header-info-rate-review">
						{{review()}}
					</view>
				</view>
			</view>
			<!-- 已点赞 -->
			<view class="comment-item__header-info-liked" v-if="liked" @click="clickLike">
				<i class="iconfont icon-dianzan"></i> {{likeCount + 1}}
			</view>
			<!-- 点赞 -->
			<view class="comment-item__header-info-like" v-else @click="clickLike">
				<i class="iconfont icon-dianzan"></i> {{likeCount}} 
			</view>

		</view>
		<!-- 评论内容 -->
		<view class="comment-item__content">
			<!-- 文本内容 -->
			<view class="comment-item__content-text">
				<up-text 
				:text="commentText"
				color="#333333"
				></up-text>
			</view>
			<!-- 图片内容 -->
			<view class="comment-item__content-images" v-if="commentImages.length > 0">
					<up-album
						:urls="commentImages"
						:maxCount="9"
						:rowCount="getRowCount(commentImages.length)"
						multipleSize="150rpx"
						space="9"
						multipleMode="aspectFill"
						previewFullImage
						radius="10"
					></up-album>
				</view>
		</view>
		<!-- 评论日期 -->
		<view class="comment-item__date">
			{{timeFormat(timestamp, 'yyyy年mm月dd日')}}
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { timeFormat, timeFrom } from 'uview-plus'
	
	const avatar = ref<string>("/static/default/img/avatar.png")
	const name = ref<string>("用户昵称")
	const rateValue = ref<number>(3.5)
	const likeCount = ref<number>(666)
	const liked = ref<boolean>(false)
	const commentText = ref<string>("诊所环境不错, 医生很有耐心, 医术高超,诊所环境不错, 医生很有耐心, 医术高超,诊所环境不错, 医生很有耐心, 医术高超,诊所环境不错, 医生很有耐心, 医术高超")
	// 评论图片数据
	const commentImages = ref([
		'/static/default/img/test1.png',
		'/static/default/img/test2.png',
		'/static/default/img/test3.png',
		'/static/default/img/test4.png',
		'/static/default/img/test5.png',
		'/static/default/img/test6.png',
		'/static/default/img/test7.png',
		'/static/default/img/test8.png',
		'/static/default/img/test9.png',
	])
	// 时间戳
	const timestamp =ref<number>(1770391797)
	// 根据图片数量设置每行数量
	const getRowCount = (count:number) => {
	  if (count === 4) return 2; // 4张图2×2网格
	  return 3; // 其他情况每行3个
	}
	// 打分等级
	const review = () =>{
		if (rateValue.value == 5) return "超赞"
		else if (rateValue.value>=4) return "很满意"
		else if (rateValue.value>=3.5) return "满意"
		else if (rateValue.value>=3) return "尚可"
		else if (rateValue.value>=2.5) return "一般"
		else if (rateValue.value>=2) return "较差"
		else if (rateValue.value>=1.5) return "差"
		else if (rateValue.value>=1) return "非常差"
	}
	// 点击点赞
	const clickLike =()=>{
		liked.value = !liked.value;
	}
</script>

<style lang="scss">
	.comment-item{
		
		&__header{
			display: flex;
			
			&-avatar{
				width: 75rpx;
				height: 75rpx;
			}
			
			&-info{
				margin-left: 10rpx;
				
				&-name{
					font-size: 30rpx;
					color:$text-primary ;
				}
				&-rate{
					display: flex;
					align-items: center;
					justify-content: flex-start;
					&-review{
						font-size: 25rpx;
						margin-left: 8rpx;
						margin-bottom: 5rpx;
						color: $pxx_orange_dark;
					}
				}
				&-like{
					margin-left: auto; // 靠右
					
					.iconfont{
						font-size: 35rpx;
						color:$text-primary;
					}
				}
				&-liked{
					margin-left: auto; // 靠右
					
					.iconfont{
						font-size: 40rpx;
						text-shadow: 0px 0px 1px $primary-mid;
						color:$primary-mid;
					}
				}
			}
		}
		
		&__content{
			margin-left: 5rpx;
			margin-top: 15rpx;
			
			&-images {
					margin-top: 15rpx;
				}
		}
		
		&__date{
			font-size: 25rpx;
			margin:10rpx 5rpx;
			color: $text-regular;
		}
	}
</style>