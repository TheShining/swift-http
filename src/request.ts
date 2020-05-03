import { RequestConfig } from './types'

export function request(config: RequestConfig) {
  const { url, method = 'get', data = null } = config

  const xhr = new XMLHttpRequest()

  xhr.open(method.toUpperCase(), url, true)

  xhr.send(data)
}
