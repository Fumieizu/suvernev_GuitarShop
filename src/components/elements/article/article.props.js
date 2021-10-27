import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
}).isRequired;
