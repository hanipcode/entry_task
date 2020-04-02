import randomInt from '../utils/randomInt';
import users from './users.json';
import posts from './posts.json';
import { ILoginParam } from '../types/service/login.types';
import { IResponse } from '../types/service/response.types';
import { IUser } from '../types/user.types';
import { setUserStorage } from './storage';
import { IPaginationParam } from '../types/service/common_param.types';
import { IPost } from '../types/post.types';
import getDataInPage from '../utils/getDataInPage';

type DataGetter<Response> = () => IResponse<Response>;

const axiosBoongan = <Response>(
  dataGetter: DataGetter<Response>
): Promise<IResponse<Response>> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = dataGetter();
      console.log(data);

      if (data.isError || !data.data) {
        reject(data);
        return;
      }
      resolve(data);
    }, randomInt(500, 2000));
  });

export const loginService = (param: ILoginParam) =>
  axiosBoongan<IUser>(() => {
    if (!param.email || !param.password) {
      return {
        isError: true,
        message: 'Email and password can not be empty',
        data: null
      };
    }
    const currentUser = users.find(
      user => user.email === param.email && user.password === param.password
    );
    if (!currentUser) {
      return {
        isError: true,
        message: 'Failed Login',
        data: null
      };
    }
    setUserStorage(currentUser);
    return {
      isError: false,
      message: 'Success Login',
      data: currentUser
    };
  });

export const getAllPost = (param: IPaginationParam) =>
  axiosBoongan<IPost[]>(() => {
    const { page, limit } = param;
    const currentData = getDataInPage<IPost>(posts as IPost[], page, limit);
    return {
      isError: false,
      data: currentData,
      hasNext: currentData.length > 0,
      message: 'Success Get Data'
    };
  });
