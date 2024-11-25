export const cardReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: action.payload };

    case 'ADD_TO_CART':
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      break;
  }
};

/*   
use reducer is more scalable than useState
It ensures that functionality is added one place
it's easy to maintain




*/
