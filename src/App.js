import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ImageGrid from "./components/grid/ImageGrid";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SingleImage from "./components/image/SingleImage";

const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container fixed classes={{ root: classes.root }}>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>{/* content */}</Toolbar>
        </Container>
      </AppBar>
      <Router>
      <Route path="/" exact component={ImageGrid} />
      <Route path="/image/:id" exact component={SingleImage} />
      </Router>
    </Container>
  );
}

export default App;
