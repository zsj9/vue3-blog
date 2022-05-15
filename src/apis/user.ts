// 导入axios实例
import httpRequest from '@/request/index'

// 
interface User {
	id: string
	username: string
	password: string
	token: string
	created_at: string
	updated_at: string
	deleted_at: string
}

interface ResultParams {
	code: number | string
	msg : string
	data: User
}

// 定义接口的传参
interface UserParam {
	username: string
	password: string
}

// 注册用户
export const addUser = (param: UserParam): Promise<ResultParams> => {
  return httpRequest({
		url: 'user/register',
		method: 'post',
		data: param,
	})
}

// 登录
export const userLogin = (param: UserParam): Promise<ResultParams> => {
  return httpRequest({
		url: 'user/login',
		method: 'post',
		data: param,
	})
}
