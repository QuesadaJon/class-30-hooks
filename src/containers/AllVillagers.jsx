import React, { useEffect, useState } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { getVillagers } from '../services/animalCrossingApi';

const AllVillagers = () => {
  const [villagers, setVillager] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getVillagers().then((villagers) => {
      setVillager(villagers);
      setLoading(false);
    });
  }, []);
  
  if(loading) return <h1>Loading...</h1>;
  return <VillagerList villagers={villagers}/>;
};

export default AllVillagers;
