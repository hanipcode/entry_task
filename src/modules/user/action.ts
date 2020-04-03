import UserAction from './actionTypes';
import {
  getLikedStorage,
  getParticipatedStorage,
  setLikedStorage,
  setParticipatedStorage
} from '../../data/storage';
import { Dispatch } from 'redux';

export function fetchLiked() {
  return function(dispatch: Dispatch<any>) {
    const liked = getLikedStorage();
    dispatch(getLiked(liked));
  };
}

export function fetchParticipated() {
  return function(dispatch: Dispatch<any>) {
    const Participated = getParticipatedStorage();
    dispatch(getParticipated(Participated));
  };
}

export function likePost(id: number) {
  return function(dispatch: Dispatch<any>) {
    const liked = setLikedStorage(id);
    dispatch(getLiked(liked));
  };
}

export function participatePost(id: number) {
  return function(dispatch: Dispatch<any>) {
    const participated = setParticipatedStorage(id);
    dispatch(getParticipated(participated));
  };
}

export function getLiked(id: number[]) {
  return {
    type: UserAction.GetLiked,
    payload: {
      id
    }
  };
}
export function getParticipated(id: number[]) {
  return {
    type: UserAction.GetParticipated,
    payload: {
      id
    }
  };
}

export function likePostAction(id: number) {
  return {
    type: UserAction.Like,
    payload: {
      id
    }
  };
}

export function participatePostAction(id: number) {
  return {
    type: UserAction.Participate,
    payload: {
      id
    }
  };
}
