import { GET_SHELTERS, ShelterAction } from '../types';

const initialState = {};

export const sheltersReducer = (state = initialState, action: ShelterAction) => {
    switch (action.type) {
        case GET_SHELTERS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
