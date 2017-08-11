import { combineReducers } from 'redux'
import { MUSIC_URL,LOGIN_INFO, FOODER_MUSIC,MODAL_SONG_LIST } from '../action/actions.js'
let fooderMusicState = {
  name: '',
  ar: '',
  al: '',
  id:  '',
  index: '',
}

function musicUrl(state = '', action) {
  switch (action.type) {
    case MUSIC_URL:
      return action.url
    default:
      return state
  }
}

function loginInfo(state = {}, action){
  switch (action.type) {
    case LOGIN_INFO:
      return action.info
    default:
      return state
  }
}

function fooderMusic(state = fooderMusicState, action){
  switch (action.type) {
    case FOODER_MUSIC:
      return action.data
    default:
      return state
  }
}

function modalSongList(state = [], action){
  switch (action.type) {
    case MODAL_SONG_LIST:
      return action.list
    default:
      return state
  }
}


const todoApp = combineReducers({
  musicUrl,
  loginInfo,
  fooderMusic,
  modalSongList
})

export default todoApp
