import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';
import Grid from '@material-ui/core/Grid';
import EditComponent from './EditComponent.js';
import { Divider } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import SearchTodo from './SearchTodo.js';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import Modal from '@material-ui/core/Modal';

class AllTodos extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      open: false,

    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  randomNumber = () => {
    return Math.floor(Math.random() * 150 + 1);
  };

  componentDidMount() {
    this.getRandomUsers(196);

  }
  calltoApi = () => {
    this.getRandomUsers(this.randomNumber());
  };
  getRandomUsers = num => {
    fetch(`https://picsum.photos/id/${num}/200/200`)
      .then(res => res)
      .then(data => {
        this.setState({ image: data.url });
        return;
      });
  };


render() {
return (

<div>
 
  <div>
    <h1 className="">All Todos <span className="pull-right1">   
    <Button onClick={this.handleClickOpen} variant="outlined"  style={{fontSize:20}}>Search <Search style={{ fontSize: 25 }} />
    </Button> </span>  </h1>   
    <Divider className="divider"></Divider>
    <Modal
      open={this.state.open}
      onClose={this.handleClose}
      className="searchbar" 
      variant="persistent"
      >
        <SearchTodo />
    </Modal>
   </div>
   
   <Grid container spacing={0}>
      {this.props.todo.map((todo) => 
      (

        (todo.completed)? "" :
          <Grid item xs={6}>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
              <div  key={todo.id}>
                {todo.editing ?
                <EditComponent
                  todo={todo} key={todo.id} 
                  dogimage={this.state.image}
                /> 
                : 
                <Todo todo={todo}
                  calltoapi={this.calltoApi}
                  key={todo.id} 
                />
                }
              
              </div>
            </Slide>
          </Grid>      
      ))}
    </Grid> 
</div>
);
}
}



const mapStateToProps = (state) => {
return {
todo: state,
}
}


export default connect(mapStateToProps)(AllTodos);