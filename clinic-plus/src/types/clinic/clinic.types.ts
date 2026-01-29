
export type TClinicTag = {
	tagId:number // 标签ID
	tagName:string // 标签名称
	tagType?:number // 标签类型(暂无定义)
}

// 诊所基础信息
export type TClinicBasicInfo = {
	clinicId:number // 诊所ID
	clinicName:string // 诊所名称
	clinicCoverUrl:string // 诊所封面图片URL
	tags:TClinicTag[] // 诊所标签
	province?:string // 省份
	city?:string // 城市
	district?:string // 区县
	address?: string // 详细地址
	latitude?: number // 纬度
	longitude?: number // 维度
	patientCount?:number // 已服务患者人数
	ratingScore:number // 评分
	ratingCount?:number // 评价数
	status?:number // 状态 0-停用 1-启用 2-休息中
	openTime?:number // 开业时间（HHMM格式），如900表示09:00
	closeTime?:number // 结束时间（HHMM格式），如1800表示18:00
	breakStartTime?:number // 午休开始时间
	breakEndTime?:number // 午休结束时间
	distance?: number // 距离（米/公里），用于附近诊所排序
	isOpen?: boolean // 当前是否营业中
}

// 诊所完整信息
export type TClinicInfo = TClinicBasicInfo & {
	
	
}