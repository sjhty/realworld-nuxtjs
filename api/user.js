import { request } from '@/plugins/request'

/**
 * 用户登录
 * @param {*} data 
 */
export const login = data => {
    return request({
        method: 'POST',
        url: '/api/users/login',
        data
    })
}

/**
 * 用户注册
 * @param {*} data 
 */
export const register = data => {
    return request({
        method: 'POST',
        url: '/api/users',
        data
    })
}

export const getUser = () => {
    return request({
        method: 'GET',
        url: '/api/user'
    })
}

export const updateUser = data => {
    return request({
        method: 'PUT',
        url: '/api/user',
        data
    })
}