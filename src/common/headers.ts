import { Utils } from './utils'

export class Headers {
  /**
   * 通过请求数据data设置默认请求头
   * @param headers 请求头
   * @param data 请求数据
   */
  public static setByData(headers: any, data: any): object {
    if (!headers) return {}
    if (!Utils.isObject(headers)) {
      throw 'The params expectation is an object'
    }
    if (Utils.isObject(data)) {
      for (let [key, val] of Object.entries(headers)) {
        if (key.toLowerCase() === 'content-type') {
          headers['Content-Type'] = 'application/json; charset=UTF-8'
        }
      }
    }

    return headers
  }
}
