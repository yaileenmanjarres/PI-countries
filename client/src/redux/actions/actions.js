export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_INFO = "GET_COUNTRY_INFO";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_ACTIVITY_INFO = "GET_ACTIVITY_INFO";

const URLBACKEND = 'http://localhost:3001'

export function getAllCountries() {
  return async function (dispatch) {
    return fetch(`${URLBACKEND}/countries`)
    .then(res => res.json())
    .then(json => {
      dispatch({ type:GET_ALL_COUNTRIES, payload: json})
    })
  }
}

export function getCountryInfo() {
  
}

export function createActivity() {
  
}

export function getAllActivities() {
  
}

export function getActivityInfo() {
  
}