import axios from 'axios';
import { GET_SHELTERS } from '../types';

export const getShelters =
    () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
        await axios
            .get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
            .then((res) => {
                dispatch({ type: GET_SHELTERS, payload: res.data });
            });
    };
