// 导入axios实例
import httpRequest from '@/request/index'

// 
interface Tag {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

interface ResultParams {
  code: number | string
  message: string
  data: Tag
}

// 定义接口的传参
interface addTagParam {
  name: string
}

interface pagingParam {
  pageSize: 20,
  currentPage: 1
}

// 新增
export const addTag = (param: addTagParam): Promise<ResultParams> => {
  return httpRequest({
    url: 'tag/add',
    method: 'post',
    data: param,
  })
}


export const getTaglist = (param: pagingParam): Promise<ResultParams> => {
  return httpRequest({
    url: 'tag/list',
    method: 'post',
    data: param,
  })
}