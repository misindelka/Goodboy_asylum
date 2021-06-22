export const SET_LANGUAGE = 'SET_LANGUAGE';
export const GET_SHELTERS = 'GET_SHELTERS';

export interface LangState {
    language: string;
}

export interface IShelters {
    [x: string]: any;
    id: number;
    name: string;
}

interface GetSheltersAction {
    type: typeof GET_SHELTERS;
    payload: IShelters;
}

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

export type LangAction = SetLanguageAction;
export type ShelterAction = GetSheltersAction;
