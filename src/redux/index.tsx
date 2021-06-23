import { combineReducers } from 'redux';
import langReducer from './reducers/langReducer';
import { sheltersReducer } from './reducers/sheltersReducer';
import { formReducer } from './reducers/formReducer';

const rootReducer = combineReducers({
    lang: langReducer,
    shelters: sheltersReducer,
    formData: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
