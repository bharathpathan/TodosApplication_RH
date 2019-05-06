import React, { Component } from 'react';
import TodoForm from './TodoForm.js';
import AllTodos from './AllTodos.js';

import LinearProgress from '@material-ui/core/LinearProgress';

import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';



import { connect } from 'react-redux';




class App extends Component {


  state = {
    normalise : value => (5 - 0) * 100 / (10 - 0),
    completed: 0,
  };

  

render() {
  const completed=this.props.todo.filter((todo)=>todo.completed===true)
  const remaining=this.props.todo.filter((todo)=>todo.completed===false)
  const all=this.props.todo.length
  const value = (completed.length - 0) * 100 / (all - 0);

return (
<div >

  <div >
  <nav className="navbar navbar-slm" >
    <h1 className="text-center text-white">DO IT<span className="badge badge-light">{remaining.length}</span></h1>
    <LinearProgress color="secondary" variant="determinate" value={value} />
  </nav> 
  </div>

  <div style={{backgroundColor:"WhiteSmoke "}}>
    <div className="row">
        <div className="col-md-4 col-xs-12 col-sm-12 "> 
          <TodoForm />
          <div className="chips_div">
              <div>
                <h3 >Completed Todos:{completed.length}
                  <Button variant="outlined" color="secondary"  className="pull-right1" onClick={() => this.props.dispatch({ type: 'Delete_completed', id: this.props.todo.id })}>
                    Delete All<DeleteIcon style={{ fontSize: 15 }} />
                  </Button>
                </h3>
              </div>
            
              {completed.map((todo)=>
              <Chip
              label={todo.title}
              className="chips"
              color="error"/>
              )}
              <LinearProgress color="secondary" variant="determinate" value={value} />
          </div>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12"> 
        <AllTodos />
        </div>
      </div>
  </div>
  
</div>
);
}
}
const mapStateToProps = (state) => {
  return {
  todo: state
  }
  }
  export default connect(mapStateToProps)(App);
