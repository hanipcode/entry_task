import randomInt from '../utils/randomInt';
import users from './users.json';
import { ILoginParam } from '../types/service/login.types';
import { IResponse } from '../types/service/response.types';
import { IUser } from '../types/user.types';

type DataGetter<Response> = () => IResponse<Response>;

const axiosBoongan = <Response>(
  dataGetter: DataGetter<Response>
): Promise<IResponse<Response>> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = dataGetter();
      if (data.isError || !data.data) {
        reject(data.message);
        return;
      }
      resolve(data);
    }, randomInt(500, 1000));
  });

export const loginService = (param: ILoginParam) =>
  axiosBoongan<IUser>(() => {
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
    return {
      isError: false,
      message: 'Success Login',
      data: currentUser
    };
  });
