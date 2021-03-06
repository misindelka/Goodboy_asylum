export const SET_LANGUAGE = 'SET_LANGUAGE';
export const GET_SHELTERS = 'GET_SHELTERS';
export const ADD_FORM_DATA = 'ADD_FORM_DATA';

export interface LangState {
    language: string;
}

export interface IShelters {
    [x: string]: any;
    id: number;
    name: string;
}

export interface IFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    value: string;
    shelterID: number;
}
interface GetSheltersAction {
    type: typeof GET_SHELTERS;
    payload: IShelters;
}

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

interface SetFormData {
    type: typeof ADD_FORM_DATA;
    payload: IFormData;
}

export type LangAction = SetLanguageAction;
export type ShelterAction = GetSheltersAction;
export type FormDataAction = SetFormData;
