import React, { Component } from 'react';


import { connect } from 'react-redux';
import Search from '@material-ui/icons/Search';
import Slide from '@material-ui/core/Slide';
import EditComponent from './EditComponent.js';
import Todo from './Todo.js';





class SearchTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        search:"",
        image: null,

    };
  }

  
  randomNumber = () => {
    return Math.floor(Math.random() * 150 + 1);
  };

  componentDidMount() {
    this.getRandomUsers(196);
    this.nameInput.focus();

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

  handleChange1=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.value)

    const search1=e.target.value
    this.props.dispatch({
      type: 'filter',search1
      
      })


  }  
  
render() {


return (

  <div className="modal-impl"  >
<h3>Search from the Title/Description of a Todo</h3>

     <input type="text" name="search" style={{alignSelf:"center"}} className="sidebar-search" placeholder="Search" ref={(input) => { this.nameInput = input; }}  onChange={(e) => {this.handleChange1(e);}}></input><Search style={{ fontSize: 30 }} />
      {(this.props.works.filter_data===undefined)?<div>No Search data available</div>:
          this.props.works.filter_data.map((todo) => (



        (todo.completed)?"":    
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <div  key={todo.id} className="todo-search">
          {todo.editing ?
            
            <EditComponent
            todo={todo} key={todo.id} 
            dogimage={this.state.image}
            /> 

            : 

            
            <Todo todo={todo}
            calltoapi={this.calltoApi}
            key={todo.id} />


          
          }
          
        </div></Slide>      
        )) }
   
</div>

);
}
}



const mapStateToProps = (state) => {
  return {
  works: state,
  
  
  }
  }
export default connect(mapStateToProps) (SearchTodo);