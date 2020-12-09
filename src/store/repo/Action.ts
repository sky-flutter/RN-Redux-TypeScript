import { Dispatch } from 'redux';
import * as Actions from './ActionTypes';


export const FetchRepo = () => {
    return (dispatch: Dispatch) => {
        return Promise.resolve(dispatch(FetchRepoPending())).then(() => {
            return fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((response) => {
                    if (response.error) {
                        return dispatch(FetchRepoError(response.error));
                    }
                    return dispatch(FetchRepoSuccess(response));
                })
                .catch((error) => {
                    return dispatch(FetchRepoError(error));
                });
        })
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