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
	message: string
	data: Userinfo
}

// 上传用户图片
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function userinfoUpload(param: any): Promise<ResultParams> {
	return httpRequest({
		url: 'userinfo/upload',
		method: 'post',
		data: param,
		headers: {
			"content-type": "multipart/form-data"
		}
	})
}

// export function findUserinfo(param: { user_id: string }): Promise<ResultParams> {
// 	return httpRequest({
// 		url: 'userinfo/find',
// 		method: 'post',
// 		data: param,
// 	})
// }
