import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// 用户性别枚举
export enum UserGender {
  UNKNOWN = 0,
  MALE = 1,
  FEMALE = 2
}

// 用户状态枚举
export enum UserStatus {
  DISABLED = 0,  // 禁用
  NORMAL = 1,    // 正常
  FROZEN = 2     // 冻结
}

// 用户角色枚举
export enum UserRole {
  ADMIN = 'admin',
  PATIENT = 'patient',
  DOCTOR = 'doctor'
}

// 用户信息接口 - 对应数据库表结构
export interface UserInfo {
  // 用户ID
  id: number;
  // 微信openid
  openid: string | null;
  // 微信unionid
  unionid: string | null;
  // 昵称
  nickname: string | null;
  // 头像URL
  avatar: string | null;
  // 手机号
  phone: string | null;
  // 性别 0-未知 1-男 2-女
  gender: UserGender;
  // 状态 0-禁用 1-正常 2-冻结
  status: UserStatus;
  // 角色，逗号分隔：admin,patient,doctor
  roles: string;  // 存储格式：'patient,doctor' 或 'admin,patient,doctor'
  // 当前使用角色
  current_role: UserRole;
  // 注册时间
  register_time: string;
  // 最后登录时间
  last_login_time: string | null;
  // 更新时间
  update_time: string;
}

export interface LoginData {
  token: string;
  user: UserInfo;
}

// 创建 Pinia Store
export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref<string>('');
  const userInfo = ref<UserInfo | null>(null);
  
  // 设置并保存用户信息
  const setUserInfo = (info: UserInfo) => {
    userInfo.value = info;
    localStorage.setItem('userInfo', JSON.stringify(info));  // 保存到本地
  };
  
  //设置并保存Token
  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem('token', newToken); // 保存到本地
  };
  
  // 登录 保存Token和user信息
  const login = (data: LoginData) => {
    setToken(data.token);
    setUserInfo(data.user);
  };
  
  
  // 清除用户信息
  const clearUserInfo = () => {
    token.value = '';
    userInfo.value = null;
  };
  
  // 登出
  const logout = () => {
    clearUserInfo();
    localStorage.removeItem('token');  // 删除本地 token
    localStorage.removeItem('userInfo');  // 删除本地用户信息
  };
  
  // 更新用户信息
  const updateUserInfo = (updates: Partial<UserInfo>) => {
    if (userInfo.value) {
      userInfo.value = { ...userInfo.value, ...updates };
      localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
    }
  };
  
  // 从localStorage恢复登录状态
  const restoreLogin = () => {
    const storedToken = localStorage.getItem('token');
    const storedUserInfo = localStorage.getItem('userInfo');
	
    // 从本地恢复 token
    if (storedToken) {
      token.value = storedToken;
    }
    // 从本地恢复 UserInfo
    if (storedUserInfo) {
      try {
        userInfo.value = JSON.parse(storedUserInfo);
      } catch (error) {
        console.error('解析用户信息失败:', error);
        localStorage.removeItem('userInfo');
      }
    }
  };
  
  
	// 计算属性：是否已登录
    const isLoggedIn = computed(() => !!token.value);
    
	// 计算属性：用户名称
	const userName = computed(() => userInfo.value?.nickname || '用户');
  
  // 立即恢复
  restoreLogin();
  
  return {
    // 数据
    token,
    userInfo,
    
    // 方法
    setToken,
    setUserInfo,
    login,
    logout,
    clearUserInfo,
    updateUserInfo,
    restoreLogin,
	
	// 导出计算属性
	isLoggedIn,  
	userName,
  };
});