import React, { Component } from 'react';

export default class AboutCard extends Component {
  constructor(props){
    super(props);
    this.state ={
      image: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Adrian",
      description: "This is mi site"
    }
  }
  render(){
    let { image, title, description } = this.state;
    return (
      <div className="card mb-3">
        <img src={ image } className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title"> { title } </h5>
          <p className="card-text"> { description } </p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
  }
}
