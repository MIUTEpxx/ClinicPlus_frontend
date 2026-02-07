import { useUserStore, type UserInfo, UserRole, UserStatus, UserGender } from '@/store/user';

/**
 * 模拟登录Hook
 * 用于开发阶段的快速登录，避免重复请求登录接口
 */
export const useMockLogin = () => {
  const userStore = useUserStore();

  /**
   * 模拟患者登录
   */
  const mockLoginAsPatient = () => {
    const mockUser: UserInfo = {
      id: 10001,
      openid: 'mock_openid_patient_001',
      unionid: 'mock_unionid_001',
      nickname: '健康守护者',
      avatar: '/static/avatars/default-avatar.png',
      phone: '13800138000',
      gender: UserGender.MALE,
      status: UserStatus.NORMAL,
      roles: 'patient',
      current_role: UserRole.PATIENT,
      register_time: '2024-01-15T10:30:00Z',
      last_login_time: '2024-02-07T14:20:00Z',
      update_time: '2024-02-07T14:20:00Z',
    };

    const loginData = {
      token: 'mock_jwt_token_for_patient_' + Date.now(),
      user: mockUser,
    };

    userStore.login(loginData);
    uni.showToast({
      title: '患者模拟登录成功',
      icon: 'success',
      duration: 2000,
    });
  };

  /**
   * 模拟医生登录
   */
  const mockLoginAsDoctor = () => {
    const mockUser: UserInfo = {
      id: 20001,
      openid: 'mock_openid_doctor_001',
      unionid: 'mock_unionid_001',
      nickname: '张医生',
      avatar: '/static/avatars/doctor-avatar.png',
      phone: '13900139000',
      gender: UserGender.MALE,
      status: UserStatus.NORMAL,
      roles: 'doctor,patient',
      current_role: UserRole.DOCTOR,
      register_time: '2023-11-20T09:15:00Z',
      last_login_time: '2024-02-07T15:45:00Z',
      update_time: '2024-02-07T15:45:00Z',
    };

    const loginData = {
      token: 'mock_jwt_token_for_doctor_' + Date.now(),
      user: mockUser,
    };

    userStore.login(loginData);
    uni.showToast({
      title: '医生模拟登录成功',
      icon: 'success',
      duration: 2000,
    });
  };

  /**
   * 模拟管理员登录
   */
  const mockLoginAsAdmin = () => {
    const mockUser: UserInfo = {
      id: 30001,
      openid: 'mock_openid_admin_001',
      unionid: 'mock_unionid_001',
      nickname: '系统管理员',
      avatar: '/static/avatars/admin-avatar.png',
      phone: '13700137000',
      gender: UserGender.UNKNOWN,
      status: UserStatus.NORMAL,
      roles: 'admin,patient',
      current_role: UserRole.ADMIN,
      register_time: '2023-10-10T08:00:00Z',
      last_login_time: '2024-02-07T16:30:00Z',
      update_time: '2024-02-07T16:30:00Z',
    };

    const loginData = {
      token: 'mock_jwt_token_for_admin_' + Date.now(),
      user: mockUser,
    };

    userStore.login(loginData);
    uni.showToast({
      title: '管理员模拟登录成功',
      icon: 'success',
      duration: 2000,
    });
  };

  /**
   * 切换用户角色
   */
  const switchUserRole = (role: UserRole) => {
    if (!userStore.userInfo) {
      uni.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000,
      });
      return;
    }

    if (!userStore.userInfo.roles.includes(role)) {
      uni.showToast({
        title: '该用户无此角色权限',
        icon: 'none',
        duration: 2000,
      });
      return;
    }

    userStore.updateUserInfo({ current_role: role });
    uni.showToast({
      title: `已切换为${getRoleName(role)}身份`,
      icon: 'success',
      duration: 2000,
    });
  };

  /**
   * 获取角色名称
   */
  const getRoleName = (role: UserRole): string => {
    const roleMap = {
      [UserRole.ADMIN]: '管理员',
      [UserRole.DOCTOR]: '医生',
      [UserRole.PATIENT]: '患者',
    };
    return roleMap[role] || '未知';
  };

  /**
   * 获取当前用户角色名称
   */
  const getCurrentRoleName = () => {
    if (!userStore.userInfo) return '未登录';
    return getRoleName(userStore.userInfo.current_role);
  };

  /**
   * 退出登录
   */
  const logout = () => {
    userStore.logout();
    uni.showToast({
      title: '已退出登录',
      icon: 'success',
      duration: 2000,
    });
  };

  return {
    mockLoginAsPatient,
    mockLoginAsDoctor,
    mockLoginAsAdmin,
    switchUserRole,
    logout,
    getCurrentRoleName,
  };
};