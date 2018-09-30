import axios from 'axios';
import { message } from 'antd';
import { API_HOST } from './config'
axios.defaults.baseURL = API_HOST

const msg = '接口错误'
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */

export const get = (url) => {
  return axios.get(url).then(res => res.data).catch(err => {
    message.warn(msg)
  })
}

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 */
export const post = (url, data = {}) => {
  console.log('data', data)
  return axios.post(url, data).then(res => res.data).catch(err => {
    message.warn(msg);
  })
}