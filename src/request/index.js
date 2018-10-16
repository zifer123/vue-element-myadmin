import Axios from 'axios'
// import { Message } from 'element-ui'
import config from '../config'

// 创建实例
const service = Axios.create({
  baseURL: config.baseUrl, // api 的 base_url
  timeout: 5000 // request timeout
})

export default service
