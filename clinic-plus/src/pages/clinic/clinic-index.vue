<template>
  <view class="clinic-index">
    <!-- 顶部图集组件 -->
    <ClinicHeader
      :title="'诊所详情'"
      :image-list="imageList"
      :image-count="imageCount"
    />
    
    <!-- 诊所基础信息组件 -->
    <ClinicBasicInfo
      :clinic-info="clinicInfo"
      :tags="tags"
      :rating="rating"
      :opening-hours="openingHours"
      :location="location"
    />
	<!-- 诊所概况/更多信息 -->
	<ClinicOverview/>
	<!-- 诊所医生团队信息 -->
	<ClinicDoctorList/>
	<!-- 诊所评论区 -->
	<ClinicCommentSection/>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ClinicHeader from '@/components/clinic/clinicIndex/ClinicHeader.vue'
import ClinicBasicInfo from '@/components/clinic/clinicIndex/ClinicBasicInfo.vue'
import ClinicOverview from '@/components/clinic/clinicIndex/ClinicOverview.vue'
import ClinicDoctorList from '@/components/clinic/clinicIndex/ClinicDoctorList.vue'
import ClinicCommentSection from '@/components/clinic/clinicIndex/ClinicCommentSection.vue'
// 图集数据
const imageList = ref<string[]>(Array(6).fill("/static/default/img/clinic_cover.png"))
const imageCount = computed(() => imageList.value.length)

// 诊所基础信息
const clinicInfo = ref({
  name: "诊所名称"
})

// 标签数据
const tags = ref<string[]>(Array(6).fill("标签内容"))

// 评分数据
const rating = ref<number>(4.5)

// 营业时间数据
const openingHours = ref({
  workDay: "周一至周日",
  workTime: "07:00 - 21:00",
  lunchBreak: "11:30-13:30",
  hasLunchBreak: true
})

// 位置信息
const location = ref({
  distance: 869,
  timeTaken: "七分钟",
  address: "杭州市 钱塘区6号大街324、326号(云水地铁站A口步行410米)"
})

</script>

<style lang="scss">
.clinic-index {
  min-height: 100vh;
  background-color: $bg-color;
}
</style>