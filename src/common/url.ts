import { Utils } from './utils'

export class Url {
  public url: string

  constructor(url: string) {
    this.url = url
  }

  /**
   * get方法参数拼接
   * @param params 参数
   */
  public get(params?: object): string {
    if (!params) return this.url
    if (!Utils.isObject(params)) {
      throw 'The params expectation is an object'
    }
    let queryItems: string[] = []

    for (let [key, val] of Object.entries(params)) {
      if (val === null || typeof val === 'undefined') {
        continue
      }

      let tempValue: any[]
      if (Utils.isArray(val)) {
        tempValue = val
        key += '[]'
      } else {
        //把其它类型参数放入数组中 统一处理
        tempValue = [val]
      }

      tempValue.forEach(item => {
        if (Utils.isDate(item)) {
          item = item.toISOString()
        } else if (Utils.isObject(item)) {
          item = JSON.stringify(item)
        }

        queryItems.push(`${this.encode(key)}=${this.encode(item)}`)
      })
    }

    let query = queryItems.join('&')

    if (query) {
      //丢弃url中的hash标记
      const index = this.url.indexOf('#')
      if (index !== -1) {
        this.url = this.url.slice(0, index)
      }

      this.url += this.url.includes('?') ? '&' : '?' + query
    }

    return this.url
  }

  public encode(query: string) {
    return encodeURIComponent(query)
      .replace(/%40/g, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']')
  }
}
