import React, { Component } from 'react';

import { connect } from 'react-redux';
class TodoForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const description = this.getDescription.value;

 const data = {
  id: new Date(),
  title,
  description,
  editing: false,
  createdAt: new Date().toString(),

 }
 const search1=this.props.search1;
 this.props.dispatch({
 type: 'ADD_TODO',
 data,search1:search1
 })
 this.getTitle.value = '';
 this.getDescription.value = '';
}

handleAlternate = (event) => {
  event.preventDefault();
  const ACTIONS = [
    'eat',
    'sleep',
    'sell',
    'buy',
    'destroy',
    'throw',
    'bury',
]; 
const OBJECTS = [
    'the banana',
    'the dog',
    'a fireman',
    'a dancing guy',
    'Station F',
    'the coffin',
];
var item1 = ACTIONS[Math.floor(Math.random()*ACTIONS.length)];
var item2 = OBJECTS[Math.floor(Math.random()*OBJECTS.length)];

const title = item1;
 const description = item1+" "+item2+".";
 const data = {
  id: new Date(),
  title,
  description,
  editing: false,
  completed:false,
  createdAt: new Date().toString()
 }
 this.props.dispatch({
 type: 'ADD_TODO',
 data
 })

}


render() {
return (
  

  <div className="Todo-container">
  <h4 className="text-center" >Create a ToDo</h4>
  <form onSubmit={this.handleSubmit} >
  <div className="form-group">
    <input className="form-control form-control-lg" required type="text" ref={(input) => this.getTitle = input}
    placeholder="Enter ToDo Title" /><br /><br />

    <textarea className="form-control" required rows="5" ref={(input) => this.getDescription = input}
    cols="28" placeholder="Enter Description" /><br /><br />

   <button className="btn btn-primary btn-lg btn-block">Create</button>
   <button className="btn btn-secondary btn-lg btn-block" onClick={this.handleAlternate}>Auto-Create</button>
   </div>
  </form>
</div>
  
  

);
}
}
export default connect()(TodoForm);