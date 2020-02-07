import React from "react";
import { withStyles } from '@material-ui/styles';
import {
    GridList,
    GridListTile,
    TablePagination
} from "@material-ui/core/";



const styles = theme => {
    return ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "#fff",
    },

  })}

class ImageGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        images: null,
        loading:true,
        page:1,
        imagesPerPage:12
    }
  }

  handleChangePage = (event, newPage)=>{
      this.setState({page:newPage});
      this.getImages();
  }

  handleChangeRowsPerPage= (event)=>{
        this.setState({imagesPerPage: event.target.value});
        this.getImages();
  }
  
  getImages(){
          // get images 
    fetch("https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&page="+this.state.page+"&per_page="+this.state.imagesPerPage)
    .then(res=>res.json())
    .then(body=>{
        this.setState({images:body.hits, loading:false, imageCount:body.totalHits});
    });
  }
   componentDidMount(){
       this.getImages();
   
  }

  render(){
      if(this.state.images)
    console.log(this.state.images[0]);
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {this.state.images && this.state.images.map(img => (
          <GridListTile key={img.id} cols={1}>
            <img src={img.largeImageURL} alt={img.id} />
          </GridListTile>
        ))}
            <TablePagination
                 rowsPerPageOptions={[6, 12, 24]}
                 component="div"
                 count={this.state.images? this.state.imageCount : 0}
                 rowsPerPage={this.state.imagesPerPage}
                 page={this.state.page}
                 onChangePage={this.handleChangePage}
                 onChangeRowsPerPage={this.handleChangeRowsPerPage}
               />
      </GridList>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ImageGrid);