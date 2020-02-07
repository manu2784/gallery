import React from "react";

export default class ImageGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        images: null,
        loading:true,
    }
  }

   componentDidMount(){
    fetch("https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15")
    .then(res=>res.json())
    .then(body=>{
        this.setState({images:body.hits, loading:false});
    });
   
  }

  render(){
    console.log(this.state.loading);
    return (
     <h1>Hello</h1>
    )
  }
}
