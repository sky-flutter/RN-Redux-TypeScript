import { FETCH_PENDING } from './../repo/ActionTypes';
import * as Actions from './Types';
export interface IMediaListState {
    readonly media_list: [];
    readonly loading: boolean;
    readonly error: string;
}

const initialState: IMediaListState = {
    media_list: [],
    loading: false,
    error: "",
};
const mediaList = (state = initialState, action: any) => {
    try {
        switch (action.type) {
            case Actions.FETCH_MEDIA_LIST_PENDING:
                return {
                    ...state,
                    loading: true,
                };
            case Actions.FETCH_MEDIA_LIST_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    media_list: action.payload
                };
            case Actions.FETCH_MEDIA_LIST_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
            default:
                return state;
        }
    } catch (error) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
}

export default mediaList;