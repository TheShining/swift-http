import { Utils } from './utils'

export class Data {
  public static tansformRequest(data: any): any {
    if (Utils.isObject(data)) {
      return JSON.stringify(data)
    }
    return data
  }
}
