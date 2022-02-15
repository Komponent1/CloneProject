import React, { useState, useEffect } from 'react';
import server from '../../server/server';

const useRequest = (type: string, api: string, option?: Object, nodirect?: boolean) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetcher = async () => {
    if (loading) return;

    setLoading(true);
    const { data } = await server.request(type, api, option);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    if (nodirect) return; 
    fetcher();
  }, [ api ]);

  return [data, loading, fetcher];
};

const usePost = (type: string, api: string, option?: Object) => {
  const [data, setData] = useState(null);

}

export default useRequest;
