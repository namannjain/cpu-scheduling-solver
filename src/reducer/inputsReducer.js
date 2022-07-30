import * as actions from '../actions/actionType'

const initialState = {
    loading: false, 
    nameOfAlgo: '',
    arrivalTime: [],
    burstTime: [],
    timeQuantum: 0,
    priority: []
}

export const inputsReducer = (state=initialState, action) => {
    switch(action.type){
        case actions.INPUTS_REQUEST:
            return{
                ...state, loading:true
            };
        case actions.INPUTS_SUCCESS:
            return {
                ...state, 
                nameOfAlgo: action.payload.nameOfAlgo,
                arrivalTime: action.payload.arrivalTime,
                burstTime: action.payload.burstTime,
                timeQuantum: action.payload.timeQuantum,
                priority: action.payload.priority,
                loading: false,
            };
        case actions.INPUTS_FAIL:
            return{
                ...state, 
                nameOfAlgo: '',
                arrivalTime: [],
                burstTime: [],
                timeQuantum: 0,
                priority: [],
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};