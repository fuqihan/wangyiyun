import { combineReducers } from 'redux'
import { MUSIC_URL,LOGIN_INFO, FOODER_MUSIC } from '../action/actions.js'
let fooderMusicState = {
  name: '',
  ar: '',
  al: '',
  id:  '',
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


const todoApp = combineReducers({
  musicUrl,
  loginInfo,
  fooderMusic
})

export default todoApp
