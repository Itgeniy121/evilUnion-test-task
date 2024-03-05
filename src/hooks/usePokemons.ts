'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useAuth() {
  const [pokemons, setPokemons] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then((pokemons: any) => {
        setPokemons(pokemons?.data?.results);
        setIsLoading(false);
      });
  }, []);

  return { pokemons, isLoading };
}
