import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AutorenewIcon from '@material-ui/icons/Autorenew';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatTextdirectionRToLIcon from '@material-ui/icons/FormatTextdirectionRToL';
import EditIcon from '@material-ui/icons/Edit';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import BookIcon from '@material-ui/icons/Book';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import AddIcon from '@material-ui/icons/Add';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

import CC_Main from './CC_Main';
import CC_Dialogue from './CC_Dialogue';
import CC_FreeTextDialogue from './CC_FreeTextDialogue';
import { setFreeData } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  appBar: {
    position: 'relative',
    height : '100px',
    paddingTop : '40px',
    paddingLeft : '5%',
    paddingRight : '5%'
  },
  flex: {
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function CC() {

  const classes = useStyles();

  const dispatch = useDispatch();

  //read initial data for first list item's chips
  const problems = useSelector(({ cc }) => cc.problems.data);
  useEffect(() => {
		dispatch(Actions.getProblems());
  }, [dispatch]);

  //global state of dialogue's open
  const opens = useSelector(({ cc }) => cc.problems.dialogue);
  

  const [expanded, setExpanded] = useState('panel1');   //panel's expanded status

  //variable for first chip's list
  const [chips1,setChips1] = useState([]);
  useEffect(() => {
    if(!problems) {
      return;
    }
    setChips1(problems.data);
  },[problems]);
  const [open,setOpen] = useState(false);               //full screen dialog's status
  const [d_open,setD_open] = useState(false);           //input dialogue's status
  useEffect(() => {
    if(!opens) {
      return;
    }
    setD_open(opens.d_open);
  },[opens]);
  const [selectedValue,setSelectedValue] = useState('');//selected value for input first checkbox array list

  const [free_open,setFree_open] = useState(false);
  useEffect(() => {
    if(!opens) {
      return;
    }
    setFree_open(opens.free_open);
  },[opens]);

  

  //function for panel expand/collapse
  const handleChange = panel => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };

  //function for read data from server to reset
  const reset = (e) => {
    e.stopPropagation();
  };

  //function for linemode
  const lineMode = (e) => {
    e.stopPropagation();
    dispatch(Actions.lineMode());
  }

  //function for paragraph mode
  const paraMode = (e) => {
    e.stopPropagation();
    dispatch(Actions.paraMode());
  }

  //function for close input dialog and get selected value from it
  const handleInputDialogueClose = (value) => {
    const newchips = chips1;
    
    if (!newchips.includes(value) && value !== '') newchips.push(value);
    
    // setChips1(newchips);
    dispatch(Actions.setProblems(value));
    dispatch(Actions.getProblems());
    dispatch(Actions.closeDialogue());
  }

  //function for open full dialogue
  const handleFullClickOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  //function for close full dialogue
  const handleFullClose = () => {
    setOpen(false);
  };

  //function for open free text dialogue
  const handleFreeDialogueOpen = (event) => {
    event.stopPropagation();
    setFree_open(true);
  }

  //function for close free text dialogue
  const handleFreeDialogueClose = (value) => {
    dispatch(Actions.closeFreeTextDialogue());
  }

  return (
    <div className={classes.root}> 
      <Dialog fullScreen open={open} onClose={() => handleFullClose()} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <div className="flex w-full">
            <div className="w-4/6">
              <Typography className={classes.heading}>Chief Complaints</Typography>
            </div>
            <div className="w-2/6 text-right">
              <AutorenewIcon onClick={(e) => reset(e)} className="mr-16" color="secondary"/>
              <AddIcon className="mr-16" onClick={(e) => {handleFreeDialogueOpen(e)}}/>
              <FormatTextdirectionRToLIcon onClick={(e) => lineMode(e)} className="mr-16"/>
              <FormatAlignLeftIcon onClick={(e) => paraMode(e)} className="mr-16"/>
              <span className="mr-16 underline" onClick={(e) => paraMode(e)}>Problem Selection Grid</span>
              <BookIcon className="mr-16" color="secondary"/>
              <EditIcon className="mr-16" />
              <FullscreenExitIcon onClick={(e) => handleFullClose(e)} className="float-right"/>
            </div>
          
          </div>
        </AppBar>
        <div>
          <CC_Main />
        </div>
      </Dialog>
      <CC_Dialogue selectedValue={selectedValue} open={d_open} onClose={(value) => handleInputDialogueClose(value)} />
      <CC_FreeTextDialogue open={free_open} onClose={(value) => {handleFreeDialogueClose(value)}}/>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex w-full">
            <div className="w-4/6">
              <Typography className={classes.heading}>Chief Complaints</Typography>
            </div>
            <div className="w-2/6 text-right">
              <AutorenewIcon onClick={(e) => reset(e)} className="mr-16" color="secondary"/>
              <AddIcon className="mr-16" onClick={(e) => {handleFreeDialogueOpen(e)}}/>
              <FormatTextdirectionRToLIcon onClick={(e) => lineMode(e)} className="mr-16"/>
              <FormatAlignLeftIcon onClick={(e) => paraMode(e)} className="mr-16"/>
              <span className="mr-16 underline" onClick={(e) => paraMode(e)}>Problem Selection Grid</span>
              <BookIcon className="mr-16" color="secondary"/>
              <EditIcon className="mr-16" />
              <FullscreenIcon onClick={(e) => handleFullClickOpen(e)} className="float-right"/>
            </div>
          
          </div>
          
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <CC_Main />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
  
}

export default withReducer('cc', reducer)(CC);