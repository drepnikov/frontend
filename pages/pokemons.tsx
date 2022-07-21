import * as React from "react";
import { NextPage } from "next";
import Pokemons from "data/pokemons.json";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

interface IPokemonsPageProps {}

const PokemonsPage: NextPage<IPokemonsPageProps> = () => {
  const [pokemons, setPokemons] = useState(Pokemons);
  const [searchValue, setSearchValue] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  // + debouncing
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current);

      if (!searchValue.length) {
        setPokemons(Pokemons);
      } else {
        setPokemons(
          Pokemons.filter((p) => {
            return p.name.toLowerCase().includes(searchValue.toLowerCase());
          })
        );
      }
    }, 300);
  }, [searchValue]);

  return (
    <>
      <label>
        Filter:{" "}
        <input type={"text"} value={searchValue} onChange={onInputChange} />
      </label>
      <ul>
        {pokemons.map((p) => {
          return <li key={p.id}>{p.name}</li>;
        })}
      </ul>
    </>
  );
};

export default PokemonsPage;
