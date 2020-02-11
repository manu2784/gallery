import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "material-ui-image";

// CSS-in-JSS
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  smallCount: {
    fontSize: "0.7rem"
  },
  images: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}));

export default props => {
  const [image, setImage] = useState({});
  // image id is passed as router param
  const id = props.match.params.id;

  async function getImage() {
    let result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&id=${id}`
    );
    result = await result.json();
    setImage(result.hits[0]);
  }

  // fetches individual image
  useEffect(() => {
    getImage();
  });

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fixed classes={{ root: classes.root }}>
      <Card>
        {/*Show user information -avatar and id*/}
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img
                src={image.userImageURL}
                alt="userImage"
                className={classes.images}
              />
            </Avatar>
          }
          title={image.user}
          subheader={image.user_id}
        />

        {image.fullHDURL && (
          <Image
            src={image.fullHDURL}
            aspectRatio={image.imageWidth / image.imageHeight}
          />
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/*Show image favourites and downloads */}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            <span className={classes.smallCount}>{image.favorites}</span>
          </IconButton>
          <IconButton aria-label="share">
            <MessageIcon />{" "}
            <span className={classes.smallCount}>{image.comments}</span>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Lorem:</Typography>
            <Typography paragraph>
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
            <Typography>
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};
