// src/types/uview.d.ts
declare module 'uview-plus' {
  import { Plugin } from 'vue';
  const uviewPlus: Plugin;
  export default uviewPlus;
  
  // 可以添加一些常用的组件类型声明
  export const uButton: any;
  export const uCell: any;
  // 添加其他常用组件的声明
}