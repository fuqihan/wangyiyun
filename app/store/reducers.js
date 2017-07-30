import { combineReducers } from 'redux'
import { MUSIC_URL } from '../action/actions.js'

function musicUrl(state = '123', action) {
  switch (action.type) {
    case MUSIC_URL:
      return action.url
    default:
      return state
  }
}

const todoApp = combineReducers({
  musicUrl
})

export default todoApp
