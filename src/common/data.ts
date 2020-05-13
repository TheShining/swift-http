import { Utils } from './utils'

export class Data {
  /**
   * 对请求数据的处理
   * @param data 请求数据
   */
  public static tansformRequest(data: any): any {
    if (Utils.isObject(data)) {
      return JSON.stringify(data)
    }
    return data
  }

  public static tansformResponse(data: any): any {
    if (typeof data === 'string') {
      try {
        JSON.parse(data)
      } catch (error) {
        //
      }
    }
    return data
  }
}
