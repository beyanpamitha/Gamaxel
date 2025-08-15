import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true }); //to hide side bar in mobile view

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {showSideBar && (
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid />
      </GridItem>

      <GridItem area="footer" bg="red.500">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
