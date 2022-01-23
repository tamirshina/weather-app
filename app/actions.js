import * as types from './types'

export const changeCity = (cityId, cityName) => (dispatch) =>
  dispatch({
    type: types.CHANGE,
    payload: { cityId, cityName },
  })

