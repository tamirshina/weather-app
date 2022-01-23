import { combineReducers } from 'redux'
import * as types from './types'

// INITIAL CITY STATE
const initialCityState = {
  cityId: 215854,
  cityName: 'Tel-Aviv',
}

//CITY REDUCER
const displayedCityReducer = (state = initialCityState, { type, payload }) => {
  switch (type) {
    case types.CHANGE:
      return {
        cityId: payload.cityId,
        cityName: payload.cityName
      }
    default:
      return state
  }
}
// COMBINED REDUCERS
const reducers = {
  cityData: displayedCityReducer
}

export default combineReducers(reducers)
