import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newDescription = this.getDescription.value;
  const data = {
    newTitle,
    newDescription
  }


  this.props.dispatch({ type: 'UPDATE', id: this.props.todo.id, data: data })
}
render() {
return (
    <Grid container spacing={2}>
        <div key={this.props.todo.id} className="edit-todox">

          <div class="edit-todo">
            
            <form className="form" onSubmit={this.handleEdit}>
                <div className="form-group">
                    <input required type="text" ref={(input) => this.getTitle = input}
                    defaultValue={this.props.todo.title} placeholder="Enter Todo Title" />  
                    <br /><br />
                    <textarea required rows="5" ref={(input) => this.getDescription = input}
                    defaultValue={this.props.todo.description} cols="28" placeholder="Enter Description" /><br /><br />
                    <button className="btn btn-primary">Update</button>
                </div>   
            </form>
            <img  className="img-responsive" alt="Image Cannot be loaded..." src ={this.props.dogimage? this.props.dogimage :"Loading..."}/>
          </div>
          <hr/>
        </div>
    </Grid> 

);
}
}
export default connect()(EditComponent);