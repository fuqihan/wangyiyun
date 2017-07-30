/*
 * action 类型
 */

export const MUSIC_URL = 'MUSIC_URL'

/*
 * 其它的常量
 */

/*
 * action 创建函数
 */

export function musicUrl(url) {
    return { type: MUSIC_URL, url}
}
