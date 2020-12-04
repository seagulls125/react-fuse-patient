import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import ChipInput from 'material-ui-chip-input';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  flex: {
    flex: 1,
  },
}));

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

function CC_Main(){

  const classes = useStyles();

  const dispatch = useDispatch();
  const problems = useSelector(({ cc_main }) => cc_main.problems.data);
  const modes = useSelector(({ cc }) => cc.problems.mode);
  const frees = useSelector(({ cc }) => cc.problems.free_data);

  useEffect(() => {
		dispatch(Actions.getProblems());
  }, [dispatch]);

  const [checked,setChecked] = useState([]);            //checkbox's checked list array
  const [age, setAge] = useState('1');                  //dummy variable for manage first person
  const [character, setCharacter] = useState('1');      //dummy variable for manage second character
  const [gender, setGender] = useState('1');            //gender variable for male/female
  const [gender2,setGender2] = useState('1');           //second gender variable for male/female
  const [relation,setRelation] = useState('');          //dummy variable for relation
  const [reliability,setReliability] = useState('');    //dummy variable for reliability

  //variable for first chip's list
  const [chips1,setChips1] = useState([]);
  useEffect(() => {
    if(!problems) {
      return;
    }
    setChips1(problems.data);
  },[problems])
  const [chips2,setChips2] = useState([]);              //variable for second chip's list
  const [chips3,setChips3] = useState([]);              //variable for third chip's list
  const [open,setOpen] = useState(false);               //full screen dialog's status
  const [mode,setMode] = useState(true);                //display paragraph mode, inline=false
  useEffect(() => {
    if(!modes) {
      return;
    }
    setMode(modes.mode);
  },[modes]);

  const [html_data,setHtml_data] = useState('');
  useEffect(() => {
    if(!frees){
      return;
    }
    if(frees.data != undefined){
      setHtml_data(draftToHtml(frees.data));
    }
  },[frees]);

  //function for mamaging checkbox's status
  const handleToggle = value => () => {
    // const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  //function for add new Chip, not used now
  const handleAddChip = (chip) => {
    // const newchips = [...this.state.chips1];
    const newchips = chips1;
    newchips.push(chip);
    setChips1(newchips);
  }

  //function for delete Chip
  const handleDeleteChip = (chip, index) => {
    // const newchips = [...this.state.chips1];
    dispatch(Actions.getProblems());
    const newchips = chips1;
    newchips.splice(index,1);
    // setChips1(newchips);
  }


  //function for handle second chip array
  const handleChips2Change = (chips) => {
    setChips2(chips);
  }

  //function for handle third chip array
  const handleChips3Change = (chips) => {
    setChips3(chips);
  }

  //function for open input dialogue
  const handleInputDialogClickOpen = () => {
    dispatch(Actions.openDialogue());
    // setD_open(true);
  }

  //function for close input dialog and get selected value from it
  // const handleInputDialogueClose = (value) => {
  //   const newchips = chips1;
  //   if (!newchips.includes(value) && value !== '') newchips.push(value);
    
  //   setD_open(false);
  //   setSelectedValue(value);
  //   setChips1(newchips);
  //   // this.handleChips1Change(newchips);
    
  // }

  //function for prevent checkbox's click and open input dialogue
  const ChipClick = (e) => {
    e.stopPropagation();
    handleInputDialogClickOpen();
    
  }

  return(
    <div>
      <List className={classes.root} style={mode ? null : flexContainer}>
        <ListItem key="key1" role={undefined} dense button onClick={handleToggle('key1')}>
          <Checkbox checked={checked.indexOf('key1') !== -1} disableRipple></Checkbox>
          <ListItemText>
            {/* <FormControl className={this.classes.formControl}> */}
              {/* <InputLabel htmlFor="age-simple">Age</InputLabel> */}
              <Select
                value={age}
                // onChange={handleChangeSelect}
                onChange={(e) => {e.stopPropagation();setAge(e.target.value)}}
                inputProps={{
                  name: 'age',
                  // id: 'age-simple',
                }}
                className="mr-8 text-purple-700"
              >
                <MenuItem value={1}>Kirkland Dodson1</MenuItem>
                <MenuItem value={2}>Kirkland Dodson2</MenuItem>
                <MenuItem value={3}>Kirkland Dodson3</MenuItem>
              </Select>
            {/* </FormControl> */}
              is a 
              <Select
                value={character}
                onChange={(e) => {e.stopPropagation();setCharacter(e.target.value)}}
                inputProps={{
                  name: 'character',
                  // id: 'age-simple',
                }}
                className="mr-8 ml-8 text-purple-700"
              >
                <MenuItem value={1}>48 y/o Male</MenuItem>
                <MenuItem value={2}>58 y/o Male</MenuItem>
                <MenuItem value={3}>30 y/o Female</MenuItem>
              </Select>
              
              who is being seen for following problems :
              <ChipInput
                // value={this.state.chips1}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                // defaultValue={['Diabetes mellitus', 'Hyperlipidemia and Hypertension']}
                value={chips1}
                // onChange={(chips) => this.handleChips1Change(chips)}
                onClick={(e) => {ChipClick(e)}}
                newChipKeys={['']}
                newChipKeyCodes={[]}
                blurBehavior={'clear'}
                className="ml-8"
              /> 
              
          </ListItemText>
        </ListItem>
        <ListItem key="key2" role={undefined} dense button onClick={handleToggle('key2')}>
          <Checkbox checked={checked.indexOf('key2') !== -1} disableRipple></Checkbox>
          <ListItemText>
              <Select
                value={gender}
                onChange={(e) => {e.stopPropagation();setGender(e.target.value)}}
                inputProps={{
                  name: 'gender',
                  // id: 'age-simple',
                }}
                className="mr-8 text-purple-700"
              >
                <MenuItem value={1}>He</MenuItem>
                <MenuItem value={2}>She</MenuItem>
              </Select>
              is also being seen for following problems
              <ChipInput
                // value={this.state.chips1}
                // onAdd={(chip) => this.handleAddChip(chip)}
                // onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                defaultValue={[]}
                onChange={(chips) => handleChips2Change(chips)}
                onClick={(e) => {ChipClick(e)}}
                className="ml-8"
              />
          </ListItemText>
        </ListItem>
        <ListItem key="key3" role={undefined} dense button onClick={handleToggle('key3')}>
          <Checkbox checked={checked.indexOf('key3') !== -1} disableRipple></Checkbox>
          <ListItemText>
              <Select
                value={gender2}
                onChange={(e) => {e.stopPropagation();setGender2(e.target.value)}}
                inputProps={{
                  name: 'gender2',
                  // id: 'age-simple',
                }}
                className="mr-8 text-purple-700"
              >
                <MenuItem value={1}>He</MenuItem>
                <MenuItem value={2}>She</MenuItem>
              </Select>
              is also being see nthe following health maintenance issues
              <ChipInput
                // value={this.state.chips1}
                // onAdd={(chip) => this.handleAddChip(chip)}
                // onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                defaultValue={[]}
                onChange={(chips) => handleChips3Change(chips)}
                onClick={(e) => {ChipClick(e)}}
                className="ml-8"
              />
          </ListItemText>
        </ListItem>
        <ListItem key="key4" role={undefined} dense button onClick={handleToggle('key4')}>
          <Checkbox checked={checked.indexOf('key4') !== -1} disableRipple></Checkbox>
          <ListItemText>
            The history was obtained from
              <Select
                value={relation}
                onChange={(e) => {e.stopPropagation();setRelation(e.target.value)}}
                inputProps={{
                  name: 'relation',
                  // id: 'relation',
                }}
                className="mr-8 ml-8 text-purple-700"
                displayEmpty
              >
                <MenuItem value="">
                  <em>relation</em>
                </MenuItem>
                <MenuItem value={1}>Patient</MenuItem>
                <MenuItem value={2}>relatives</MenuItem>
                <MenuItem value={3}>Other</MenuItem>
              </Select>
              
            and 
              <Select
                value={reliability}
                onChange={(e) => {e.stopPropagation();setReliability(e.target.value)}}
                inputProps={{
                  name: 'reliability',
                  // id: 'relation',
                }}
                className="mr-8 ml-8 text-purple-700"
                displayEmpty
              >
                <MenuItem value="">
                  <em>reliability</em>
                </MenuItem>
                <MenuItem value={1}>reliable</MenuItem>
                <MenuItem value={2}>may not reliable</MenuItem>
                <MenuItem value={3}>Other</MenuItem>
              </Select>
            
          </ListItemText>
        </ListItem>
      </List>
    

      <div dangerouslySetInnerHTML={{ __html: html_data}}></div>  
    </div>
  )
}

export default withReducer('cc_main',reducer)(CC_Main);