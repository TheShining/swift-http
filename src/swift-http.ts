import { RequestConfig } from './types'
import { request } from './request'
import { Url } from './common/url'
import { Data } from './common/data'

function swiftHttp(config: RequestConfig) {
  preConfig(config)
  request(config)
}

/**
 * 预处理请求配置
 * @param config 请求配置
 */
function preConfig(config: RequestConfig): void {
  const { url, method, data, params } = config

  let processUrl = new Url(url)

  config.url = processUrl.get(params)
  config.data = Data.tansformRequest(data)
}

export default swiftHttp
