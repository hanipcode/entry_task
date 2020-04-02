import { useState, useCallback, useEffect } from 'react';
import { IResponse } from '../types/service/response.types';

function transformServiceToHook<ResponseType, InitialValue, ServiceParam = {}>(
  serviceFn: (param?: ) => IResponse<ResponseType>,
  initialValue: InitialValue,
  withEffect = false
) {
  return function useService() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialValue);

    const action = useCallback(
      async (param?: ServiceParam, callback?: Function) => {
        try {
          setLoading(true);
          const data = await serviceFn(param);

          setData(data);
          if (callback) {
            callback(data);
          }
        } catch (error) {
          alert(error.message);
        }
      },
      []
    );

    const actionWithId = useCallback(
      async (id: string, param?: ServiceParam, callback?: Function) => {
        try {
          const data: IResponse = await serviceFn(id, param);
          setData(data);
          if (callback) {
            callback(data);
          }
        } catch (error) {
          alert(error.message);
        }
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
      actionWithId
    };
  };
}

export default transformServiceToHook;
