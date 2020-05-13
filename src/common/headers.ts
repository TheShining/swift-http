import { Utils } from './utils'

export class Headers {
  /**
   * 通过请求数据data设置默认请求头
   * @param headers 请求头
   * @param data 请求数据
   */
  public static setByData(headers: any = {}, data: any): object {
    if (!Utils.isObject(headers)) {
      throw 'The headers expectation is an object'
    }
    if (!Utils.isObject(data)) return headers

    let keyList: string[] = Object.keys(headers)
    if (keyList.length !== 0) {
      if (Utils.isObject(data)) {
        for (let [key, val] of Object.entries(headers)) {
          if (key.toLowerCase() !== 'content-type') {
            headers['Content-Type'] = 'application/json; charset=UTF-8'
          }
        }
      }
    } else {
      headers['Content-Type'] = 'application/json; charset=UTF-8'
    }
    return headers
  }

  /**
   * 解析返回头
   * @param responseHeaders 返回头数据
   */
  public static parseResponseHeaders(responseHeaders: string): object {
    let headersObject: any = {}
    if (!responseHeaders) {
      return headersObject
    }

    responseHeaders.split('\r\n').forEach(header => {
      let [key, val] = header.split(':')
      key = key.trim()
      if (key) {
        if (val) {
          val = val.trim()
        }
        headersObject[key] = val
      }
    })
    return headersObject
  }
}
