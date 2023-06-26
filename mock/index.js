import Mock from 'mockjs'
import { dataRes } from './funct/route'
import { loginRes } from './funct/login'


Mock.mock(/\/routelist/, 'get', dataRes)
Mock.mock(/\login/ , 'get' , loginRes)