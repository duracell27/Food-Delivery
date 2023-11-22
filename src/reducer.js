export const initialState = {
  cart: null,
  total: null,
};

export const actionTypes = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_CART: {

        console.log('state', state)
        console.log('state cart', action.cart)
        return {
          ...state,
          cart: action.cart,
        };
      };
    case actionTypes.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    default:
      return state;
  }
};

export default reducer;
