import {
  Box,
  Flex,
  Grid,
  grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import PlatformSellector from "./components/PlatformSellector";
import SortSellector from "./components/SortSellector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
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
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSellector
                sellectedPlatform={gameQuery.platform}
                onSellectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSellector>
            </Box>

            <SortSellector
              sortOrder={gameQuery.sortOrder}
              onSellectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSellector>
          </Flex>
        </Box>

        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
