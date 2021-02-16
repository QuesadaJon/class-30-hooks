import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ quote, name, image }) => (
  <figure>
    <p>{name}</p>
    <img src={image} alt={name} />
    <figcaption>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;
