import React from "react";
import { withStyles } from "@material-ui/styles";
import { GridList, GridListTile, TablePagination } from "@material-ui/core/";
//import SingleImage from "../image/SingleImage";
import { Link } from "react-router-dom";

const styles = () => ({
  topRoot: {
    marginTop: 100
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  toolbar: {
    width: "100%",
    backgroundColor: "#ebe7eb99"
  },
  paginationRoot: {
    width: "100% !important",
    overflowX: "hidden",
    height: "auto !important",
    paddingTop: 20
  },
  spacer: {
    display: "none"
  },
  hideSkeleton:{
    display:"none"
  }
});

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      loading: true,
      page: 0,
      imagesPerPage: 12
    };
  }

  handleChangePage = (event, newPage) => {
    console.log(newPage);
    this.setState({ page: newPage });
    // this.getImages();
  };

  handleChangeRowsPerPage = event => {
    this.setState({ imagesPerPage: event.target.value, page: 0 });
    // this.getImages();
  };

  getImages() {
    // get images
    fetch(
      "https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&page=" +
        (this.state.page + 1) +
        "&per_page=" +
        this.state.imagesPerPage
    )
      .then(res => res.json())
      .then(body => {
        this.setState({
          images: body.hits,
          loading: false,
          imageCount: body.totalHits
        });
      });
  }
  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.imagesPerPage !== prevState.imagesPerPage
    )
      this.getImages();
  }

  render() {
    //  if(this.state.images)
    // console.log(this.state.images[0]);
    const { classes } = this.props;
    return (
      <div className={classes.topRoot}>
        <GridList cellHeight={160} className={classes.gridList} cols={3} >
          {this.state.images &&
            this.state.images.map(img => (
             <GridListTile key={img.id} cols={1}>
               <Link to={`/image/${img.id}`}> <img src={img.largeImageURL} alt={img.id} /></Link>
              </GridListTile>
            ))}
          <TablePagination
            classes={{
              toolbar: classes.toolbar,
              root: classes.paginationRoot,
              spacer: classes.spacer
            }}
            rowsPerPageOptions={[6, 12, 24]}
            component="div"
            count={this.state.images ? this.state.imageCount : 0}
            rowsPerPage={this.state.imagesPerPage}
            page={this.state.page}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </GridList>
    
      </div>
    );
  }
}

export default withStyles(styles)(ImageGrid);
