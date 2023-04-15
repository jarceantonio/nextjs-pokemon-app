import { Card, Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCardPokemon } from "./";

interface Props {
  favoritePokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
