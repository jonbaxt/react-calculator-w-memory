
const initialState = {
    numberDisplayScreen: '0',
    operatorDisplayScreen: '',
    currentOperator: '',
    firstNumber: '',
    secondNumber: '',
    solution: '',
    solutionsArray: []
}

const SET_NUMBER_DISPLAY_SCREEN = 'SET_NUMBER_DISPLAY_SCREEN';
const SET_OPERATOR_DISPLAY_SCREEN = 'SET_OPERATOR_DISPLAY_SCREEN';
const SET_CURRENT_OPERATOR = 'SET_CURRENT_OPERATOR';
const SET_FIRST_NUMBER = 'SET_FIRST_NUMBER';
const SET_SECOND_NUMBER = 'SET_SECOND_NUMBER';
const SET_SOLUTION = 'SET_SOLUTION';
const ADD_TO_SOLUTIIONS_ARRAY = 'ADD_TO_SOLUTIONS_ARRAY';

const GET_SAVED_SOLUTIONS = 'GET_SAVED_SOLUTIONS';

export function setNumberDisplayScreen(newNumber) {
    return {
        type: SET_NUMBER_DISPLAY_SCREEN,
        payload: newNumber
    }
}

export function setOperatorDisplayScreen(newOperator) {
    return {
        type: SET_OPERATOR_DISPLAY_SCREEN,
        payload: newOperator
    }
}

export function setCurrentOperator(newOperator) {
    return {
        type: SET_CURRENT_OPERATOR,
        payload: newOperator
    }
}

export function setFirstNumber(newNumber) {
    return { 
        type: SET_FIRST_NUMBER,
        payload: newNumber    
    }
}

export function setSecondNumber(newNumber) {
    return {
        type: SET_SECOND_NUMBER,
        payload: newNumber
    }
}

export function setSolution(newSolution) {
    return {
        type: SET_SOLUTION,
        payload: newSolution
    }
}

export function addToSolutionsArray(newSolution) {
    return {
        type: ADD_TO_SOLUTIIONS_ARRAY,
        payload: newSolution
    }
}

export function getSavedSolutions() {
    
    return 'Will return from the database';
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_NUMBER_DISPLAY_SCREEN: 
            return Object.assign({}, state, { numberDisplayScreen: action.payload });
        case SET_OPERATOR_DISPLAY_SCREEN:
            return Object.assign({}, state, { operatorDisplayScreen: action.payload });
        case SET_CURRENT_OPERATOR:
            return Object.assign({}, state, { currentOperator: action.payload });
        case SET_FIRST_NUMBER:
            return Object.assign({}, state, { firstNumber: action.payload });
        case SET_SECOND_NUMBER: 
            return Object.assign({}, state, { secondNumber: action.payload });
        case SET_SOLUTION:
            return Object.assign({}, state, { solution: action.payload });
        // case ADD_TO_SOLUTIIONS_ARRAY:
        //     return Object.assign({}, state, { solutionsArray: [...solutionsArray, action.payload] });
        default: 
            return state;
    }
}