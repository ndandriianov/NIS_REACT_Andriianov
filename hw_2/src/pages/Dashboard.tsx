import React, { useEffect, useMemo, useState } from 'react';
import PetCard from '../components/PetCard/PetCard';
import { useEventLog } from '../hooks/useEventLog';
import petsData from '../data/pets.json';
import { Select, MenuItem, Skeleton, InputLabel, FormControl } from '@mui/material';

const Dashboard: React.FC = () => {
  const { addEvent } = useEventLog();

  const [pets, setPets] = useState<typeof petsData>([]);
  const [loading, setLoading] = useState(true);
  const [filterSpecies, setFilterSpecies] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPets(petsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredPets = useMemo(() => {
    return filterSpecies === 'all'
      ? pets
      : pets.filter((pet) => pet.species === filterSpecies);
  }, [pets, filterSpecies]);

  return (
    <div style={{ padding: 20, marginRight: 300 }}>
      <h1>CyberZoo Dashboard</h1>

      <FormControl style={{ minWidth: 180, marginBottom: 20 }}>
        <InputLabel>Фильтр по виду</InputLabel>
        <Select
          value={filterSpecies}
          onChange={(e) => setFilterSpecies(e.target.value)}
          label="Фильтр по виду"
        >
          <MenuItem value="all">Все</MenuItem>
          <MenuItem value="фэнтези">Фэнтези</MenuItem>
          <MenuItem value="bird">Птицы</MenuItem>
          <MenuItem value="orange">Апельсины</MenuItem>
          <MenuItem value="dog">Собаки</MenuItem>
          <MenuItem value="cat">Коты</MenuItem>
        </Select>
      </FormControl>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20
        }}
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} variant="rectangular" width={200} height={260} />
          ))
          : filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onLog={addEvent} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;