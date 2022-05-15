// 导入axios实例
import httpRequest from '@/request/index'

// 
interface Userinfo {
	id: string
	user_id: string
	name: string
	photo_id: string
	birth_at: string
	sex: string
	auth_ids: string
	created_at: string
	updated_at: string
	deleted_at: string
}

interface ResultParams {
	code: number | string
	msg : string
	data: Userinfo
}

// 定义接口的传参
interface UserInfoParam {
	name: string,
	user_id: string
}

// 新增用户信息
export function addUserinfo(param: UserInfoParam): Promise<ResultParams> {
  return httpRequest({
		url: 'userinfo/add',
		method: 'post',
		data: param,
	})
}

export function findUserinfo(param: { user_id: string }): Promise<ResultParams> {
  return httpRequest({
		url: 'userinfo/find',
		method: 'post',
		data: param,
	})
}
