import { IUser } from '../types/user.types';

enum StorageKeys {
  user = 'storage/user',
  liked = 'storage/liked',
  participated = 'storage/participated'
}

export const setUserStorage = (user: IUser) =>
  localStorage.setItem(StorageKeys.user, JSON.stringify(user));

export const getUserStorage = (): IUser =>
  JSON.parse(localStorage.getItem(StorageKeys.user) || '{}');

export const getLiked = (): number[] => {
  const liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );
  return liked;
};
export const setLiked = (id: number) => {
  const liked: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.liked) || '[]'
  );
  liked.push(id);
  localStorage.setItem(StorageKeys.liked, JSON.stringify(liked));
};

export const getParticipated = (): number[] => {
  const participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );
  return participated;
};
export const setParticipated = (id: number) => {
  const participated: number[] = JSON.parse(
    localStorage.getItem(StorageKeys.participated) || '[]'
  );
  participated.push(id);
  localStorage.setItem(StorageKeys.participated, JSON.stringify(participated));
};
