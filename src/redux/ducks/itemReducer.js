import axios from "axios";

const GET_ITEMS = "GET_ITEMS";
const GET_MENS_ITEMS = "GET_MENS_ITEMS";
const GET_MENS_HOODIES = "GET_MENS_HOODIES";
const GET_MENS_JOGGERS = "GET_MENS_JOGGERS";
const GET_MENS_SHIRTS = "GET_MENS_SHIRTS";
const GET_MENS_SWEATER = "GET_MENS_SWEATER";
const GET_MENS_SWIM = "GET_MENS_SWIM";
const GET_WOMENS_PANTS = "GET_WOMENS_PANTS";
const GET_WOMENS_SHORTS = "GET_WOMENS_SHORTS";
const GET_WOMENS_TOPS = "GET_WOMENS_TOPS";
const GET_DRESS = "GET_DRESS";
const GET_WOMENS_SWIM = "GET_WOMENS_SWIM";
const GET_WOMENS_ITEMS = "GET_WOMENS_ITEMS";

export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get(`/api/allItems`)
  };
}
export function getMensItems() {
  return {
    type: GET_MENS_ITEMS,
    payload: axios.get(`/api/mens`)
  };
}

export function getMensHoodies() {
  return {
    type: GET_MENS_HOODIES,
    payload: axios.get(`/api/mens/hoodies`)
  };
}

export function getMensJoggers() {
  return {
    type: GET_MENS_JOGGERS,
    payload: axios.get(`/api/mens/joggers`)
  };
}

export function getMensShirts() {
  return {
    type: GET_MENS_SHIRTS,
    payload: axios.get(`/api/mens/shirts`)
  };
}

export function getMensSweaters() {
  return {
    type: GET_MENS_SWEATER,
    payload: axios.get(`/api/mens/sweater`)
  };
}

export function getMensSwim() {
  return {
    type: GET_MENS_SWIM,
    payload: axios.get(`/api/mens/swimwear`)
  };
}

export function getWomansPants() {
  return {
    type: GET_WOMENS_PANTS,
    payload: axios.get(`/api/womens/pants`)
  };
}

export function getWomansShorts() {
  return {
    type: GET_WOMENS_SHORTS,
    payload: axios.get(`/api/womens/shorts`)
  };
}

export function getWomansTops() {
  return {
    type: GET_WOMENS_TOPS,
    payload: axios.get(`/api/womens/tops`)
  };
}

export function getDress() {
  return {
    type: GET_DRESS,
    payload: axios.get(`/api/womens/dress`)
  };
}

export function getWomansSwim() {
  return {
    type: GET_WOMENS_SWIM,
    payload: axios.get(`/api/womens/swimwear`)
  };
}

export function getWomansItems() {
  return {
    type: GET_WOMENS_ITEMS,
    payload: axios.get(`/api/women`)
  };
}

const initialState = {
  items: [],
  isLoading: false
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    //ALL ITEMS
    case `${GET_ITEMS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_ITEMS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_ITEMS}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS ITEMS
    case `${GET_MENS_ITEMS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_ITEMS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_ITEMS}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS HOODIES
    case `${GET_MENS_HOODIES}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_HOODIES}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_HOODIES}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS JOGGERS
    case `${GET_MENS_JOGGERS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_JOGGERS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_JOGGERS}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS SHIRT
    case `${GET_MENS_SHIRTS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_SHIRTS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_SHIRTS}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS SWEATERS
    case `${GET_MENS_SWEATER}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_SWEATER}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_SWEATER}_REJECTED`:
      return { ...state, isLoading: false };
    //MENS SWIMWEAR
    case `${GET_MENS_SWIM}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_MENS_SWIM}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_MENS_SWIM}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMENS PANTS
    case `${GET_WOMENS_PANTS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_WOMENS_PANTS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_WOMENS_PANTS}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMANS SHORTS
    case `${GET_WOMENS_SHORTS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_WOMENS_SHORTS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_WOMENS_SHORTS}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMENS TOPS
    case `${GET_WOMENS_TOPS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_WOMENS_TOPS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_WOMENS_TOPS}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMENS DRESS
    case `${GET_DRESS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_DRESS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_DRESS}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMENS SWIM
    case `${GET_WOMENS_SWIM}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_WOMENS_SWIM}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_WOMENS_SWIM}_REJECTED`:
      return { ...state, isLoading: false };
    //WOMEN ITEMS
    case `${GET_WOMENS_ITEMS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_WOMENS_ITEMS}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload.data };
    case `${GET_WOMENS_ITEMS}_REJECTED`:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
