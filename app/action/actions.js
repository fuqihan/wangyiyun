/*
 * action 类型
 */

export const MUSIC_URL = 'MUSIC_URL'
export const LOGIN_INFO = 'LOGIN_INFO'
export const FOODER_MUSIC = 'FOODER_MUSIC'
export const MODAL_SONG_LIST = 'MODAL_SONG_LIST'

/*
 * 其它的常量
 */

/*
 * action 创建函数
 */

export function musicUrl(url) {
    return { type: MUSIC_URL, url}
}
export function loginInfo(info){
    return { type: LOGIN_INFO, info }
}
export function fooderMusic(data){
    return { type: FOODER_MUSIC, data }
}
export function modalSongList(list){
    return { type: MODAL_SONG_LIST, list }
}
