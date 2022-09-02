import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_INFO,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY_INFO
} from '../actions/actions'

const initialState = {
  countries: [],
  countryInfo: {},
  activities: [],
  activityInfo: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return state
  }
}

export default rootReducer