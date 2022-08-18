// 导入axios实例
import httpRequest from '@/request/index'

// 
interface User {
	id: string
	username: string
	password: string
	token: string
	createdAt: string
	updatedAt: string
	deletedAt: string
}

interface ResultParams {
	code: number | string
	message: string
	data: User
}

// 定义接口的传参
interface UserRegisterParam {
	name: string
	username: string
	password: string
}

interface UserLoginParam {
	username: string
	password: string
}

// 注册用户
export const userRegister = (param: UserRegisterParam): Promise<ResultParams> => {
	return httpRequest({
		url: 'user/register',
		method: 'post',
		data: param,
	})
}

// 登录
export const userLogin = (param: UserLoginParam): Promise<ResultParams> => {
	return httpRequest({
		url: 'user/login',
		method: 'post',
		data: param,
	})
}
