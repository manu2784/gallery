import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ImageGrid from "./components/grid/ImageGrid";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SingleImage from "./components/image/SingleImage";
import HomeIcon from "@material-ui/icons/Home";

// CSS-in-JSS
const useStyles = makeStyles({
  root: {
    paddingTop: 20,
    paddingBottom: 20
  },
  home: {
    color: "white",
    textDecoration: "none"
  },
  largeIcon: {
    verticalAlign: "text-bottom",
    marginRight: "5"
  }
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Container fixed classes={{ root: classes.root }}>
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <Link to="/" className={classes.home}>
                <HomeIcon className={classes.largeIcon} />
                Home
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
        <Route path="/" exact component={ImageGrid} />
        <Route path="/image/:id" exact component={SingleImage} />
      </Container>
    </Router>
  );
}

export default App;
