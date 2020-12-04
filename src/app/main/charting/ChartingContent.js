import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CC from './charting_contents/CC';
import HPI from './charting_contents/HPI';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ChartingContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <CC />        
      </div>
      <div>
        <HPI />
      </div>
    </div>
  );
}
