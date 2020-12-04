import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { use } from 'marked';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default class HPI extends Component {

  
  // classes;

  constructor(props){
    super(props);
    this.classes = useStyles;
  }

  componentDidMount(){
    
  }
  
  render(){
    return (
      <div className={this.classes.root}>
        HPI
      </div>
    );
  }

  
}
