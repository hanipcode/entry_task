import { IUser } from '../types/user.types';

enum StorageKeys {
  user = 'storage/entry_task/user',
  liked = 'storage/entry_task/liked',
  participated = 'storage/entry_task/participated'
}

export const setUserStorage = (user: IUser) =>
  localStorage.setItem(StorageKeys.user, JSON.stringify(user));

export const getUserStorage = (): IUser =>
  JSON.parse(localStorage.getItem(StorageKeys.user) || '{}');

export const getLikedStorage = (): number[] => {
  const liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );
  return liked;
};
export const setLikedStorage = (id: number): number[] => {
  let liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );
  if (liked.includes(id)) {
    liked = liked.filter(currentId => currentId !== id);
  } else {
    liked.push(id);
  }
  localStorage.setItem(StorageKeys.liked, JSON.stringify(liked));
  return liked;
};

export const getParticipatedStorage = (): number[] => {
  const participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );
  return participated;
};
export const setParticipatedStorage = (id: number): number[] => {
  let participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );
  if (participated.includes(id)) {
    participated = participated.filter(currentId => currentId !== id);
  } else {
    participated.push(id);
  }
  localStorage.setItem(StorageKeys.participated, JSON.stringify(participated));
  return participated;
};
