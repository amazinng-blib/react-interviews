import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { cardReducer } from './reducers/cardReducer';
import { Products } from './components/Products';
import { Card } from './components/Card';
const App = () => {
  const [state, dispatch] = useReducer(cardReducer, {
    products: [],
    cart: [],
  });

  console.log('p', state);
  const fetchProducts = async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
      }}
    >
      <Products state={state} dispatch={dispatch} />
      <Card state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
