import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map((villager) => (
    <li key={villager._id}>
      <Villager 
        _id={villager._id}
        image={villager.image}
        name={villager.name}
        quote={villager.quote}
      />
    </li>
  ));

  return <ul data-testid="villagers">{villagerElements}</ul>;
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;
