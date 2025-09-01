import {
  Box,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { GenreUpdated } from "./hooks/useGenreUpdated";
import PlatformSelector from "./components/PlatformSelector";
import type { platform } from "./hooks/useGamesUpdated";

export interface GameQuery {
  genre: GenreUpdated | null;
  platform: platform | null;
}

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true }); //to hide side bar in mobile view

  //Creating more useStates is not a best practise. So we create Query objects to avoid this.
  // const [selectedGenre, setSelectedGenre] = useState<GenreUpdated | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" position={"sticky"} top={0} zIndex={1}>
        <NavBar />
      </GridItem>

      {showSideBar && (
        <GridItem
          area="aside"
          paddingX={5}
          position={"sticky"}
          top={0}
          height={"90vh"}
          overflowY={"auto"}
          css={{
            // Hide scrollbar
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
          }}
        >
          <GenreList
            onSelectedGenre={(genre: GenreUpdated) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      )}

      <GridItem area="main" paddingY={5}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform: platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

      <GridItem area="footer" bg="red.500" w="full">
        <Box w="full" textAlign="center" p={4}>
          Footer
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
