import transformServiceToHook from '../utils/transformServiceToHooks';
import { IUser } from '../types/user.types';
import { loginService } from '../data/service';
import { ILoginParam } from '../types/service/login.types';

const useLoginService = transformServiceToHook<IUser, ILoginParam>(
  loginService
);

export default useLoginService;
