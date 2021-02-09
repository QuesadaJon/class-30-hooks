import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findDetailsByVillager } from '../services/animalCrossingApi';

export default function ByVillagerDetails() {
  const [villager, setVillager] = useState({});
  const { id } = useParams();

  useEffect(() => {
    findDetailsByVillager(id)
      .then((villager) => setVillager(villager));
  }, []);

  const { name, image, quote, personality, species, birthday } = villager;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image}/>
      <figcaption>
        <p>{quote}</p>
        <p>{personality}</p>
        <p>{species}</p>
        <p>{birthday}</p>
      </figcaption>
      <Link to="/">List Page</Link>
    </div>
  );
}
