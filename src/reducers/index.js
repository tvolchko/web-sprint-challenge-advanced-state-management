import { FETCH_SMURFS, FETCH_FAIL, FETCH_START, FETCH_SUCCESS, FORM_ERROR } from "../actions";




export const initialState = {
    smurfs: [],
    fetching: false,
    error: ''
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case FETCH_SUCCESS: {
            return {
                ...state,
                smurfs: action.payload,
                fetching: false,
                error: '',
            }
        }
        case FETCH_START: {
            return {
                ...state,
                fetching: true,
                error: '',
            }
        }
        case FETCH_FAIL: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case FORM_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.