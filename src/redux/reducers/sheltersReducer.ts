import { GET_SHELTERS, ShelterAction } from '../types';

const initialState = { shelters: [] };

export const sheltersReducer = (state = initialState, action: ShelterAction) => {
    switch (action.type) {
        case GET_SHELTERS:
            return {
                ...state,
                shelters: action.payload,
            };
        default:
            return state;
    }
};
