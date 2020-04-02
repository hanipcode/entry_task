import { combineReducers } from 'redux';
import postReducer, { IPostState } from './posts/reducer';

export interface RootState {
  post: IPostState;
}

export default combineReducers({
  post: postReducer
});
