import * as Actions from './Types';
const initialState = {
    loading: false,
    error: "",
    result: null,
};


const SignInReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                result: {
                    success: true
                }
            };

        case Actions.SIGNIN_INITIATED:
            return {
                ...state,
                loading: true
            };
        case Actions.SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                error: "Error in login. Please try again."
            };
        default:
            return state;

    }
}

export default SignInReducer;