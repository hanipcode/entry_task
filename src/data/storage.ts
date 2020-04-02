import { IUser } from '../types/user.types';

enum StorageKeys {
  user = 'storage/user'
}

export const setUserStorage = (user: IUser) =>
  localStorage.setItem(StorageKeys.user, JSON.stringify(user));

export const getUserStorage = (): IUser =>
  JSON.parse(localStorage.getItem(StorageKeys.user) || '{}');
