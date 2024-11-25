import { useEffect, useState } from 'react';
import { ProductsPropTypes } from './productTypesDeclartion/ProductsTypes';

export function Card({ state, dispatch }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [total, setTotal] = useState(0);

  const { cart } = state;

  const changeQty = (id, qty) => {
    dispatch({
      type: 'CHANGE_CART_QTY',
      payload: { id, qty },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1050); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check screen size on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    backgroundColor: '#ececec',
    padding: 10,
    width: isSmallScreen ? '17rem' : '20%',
  };
  return (
    <div style={containerStyle}>
      <b style={{ fontSize: 30, alignSelf: 'center' }}>Cart</b>
      <b style={{ alignSelf: 'center' }}>Subtotal: $ {total}</b>

      <div style={{ marginTop: '1.2rem' }}>
        {cart?.length > 0 ? (
          cart.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto',
                border: '1px solid grey',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                marginBottom: '1rem',
              }}
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{
                  height: '150px',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}
              />
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: '#333',
                  }}
                >
                  {prod.title}
                </span>
                <b
                  style={{
                    color: '#e53935',
                    fontSize: '1rem',
                  }}
                >
                  $ {prod.price}
                </b>
              </div>

              {/* quatity */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  marginTop: 5,
                  marginBottom: 5,
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() => changeQty(prod.id, prod.qty - 1)}
                >
                  -
                </button>
                <span>{prod.qty}</span>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() => changeQty(prod.id, prod.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 10, alignSelf: 'center' }}>
            Cart is empty
          </span>
        )}
      </div>
    </div>
  );
}

Card.propTypes = ProductsPropTypes;
