import React, { Component } from 'react';

import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Moment from "react-moment";






class Todo extends Component {



  
render() {


  const calendarStrings = {
    lastDay: "[Yesterday at] LTS",
    sameDay: "[Today at] LTS",
    lastWeek: "[last] dddd [at] LTS"
  };

return (

  <div>

      <Card className="card" >
      <div>
          <CardContent className="content">
          <div className="card_title_div">
          <Typography gutterBottom variant="headline" component="h2" className="card_title">
          {this.props.todo.title}<small className="pull-right-date">
                   
                    <Moment calendar={calendarStrings}>{this.props.todo.createdAt}</Moment>
                  </small>
          </Typography>
          <Divider  />
          </div>
          <Typography component="p" className="card_body">
          {this.props.todo.description}
          </Typography>
          </CardContent>
          </div>
          <CardActions className="pull-right">

          <Button size="large" color="primary" href="" target="_blank" onClick={() => {
              this.props.dispatch({ type: 'EDIT_TODO', id: this.props.todo.id});
                 this.props.calltoapi()}}>
              Edit<Edit style={{ fontSize: 15 }} />
          </Button>
          <Button size="large" color="primary" href="" target="_blank" onClick={() => this.props.dispatch({ type: 'DELETE_TODO', id: this.props.todo.id })} >
              Delete<DeleteIcon style={{ fontSize: 15 }} />
          </Button>
          <Button size="large" color="primary" href="" target="_blank" onClick={() => this.props.dispatch({ type: 'COMPLETE_TODO', id: this.props.todo.id })} >
              Completed<CheckIcon style={{ fontSize: 15 }} />
          </Button>
          </CardActions>
      </Card>
   
</div>

);
}
}

export default
(

  connect()(Todo)
);