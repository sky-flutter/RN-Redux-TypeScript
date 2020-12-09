import * as Actions from './ActionTypes';

export const counterIncrement = (count: number) => {
    return {
        type: Actions.COUNTER_INCREMENT,
        payload: count,
    }
};

export const counterDecrement = (count: number) => {
    return {
        type: Actions.COUNTER_DECREMENT,
        payload: count,
    }
}
