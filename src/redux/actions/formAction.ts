import { ADD_FORM_DATA, IFormData } from '../types';

export const addFormData = (data: IFormData) => ({
    type: ADD_FORM_DATA,
    payload: data,
});

// export const postFormData = (data: IFormData) => ({});
