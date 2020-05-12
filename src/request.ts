import { RequestConfig } from './types'

export function request(config: RequestConfig) {
  const { url, method = 'get', data = null, headers = {} } = config

  const xhr = new XMLHttpRequest()

  xhr.open(method.toUpperCase(), url, true)
  for (const [key, val] of Object.entries(headers)) {
    xhr.setRequestHeader(key, val)
  }

  xhr.send(data)
}
