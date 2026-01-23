// types/treatment/health-task.types.ts

/**
 * 健康任务状态枚举
 */
export enum EHealthTaskStatus {
  // 待完成
  PENDING = 0,
  // 已完成
  COMPLETED = 1,
  // 未开始
  NOT_STARTED = 2,
  // 已逾期
  OVERDUE = 3
}

/**
 * 健康任务项
 */
export type THealthTaskItem = {
  // 健康任务ID
  taskId: number
  // 健康任务名称
  taskName: string
  // 任务完成状态
  status: EHealthTaskStatus
  // 任务排序序号
  sortOrder?: number
  // 任务开始时间
  startTime?: string
  // 任务截止时间
  deadline?: string
}

/**
 * 疗程信息
 */
export type TTreatmentInfo = {
  // 疗程ID
  treatmentId: number
  // 疗程名称
  treatmentName: string
  // 诊所ID
  clinicId: number
  // 诊所名称
  clinicName: string
  // 医生ID
  doctorId: number
  // 医生名称
  doctorName: string
  // 疗程总天数
  totalDays: number
  // 疗程已进行天数
  completedDays: number
  // 疗程进度百分比（计算字段）
  progress: number
  // 健康任务列表
  healthTasks: THealthTaskItem[]
  // 疗程开始时间
  startTime: string
  // 疗程结束时间
  endTime: string
  // 疗程状态：0-进行中 1-已完成 2-已暂停 3-已终止
  status: number
  // 该疗程当日包含的健康任务数大于3时为真
  has_more_task:boolean
}