import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function CC_FreeTextDialogue(props){

  const { onClose , open } = props;

  const dispatch = useDispatch();

  const [editorState,setEditorState] = useState(EditorState.createEmpty());

  const handleClose = () => {
    onClose();
  }

  const onEditorStateChange = (state) => {
    setEditorState(state);
  }

  const handleListItemClick =  () => {
    const data = convertToRaw(editorState.getCurrentContent());
    dispatch(Actions.setFreeData(data));
    handleClose();
  }

  return(
    <div>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Add Free Text</DialogTitle>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editer-content"
          onEditorStateChange={(state) => onEditorStateChange(state)}
        />
        <DialogActions>
          <Button autoFocus onClick={() => handleListItemClick()} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withReducer('cc_free_text',reducer)(CC_FreeTextDialogue);