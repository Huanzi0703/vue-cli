/** 
 * axios网络请求配置
 * Created by aerfa on 2018/8/9.
 */
import axios from 'axios'
import Vue from 'vue'
import router from '../router/index.js';
console.log(localStorage.token,'====')

//封装get请求
export function get(url, data = {}) {

    // 请求配置项
    var instance = axios.create({
        headers:{
            'Teacher-Version': '2.1.1',
            "X-API-KEY":localStorage.token ? localStorage.token : ''
        },
        timeout: 8000,
        baseURL: ''      //接口地址
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        return config;
    },error => {
        return Promise.reject(error);
    })

    //响应拦截器
    instance.interceptors.response.use(
        res => {
            return res.data
        },
        error => {
            return Promise.reject(error);
        }
    )

    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err)
        })
    })
}

//封装post请求
export function post(url, data = {}) {

    // 请求配置项
    var instance = axios.create({
        headers:{
            'Teacher-Version': '2.1.1',
            "X-API-KEY":localStorage.token ? localStorage.token : ''
        },
        timeout: 8000,
        baseURL: ''      //接口地址
    })

    //请求拦截器
    instance.interceptors.request.use(config => {
        return config;
    },error => {
        return Promise.reject(error);
    })

    //响应拦截器
    instance.interceptors.response.use(
        res => {
            return res.data
        },
        error => {
            return Promise.reject(error);
        }
    )

    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            //登录超时
            if(response.type == "expired"){
                router.push({path: "/"})
            }else{
                resolve(response);
            }
        }).catch(err =>{
            reject(err);
        });
    })
}