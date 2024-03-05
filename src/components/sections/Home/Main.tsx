'use client';
import Image from 'next/image';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Chip, Stack } from '@mui/material';
import usePokemons from '@/hooks/usePokemons';
const Main = () => {
  const { pokemons } = usePokemons();
  const [prevPokemon, setPrevPokemon] = useState<any>();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then((pokemon: any) => {
      setPrevPokemon(pokemon?.data);
    });
  }, []);
  const getNewPrevPokemon = async (name: string) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((pokemon: any) => {
        setPrevPokemon(pokemon?.data);
      });
  };
  return (
    <div className="flex sm:h-[500px] xl:flex-row flex-col w-full justify-between items-center">
      <div className="w-ful flex flex-col ">
        <Stack
          className="w-[full] !sm:w-[484px]"
          spacing={{ xs: 1, sm: 1 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {pokemons &&
            pokemons.map((pokemon: any) => (
              <Chip
                label={pokemon.name}
                key={pokemon.url}
                color="primary"
                onClick={() => getNewPrevPokemon(pokemon?.name)}
                className="!text-[20px] !h-[60px] font-[500] !rounded-[44px] !px-[20px] bg-[#1986ec] cursor-pointer hover:bg-[#3877b1]"
              />
            ))}
        </Stack>
      </div>
      <div className="bg-black sm:w-[484px] sm:px-[44px] flex flex-col w-full mt-[40px] px-[10px]  h-[500px] pt-[44px] pb-[25px]">
        <div className="flex sm:w-[400px] w-[full] h-[300px] flex-col relative items-start">
          {prevPokemon && (
            <h1 className="text-[#A0A0A0] text-[48px] font-[700] mb-[44px]">
              {prevPokemon?.name}
            </h1>
          )}
          {prevPokemon && (
            <Image
              src={prevPokemon?.sprites?.front_shiny}
              width={1000}
              height={1000}
              alt="pokemon"
              className="w-full h-[300px] absolute top-[20px]"
            />
          )}
        </div>
        <div className="flex flex-col h-[104px] justify-between mt-[44px]">
          {prevPokemon && (
            <p className="text-[17px] text-[#A0A0A0] font-[500]">
              Снялся в {prevPokemon?.base_experience} сериях
            </p>
          )}
          {prevPokemon && (
            <p className="text-[17px] text-[#A0A0A0] font-[500]">
              Id: {prevPokemon?.id}
            </p>
          )}
          {prevPokemon && (
            <p className="text-[17px] text-[#A0A0A0] font-[500]">
              height: {prevPokemon?.height}
            </p>
          )}
          {prevPokemon && (
            <p className="text-[17px] text-[#A0A0A0] font-[500]">
              attak: {prevPokemon?.stats[1].base_stat}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
