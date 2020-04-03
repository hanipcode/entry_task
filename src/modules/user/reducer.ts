import { ActionCreator } from '../../types/action.types';
import UserAction from './actionTypes';

export interface IUserState {
  liked: number[];
  participated: number[];
}

const initialState: IUserState = {
  liked: [],
  participated: []
};

interface ILikePayload {
  id: number;
}

type Payload = ILikePayload;

export default function UserReducer(
  state: IUserState = initialState,
  action: ActionCreator<Payload>
): IUserState {
  switch (action.type) {
    case UserAction.Like:
      return {
        ...state,
        liked: [...state.liked, (action.payload as ILikePayload).id]
      };
    case UserAction.Participate:
      return {
        ...state,
        participated: [
          ...state.participated,
          (action.payload as ILikePayload).id
        ]
      };
  }
  return state;
}
