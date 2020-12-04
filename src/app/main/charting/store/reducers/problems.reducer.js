import * as Actions from '../actions';

const initialState = {
  data: ['Diabetes mellitus', 'Hyperlipidemia and Hypertension'],
  dialogue : {
    d_open : false,
    free_open : false
  },
  mode : {
    mode : true
  },
  free_data : {}
};

const problemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_PROBLEMS:
			return {
				...state,
				data: { ...action.payload }
      };
    case Actions.OPEN_DIALOG :
      return {
        ...state,
        dialogue: { d_open : action.payload, free_open : false }
      }
    case Actions.CLOSE_DIALOG :
      return {
        ...state,
        dialogue: { d_open : action.payload,free_open : false }
      }
    case Actions.LINE_MODE :
      return {
        ...state,
        mode: { mode : action.payload }
    }
    case Actions.PARA_MODE :
      return {
        ...state,
        mode: { mode : action.payload }
    }
    case Actions.SET_PROBLEMS :
      return {
        ...state,
        data : {...action.payload}
      }
    case Actions.OPEN_FREE_TEXT_DIALOGUE : {
      return {
        ...state,
        dialogue : {free_open : action.payload,d_open : false}
      }
    }
    case Actions.CLOSE_FREE_TEXT_DIALOGUE : {
      return {
        ...state,
        dialogue : {free_open : action.payload,d_open : false}
      }
    }
    case Actions.SET_FREE_TEXT_DATA : {
      return {
        ...state,
        free_data : { data : action.payload}
        // free_data : {data : 'hello'}
      }
    }
		default:
			return state;
	}
};

export default problemsReducer;
