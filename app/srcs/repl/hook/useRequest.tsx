import React, { useState, useEffect } from 'react';
import server from '../../server/server';

const useRequest = (type: string, api: string, option?: Object, nodirect?: boolean) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetcher = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await server.request(type, api, option);
      setData(data);
      setLoading(false);
      return data;
    } catch(err) {
      setErr(err);
      setLoading(false);
      return err;
    }
  }

  useEffect(() => {
    if (nodirect) return;
    fetcher();
  }, [ api ]);

  return {data, loading, err, fetcher};
};

export default useRequest;
