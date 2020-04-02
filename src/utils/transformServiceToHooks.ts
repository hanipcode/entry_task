import { useState, useCallback, useEffect } from 'react';
import { IResponse } from '../types/service/response.types';

type serviceFnPlain<ServiceParam, ResponseType> = (
  param?: ServiceParam
) => Promise<IResponse<ResponseType>>;
type serviceFnParamRequired<ServiceParam, ResponseType> = (
  param: ServiceParam
) => Promise<IResponse<ResponseType>>;
type serviceFnWithId<ServiceParam, ResponseType> = (
  userId: number,
  param?: ServiceParam
) => Promise<IResponse<ResponseType>>;
type ServiceFn<ServiceParam, ResponseType> =
  | serviceFnPlain<ServiceParam, ResponseType>
  | serviceFnWithId<ServiceParam, ResponseType>
  | serviceFnParamRequired<ServiceParam, ResponseType>;

function transformServiceToHook<ResponseType, ServiceParam = null>(
  serviceFn: ServiceFn<ServiceParam, ResponseType>,
  initialValue: any = [],
  withEffect = false
) {
  return function useService() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialValue);

    const action = useCallback(
      async (param?: ServiceParam, callback?: Function) => {
        try {
          setLoading(true);
          const data = await (serviceFn as serviceFnPlain<
            ServiceParam,
            ResponseType
          >)(param);
          setData(data.data);
          if (callback) {
            callback(data);
          }
        } catch (error) {
          alert(error.message);
        }
        setLoading(false);
      },
      []
    );

    const actionWithParam = useCallback(
      async (param: ServiceParam, callback?: Function) => {
        try {
          setLoading(true);
          const data = await (serviceFn as serviceFnPlain<
            ServiceParam,
            ResponseType
          >)(param);
          setData(data.data);
          if (callback) {
            callback(data);
          }
        } catch (error) {
          alert(error.message);
        }
        setLoading(false);
      },
      []
    );

    const actionWithId = useCallback(
      async (id: number, param?: ServiceParam, callback?: Function) => {
        try {
          setLoading(true);
          const data = await (serviceFn as serviceFnWithId<
            ServiceParam,
            ResponseType
          >)(id, param);
          setData(data.data);
          if (callback) {
            callback(data);
          }
        } catch (error) {
          alert(error.message);
        }
        setLoading(false);
      },
      []
    );

    useEffect(() => {
      if (withEffect) {
        action();
      }
    }, [action]);

    return {
      loading,
      data,
      action,
      actionWithId,
      actionWithParam
    };
  };
}

export default transformServiceToHook;
