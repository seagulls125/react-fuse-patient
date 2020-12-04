import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ChartingToolbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="flex">
        <div className="w-5/6">
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            CC
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            HPI
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            PMH
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            PSH
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            MED
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            ADR
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            SH
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            FH
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            PE
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            DD
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            ASS
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            ORD
          </Button>
        </div>

        <div className="w-1/6">
          <Button variant="contained" color="primary" href="#contained-buttons" className="mr-8">
            Note
          </Button>
        </div>
      </div>

    </div>
  );
}
