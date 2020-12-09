import { mediaListPaginationQuery } from './gql/Query';
import { Dispatch } from 'redux';
import * as Actions from './Types';
import graphQlClient from '../GraphQlClient';

export const FetchMediaList = (variables: any) => {
    return (dispatch: Dispatch) => {
        return Promise.resolve(dispatch(FetchMediaListPending())).then(() => {
            return graphQlClient.request(mediaListPaginationQuery, variables).then((data) => {
                console.log("Data:",data.Page.media);
                return dispatch(FetchMediaListSuccess(data.Page.media));
            }).catch((error) => {
                return dispatch(FetchMediaListError(error));
            });
        });
    }
}
export const FetchMediaListPending = () => {
    return {
        type: Actions.FETCH_MEDIA_LIST_PENDING
    }
}

export const FetchMediaListSuccess = (repo: any) => {
    return {
        type: Actions.FETCH_MEDIA_LIST_SUCCESS,
        payload: repo
    }
}

export const FetchMediaListError = (error: any) => {
    return {
        type: Actions.FETCH_MEDIA_LIST_ERROR,
        payload: error
    }
}