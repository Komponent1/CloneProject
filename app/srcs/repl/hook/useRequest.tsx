import React, { useState, useEffect } from 'react';
import server from '../../server/server';

const useRequest = (type: string, api: string, option?: Object) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(async () => {
    setLoading(true);
    const { data } = await server.request(type, api, option);
    setData(data);
    setLoading(false)
  }, [ api ]);

  return [data, loading];
};

export default useRequest;
