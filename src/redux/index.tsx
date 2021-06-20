import { combineReducers } from 'redux';
import langReducer from './reducers/langReducer';

const rootReducer = combineReducers({
    lang: langReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
