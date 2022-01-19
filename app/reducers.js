import { combineReducers } from 'redux'
import * as types from './types'

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}
function removeFunc(state, city) {

  let newArr = state.slice()
  let index = newArr.findIndex(el => el === city)
  return newArr.splice(index, 1)
}

//FAVORITES REDUCER
const favoritesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload]
    case types.REMOVE:
      return removeFunc(state, payload)
    default:
      return state
  }
}


// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  favorites: favoritesReducer
}

export default combineReducers(reducers)
