// request.ts
import operate from './operate.js'

// 定义请求参数类型
interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT'
  data?: any
  header?: Record<string, string>
}

// 定义响应数据类型
interface ResponseData<T = any> {
  code: number
  msg: string
  data: T
  [key: string]: any
}

const http = <T = any>(options: RequestOptions): Promise<ResponseData<T>> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: operate.api() + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Authorization': 'token',
        ...options.header
      },
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        const data = res.data as ResponseData<T>
        
        if (data.code !== 200) {
          uni.showToast({
            title: data.msg,
            icon: 'none'
          })
        }
        
        resolve(data)
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        uni.showToast({
          title: err.errMsg,
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

export default http