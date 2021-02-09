import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';

const Villager = ({ _id, quote, name, image }) => (
  <figure>
    <p>{name}</p>
    <BrowserRouter>
      <Link to={`/${_id}`}>
        <img src={image} alt={name} />
      </Link>
    </BrowserRouter>
    <figcaption>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  _id: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Villager;
