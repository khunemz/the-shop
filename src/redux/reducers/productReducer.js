import { types } from "../constants/types"

const initialState = {
  products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case types.SET_PRODUCTS:
    return { ...state, ...payload }
  default:
    return state
  }
}
