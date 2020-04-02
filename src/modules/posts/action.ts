import * as actionTypes from './actionTypes';
import { IPost } from '../../types/post.types';
import { IPaginationParam } from '../../types/service/common_param.types';
import { Dispatch } from 'redux';
import { getAllPost } from '../../data/service';

export const finishFetchPost = (posts: IPost[]) => ({
  type: actionTypes.FINISH_FETCH_POST,
  payload: {
    posts
  }
});

export const setLoading = (status: boolean) => ({
  type: actionTypes.SET_LOADING,
  payload: {
    status
  }
});

export const startFetchPosts = (
  param: IPaginationParam = { page: 1, limit: 5 }
) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await getAllPost(param);
    dispatch(finishFetchPost(response.data as IPost[]));
    dispatch(setLoading(false));
  };
};
