import axios from 'axios';

export const GET_PROBLEMS = 'GET PROBLEMS';
export const SET_PROBLEMS = 'SET PROBLEMS';
export const OPEN_DIALOG = 'OPEN DIALOG';
export const CLOSE_DIALOG = 'CLOSE DIALOG';
export const LINE_MODE = 'LINE MODE';
export const PARA_MODE = 'PARAGRAPH MODE';
export const OPEN_FREE_TEXT_DIALOGUE = 'OPEN FREE TEXT DIALOGUE';
export const CLOSE_FREE_TEXT_DIALOGUE = 'CLOSE FREE TEXT DIALOGUE';
export const SET_FREE_TEXT_DATA = 'SET FREE TEXT DATA';

const data = [
  'Diabetes mellitus', 'Hyperlipidemia and Hypertension'
];

let free_data;

//action for initial data for first list item, should be taken from server
export function getProblems() {
	// const request = axios.get('/api/analytics-dashboard-app/widgets');

	// return dispatch =>
	// 	request.then(response =>
	// 		dispatch({
	// 			type: GET_PROBLEMS,
	// 			payload: response.data
	// 		})
  // 	);
  
  return dispatch => dispatch({
    type : GET_PROBLEMS,
    payload: {
      data
    }
  })
}

//action for add new problem in first list item
export function setProblems(value){
  const result = [...data,value];
  return dispatch => dispatch({
    type : SET_PROBLEMS,
    payload: {
      result
    }
  })
}

//action for input dialogue
export function openDialogue(){
  const data = true;
  return dispatch => dispatch({
    type : OPEN_DIALOG,
    payload : data
  })
}

//action for close input dialogue
export function closeDialogue(){
  const data = false;
  return dispatch => dispatch({
    type : CLOSE_DIALOG,
    payload : data
  })
}

//action for line mode
export function lineMode(){
  const data = false;
  return dispatch => dispatch({
    type : LINE_MODE,
    payload : data
  })
}

//action for paragraph mode
export function paraMode(){
  const data = true;
  return dispatch => dispatch({
    type : PARA_MODE,
    payload : data
  })
}

//action for open free text dialogue
export function openFreeTextDialogue(){
  const data = true;
  return {
    type : OPEN_FREE_TEXT_DIALOGUE,
    payload : data
  }
}

//action for close free text dialogue
export function closeFreeTextDialogue(){
  return {
    type : CLOSE_FREE_TEXT_DIALOGUE,
    payload : false
  }
}

//store json free text data
export function setFreeData(value){
  free_data = value;
  return {
    type : SET_FREE_TEXT_DATA,
    payload : free_data
  }
}

export function getFreeData(){

}