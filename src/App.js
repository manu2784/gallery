import React from "react";
import "./App.css";
import ImageGrid from "./components/grid/ImageGrid";
import { Container, AppBar, Toolbar } from "@material-ui/core";

function App() {
  return (
    <Container fixed>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>{/* content */}</Toolbar>
        </Container>
      </AppBar>
      <ImageGrid />
    </Container>
  );
}

export default App;
