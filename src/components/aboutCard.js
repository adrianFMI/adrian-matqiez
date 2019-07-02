import React, { Component } from 'react';

export default class AboutCard extends Component {
  constructor(props){
    super(props);
    this.state ={
      image: "../images/w3schools.png",
      title: "W3SchoolS",
      description: "W3Schools is an educational website for learning web technologies online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, SQL, Bootstrap, Node.js, jQuery, XQuery, AJAX, XML, and Java."
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
          <p className="card-text"><small className="text-muted"><a href="https://www.w3schools.com/" target="_blank">Web site</a></small></p>
        </div>
      </div>
    )
  }
}
