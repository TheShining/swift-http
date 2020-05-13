import { RequestConfig, swiftHttpPromise, Response } from './types'
import { Headers } from './common/headers'

export function request(config: RequestConfig): swiftHttpPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers = {}, responseType } = config

    const xhr = new XMLHttpRequest()

    if (responseType) {
      xhr.responseType = responseType
    }

    xhr.open(method.toUpperCase(), url, true)

    xhr.onreadystatechange = function handleLoad() {
      if (xhr.readyState !== 4) {
        return
      }

      const responseHeaders = Headers.parseResponseHeaders(xhr.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? xhr.response : xhr.responseText
      const response: Response = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config,
        xhr
      }
      resolve(response)
    }

    for (const [key, val] of Object.entries(headers)) {
      xhr.setRequestHeader(key, val)
    }

    xhr.send(data)
  })
}
