import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true }); //to hide side bar in mobile view

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg="blue.500">
        NavBar
      </GridItem>

      {showSideBar && (
        <GridItem area="aside" bg="green.500">
          Aside
        </GridItem>
      )}

      <GridItem area="main" bg="yellow.500">
        Main Content
      </GridItem>

      <GridItem area="footer" bg="red.500">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
