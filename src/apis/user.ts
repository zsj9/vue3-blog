// 导入axios实例
import httpRequest from '@/request/index'

// 定义接口的传参
interface UserInfoParam {
  name: string,
	username: string,
	password: string
}

// 获取用户信息
export function addUserInfo(param: UserInfoParam) {
  return httpRequest({
		url: 'user/register',
		method: 'post',
		data: param,
	})
}
