import React, {useCallback, useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Dialog from '@material-ui/core/Dialog';

import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';




const chip1_data = ['chip1_data_1', 'chip1_data_2'];

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CC_Dialogue(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {chip1_data.map((item) => (
          <ListItem button onClick={() => handleListItemClick(item)} key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}

      </List>
      <DialogActions>
        <Button autoFocus onClick={() => handleListItemClick('')} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}