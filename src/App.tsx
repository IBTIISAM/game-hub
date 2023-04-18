import { Grid, grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import PlatformSellector from "./components/PlatformSellector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
  //console.log(selectedGenre);
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            sellectedGenre={gameQuery.genre}
            onSelecGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSellector
          sellectedPlatform={gameQuery.platform}
          onSellectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        ></PlatformSellector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
