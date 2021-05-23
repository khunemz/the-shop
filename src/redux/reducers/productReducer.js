import { types } from "../constants/types"

const initialState = {
  products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case types.SET_PRODUCTS:
    return { ...state, products: payload }
  case types.SELECTED_PRODUCT:
    return { ...state, product: payload }
  default:
    return state
  }
}

export const selectedProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case types.SELECTED_PRODUCT:
    return { ...state, ...payload }
  default:
    return state
  }
}
