// ProductsPropTypes.js
import PropTypes from 'prop-types';

export const ProductsPropTypes = {
  state: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        brand: PropTypes.string,
        category: PropTypes.string,
        availabilityStatus: PropTypes.string,
      })
    ),
    cart: PropTypes.array, // Validate cart if needed
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
