import axios from 'axios'
import * as config from './config'
import { get, post } from './tools'

export function Login(data) {
  console.log(data)
  return post('/user/login', data)
}