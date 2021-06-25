import { ADD_FORM_DATA, FormDataAction } from '../types';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    value: '',
    shelterID: 0,
};

export const formReducer = (state = initialState, action: FormDataAction) => {
    switch (action.type) {
        case ADD_FORM_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
