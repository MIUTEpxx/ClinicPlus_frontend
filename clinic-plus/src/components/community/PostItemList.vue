<template>
	<view class="post-item-list-container">
		<view class="post-item-list__info">
			<!-- 帖子标题 -->
			<view class="post-item-list__info-title">{{postTitle}}</view>
			<!-- 帖子类型 -->
			<view class="post-item-list__info-category">{{postcategory}}</view>
			<view class="post-item-list__info-bottom">
				<!-- 发帖用户信息 -->
				<view class="post-item-list__info-user">
					<!-- 发帖用户头像 -->
					<view class="post-item-list__info-user-avatar">
						<up-image
							:src="userAvatar"
							mode="scaleToFill"  
							radius="20rpx"
							width="100%"
							height="100%"
						></up-image>
					</view>
					<!-- 发帖用户昵称 -->
					<view class="post-item-list__info-user-name">{{userName}}</view>
				</view>
				<!-- 更多数据 -->
				<view class="post-item-list__info-data">
					<!-- 点赞数 -->
					<view class="post-item-list__info-like">
						<i class="iconfont icon-dianzan"></i>
						<view class="post-item-list__info-like-count">{{likeCount}}</view>
					</view>
					<!-- 评论数 -->
					<view class="post-item-list__info-comment">
						<i class="iconfont icon-huihua"></i>
						<view class="post-item-list__info-comment-count">{{commentCount}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 帖子封面 -->
		<view class="post-item-list__cover">
			<up-image
				:src="postsCover"
				mode="scaleToFill"  
				radius="20rpx"
				width="100%"
				height="100%"
			></up-image>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const postTitle = ref<string>("这里是帖子的标题这里是帖子的标题这里是帖子的标题这里是帖子的标题这里是帖子的标题这里是帖子的标题这里是帖子的标题")
	const postcategory = ref<string>("患友交流")
	const postsCover = ref<string>("/static/default/img/post_cover.png")
	const userName =  ref<string>("用户昵称")
	const userAvatar = ref<string>("/static/default/img/avatar.png")
	const likeCount = ref<number>(123)
	const commentCount = ref<number>(123)
	
</script>

<style lang="scss">
	.post-item-list-container{
	  display: flex;
	  padding: 20rpx 15rpx;
	  background-color: $bg-white;
	  // margin-bottom: 20rpx;
	  box-shadow: 0 2rpx 8rpx $shadow-color;
	  align-items: stretch; /* 让子元素等高 */
	  min-height: 200rpx; /* 设置最小高度 */
	}
	
	.post-item-list__info{
	  flex: 1; /* 信息区域占据剩余空间 */
	  display: flex;
	  flex-direction: column;
	  margin-right: 20rpx; /* 与封面区域间距 */
	}
	
	.post-item-list__info-title{
	  font-size: 32rpx;
	  font-weight: 500;
	  color: $text-primary;
	  margin-bottom: 10rpx;
	  line-height: 1.4;
	  
	  /* 多行文本省略 */
	  display: -webkit-box;
	  -webkit-line-clamp: 2;  // 限制行数 
	  -webkit-box-orient: vertical;  // 限制行数 
	  overflow: hidden;
	  text-overflow: ellipsis;
	  min-height: 90rpx; /* 确保两行高度 */
	}
	
	.post-item-list__info-category{
	  display: inline-block;
	  padding: 4rpx 12rpx 6rpx 12rpx;
	  background-color: $pxx_gray_light;
	  color: $text-regular;
	  border-radius: 6rpx;
	  font-size: 25rpx;
	  margin-bottom: 15rpx;
	  align-self: flex-start; /* 左对齐 */
	}
	
	.post-item-list__info-bottom{
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-top: auto; /* 推到底部 */
	}
	
	.post-item-list__info-user{
	  display: flex;
	  align-items: center;
	}
	
	.post-item-list__info-user-avatar{
	  width: 50rpx;
	  height: 50rpx;
	  border-radius: 20rpx;
	  overflow: hidden;
	  margin-right: 10rpx;
	}
	
	.post-item-list__info-user-name{
	  font-size: 24rpx;
	  color: $text-regular;
	}
	
	.post-item-list__info-data{
	  display: flex;
	  align-items: center;
	  gap: 15rpx;
	}
	
	.post-item-list__info-like,
	.post-item-list__info-comment{
	  display: flex;
	  align-items: center;
	  font-size: 22rpx;
	  color: $text-regular;
	  
	  .iconfont{
	    margin-right: 5rpx;
	    font-size: 24rpx;
	  }
	}
	
	.post-item-list__cover{
	  width: 220rpx; /* 固定宽度 */
	  height: 220rpx; /* 固定高度，形成正方形 */
	  flex-shrink: 0; /* 防止缩小 */
	  border-radius: 8rpx;
	  overflow: hidden;
	}
</style>