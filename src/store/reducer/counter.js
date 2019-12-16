import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter : 1
};

const reducer = ( state = initialState , action ) => {

    switch (action.type) {
        case actionTypes.COUNTER:
            console.log(state.counter)
            return {
                ...state, counter : state.counter + 1
            }
        default:
            return state
    }
};

export default reducer;
