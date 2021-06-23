import { ADD_FORM_DATA, FormDataAction } from '../types';

const initialState = { data: {} };

export const formReducer = (state = initialState, action: FormDataAction) => {
    switch (action.type) {
        case ADD_FORM_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
