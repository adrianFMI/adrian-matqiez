import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { addContact } from '../db';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 handleChange(e) {
  let { name, value } = e.target;
  this.setState({[name]: value});
 }
 handleSubmit(e) {
   e.preventDefault();
   addContact(this.state);
   //alert(`Form was submited : ${this.state.name}`)
   this.setState({
     name: "",
     email: "",
     message: ""
   })
   this.props.history.push('/')
 }
 render(){
   let { name, email, message } = this.state
   let { handleChange, handleSubmit } = this
   return (
     <div className="container">
       <form onSubmit={handleSubmit}>
       <div className="form-group">
         <label htmlFor="nameInput">Name:</label>
         <input className="form-control" name="name" id="nameInput" onChange={handleChange} type="text" value={name} placeholder="John Dough"/>
       </div>
       <div className="form-group">
         <label htmlFor="emailInput">Email:</label>
         <input className="form-control" name="email" id="emailInput" onChange={handleChange} type="email" value={email} placeholder="example@email.com"/>
       </div>
       <div className="form-group">
         <label htmlFor="messageInput">Message:</label>
         <textarea className="form-control" name="message" id="messageInput" onChange={handleChange} rows="5" value={message} placeholder="Write message here..."></textarea>
       </div>
        <button  className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
       </form>
     </div>
   )
 }
}

export default withRouter(ContactForm);
