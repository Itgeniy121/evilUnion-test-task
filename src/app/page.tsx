'use client';
import Header from '@/components/layouts/Header';
import Main from '@/components/sections/Home/Main';
import { CircularProgress } from '@mui/material';
import usePokemons from '@/hooks/usePokemons';
export default function Home() {
  const { isLoading } = usePokemons();
  return (
    <div className="main__container flex flex-col justify-center items-center relative">
      {isLoading ? (
        <CircularProgress className="mt-[300px] !size-[50px]" />
      ) : (
        <div className="mt-[100px] sm:w-[640px] sm:px-[30px] md:w-[768px] md:px-[30px] lg:w-[1024px] xl:w-[1280px] xl:px-[150px]  w-[340px] px-[0]">
          <Header />
          <Main />
        </div>
      )}
    </div>
  );
}
