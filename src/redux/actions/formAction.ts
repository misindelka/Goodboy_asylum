/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ADD_FORM_DATA, IFormData } from '../types';

export const addFormData = (data: IFormData) => ({
    type: ADD_FORM_DATA,
    payload: data,
});

export const postFormData = (data: IFormData) => {
    return (dispatch: (arg0: { type: string; payload: IFormData }) => void) => {
        dispatch(addFormData(data));

        axios
            .post(
                'https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute',
                data,
            )
            .then((res) => {
                alert('"Váš príspevok bol odoslán, dakujem za vašu podporu"');
            })
            .catch((err) => {
                alert('Opps , stala sa chyba, prekotrolujte si zadané údaje');
            });
    };
};
