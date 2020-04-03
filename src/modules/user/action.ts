import UserAction from './actionTypes';

export function getLiked(data: number[]) {
  return {
    type: UserAction.GetLiked,
    payload: {
      data
    }
  };
}
export function getParticipated(data: number[]) {
  return {
    type: UserAction.GetParticipated,
    payload: {
      data
    }
  };
}

export function likePost(id: number) {
  return {
    type: UserAction.Like,
    payload: {
      id
    }
  };
}

export function participatePost(id: number) {
  return {
    type: UserAction.Participate,
    payload: {
      id
    }
  };
}
