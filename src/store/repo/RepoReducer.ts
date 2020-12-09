import * as Actions from './ActionTypes';
import { Dispatch } from 'redux';
import { callApi } from '../api/ApiService';
import { Reducer } from 'react';
export interface IRepoState {
    readonly repo: [];
    readonly loading: boolean;
    readonly error: string;
}

const initialState: IRepoState = {
    repo: [],
    loading: false,
    error: "",
};
const repo = (state = initialState, action: any) => {
    try {
        switch (action.type) {
            case Actions.FETCH_PENDING:
                return {
                    ...state,
                    loading: true,
                };
            case Actions.FETCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    repo: action.payload
                };
            case Actions.FETCH_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
            default:
                return state;
        }
    } catch (error) {
        console.log(error);
    }
}

export default repo;