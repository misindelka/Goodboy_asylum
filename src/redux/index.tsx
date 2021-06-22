import { combineReducers } from 'redux';
import langReducer from './reducers/langReducer';
import { sheltersReducer } from './reducers/sheltersReducer';

const rootReducer = combineReducers({
    lang: langReducer,
    shelters: sheltersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
