export type TPostBasicInfo = {
	postId:number
	postCategory:number // 帖子分类 1-交流分享 2-专业科普 3-问题求助
	isPopular?:boolean // 是否是热门帖子
	postTypeId?:number // 帖子标签ID
	postTypeName?:string 
	postTitle:string // 帖子标题
	postCoverUrl:string // 帖子封面url
	likeCount:number //  点赞数
	commentCount:number // 评论数
	createTime?:number // 帖子创建日期时间戳
	lastInteractTime?:number // 帖子上一次发生互动(点赞,评论)的时间
	userId:number // 发帖人ID
	userName:string // 发帖人昵称
	userAvatarUrl:string // 发帖人头像url
}