import { Dispatch } from 'redux';
import * as Actions from './ActionTypes';
import { callApi } from '../api/ApiService';


export const FetchRepo = () => {
    return (dispatch: Dispatch) => {
        return Promise.resolve(dispatch(FetchRepoPending())).then(() => {
            return callApi("https://jsonplaceholder.typicode.com/posts", null, (response: any) => {
                if (response.error) {
                    return dispatch(FetchRepoError(response.error));
                }
                return dispatch(FetchRepoSuccess(response));
            }, (error: any) => {
                return dispatch(FetchRepoError(error));
            });
        });
    }
}
export const FetchRepoPending = () => {
    return {
        type: Actions.FETCH_PENDING
    }
}

export const FetchRepoSuccess = (repo: any) => {
    return {
        type: Actions.FETCH_SUCCESS,
        payload: repo
    }
}

export const FetchRepoError = (error: any) => {
    return {
        type: Actions.FETCH_ERROR,
        payload: error
    }
}