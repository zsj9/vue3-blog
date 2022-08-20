// 导入axios实例
import httpRequest from '@/request/index'

// 
interface Userinfo {
	_id: string
	userId: string
	name: string
	photoId: string
	avatar: string
	birthAt: Date
	sex: string
	remark: string
	authIds: string
	createdAt: string
	updatedAt: string
	deletedAt: string
}

interface ResultParams {
	code: number | string
	message: string
	data: Userinfo
}

interface updateUserinfoParams {
	_id: string
	name: string
	birthAt: string
	sex: string
	remark: string
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

// 获取当前用户信息
export function getCurrentUserinfo(): Promise<ResultParams> {
	const userid = sessionStorage.getItem('userid');
	return httpRequest({
		url: 'userinfo/find',
		method: 'post',
		data: { userid },
	})
}

// 获取当前用户信息
export function updateUserinfo(param: updateUserinfoParams): Promise<ResultParams> {
	return httpRequest({
		url: 'userinfo/update',
		method: 'post',
		data: param,
	})
}