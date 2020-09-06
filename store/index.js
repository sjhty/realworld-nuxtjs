const cookieparser = process.server ? require('cookieparser') : undefined
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把 state 定义为函数，返回数据对象
export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    },

    logOut(state) {
        state.user = null
        Cookie.remove('user')
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}

