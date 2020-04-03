import { combineReducers } from 'redux';
import postReducer, { IPostState } from './posts/reducer';
import UserReducer, { IUserState } from './user/reducer';

export interface RootState {
  post: IPostState;
  user: IUserState;
}

export default combineReducers({
  post: postReducer,
  user: UserReducer
});
