import * as Actions from './ActionTypes';
const initialState={ counter: 0 };
const counter = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };  ``
        case Actions.COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

export default counter;