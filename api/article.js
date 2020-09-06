import { request } from '@/plugins/request'

/**
 * 获取文章列表
 * @param {*} params 
 */
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

/**
 * 获取用户关注文章列表
 * @param {*} params 
 */
export const getYourArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

export const onFavoritedArticle = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

export const deleteFavoritedArticle = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

export const createArticle = data => {
    return request({
        method: 'POST',
        url: `/api/articles`,
        data
    })
}

export const updateArticle = (data, slug) => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data
    })
}

export const deleteArticle = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`
    })
}

export const getCommentsFromArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

export const addCommentsToArticle = (slug, data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}

export const deleteComment = (slug, id) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`
    })
}