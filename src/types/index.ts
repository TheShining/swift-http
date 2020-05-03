type Method =
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'get'
  | 'GET'
  | 'head'
  | 'HEAD'
  | 'patch'
  | 'PATCH'

export interface RequestConfig {
  url: string
  method: Method
  data?: any
  params?: any
}
