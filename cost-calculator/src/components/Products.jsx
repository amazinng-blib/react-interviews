import { useEffect, useState } from 'react';
import { ProductsPropTypes } from './productTypesDeclartion/ProductsTypes';

export const Products = ({ state, dispatch }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { products, cart } = state; // Fixing the destructured property names

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1050);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: isSmallScreen ? '100%' : '75%',
  };
  const productStyle = {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: '0 auto',
    gap: 5,
  };

  const productCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    border: '1px solid grey',
    width: isSmallScreen ? '13rem' : '16rem',
    marginTop: 10,
    gap: 10,
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2>Products</h2>

      <div style={productStyle}>
        {products?.map((prod) => (
          <div key={prod.id} style={productCardStyle}>
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{ height: 200, objectFit: 'cover' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>{prod.title}</span>
              <b>$ {prod.price}</b>
            </div>

            {cart?.some((p) => p.id === prod.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: '#e53935',
                  color: 'white',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: 'green',
                  color: 'white',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      thumbnail: prod.thumbnail,
                      qty: 1,
                      price: prod.price,
                    },
                  })
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = ProductsPropTypes;
