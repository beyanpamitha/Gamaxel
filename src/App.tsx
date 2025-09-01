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

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreUpdated | null>(null);
  const showSideBar = useBreakpointValue({ base: false, lg: true }); //to hide side bar in mobile view

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
            onSelectedGenre={(genre: GenreUpdated) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      )}

      <GridItem area="main" paddingY={5}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
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
