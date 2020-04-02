import * as actionTypes from './actionTypes';
import { IPost } from '../../types/post.types';
import { ActionCreator } from '../../types/action.types';

const initialState = {
  posts: [],
  loading: false
};

export interface IPostState {
  posts: IPost[];
  loading: boolean;
}

interface IFinishFetchPayload {
  posts: IPost[];
}

interface ISetLoadingPayload {
  status: boolean;
}

type Payloads = IFinishFetchPayload | ISetLoadingPayload;

export default function postReducer(
  state: IPostState = initialState,
  action: ActionCreator<Payloads>
): IPostState {
  switch (action.type) {
    case actionTypes.FINISH_FETCH_POST:
      const { payload } = action as ActionCreator<IFinishFetchPayload>;
      return {
        ...state,
        posts: [...state.posts, ...payload.posts]
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: (action as ActionCreator<ISetLoadingPayload>).payload.status
      };
  }
  return state;
}
