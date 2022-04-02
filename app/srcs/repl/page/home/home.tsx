import React, { useCallback, useEffect, useState } from 'react';
import * as style from './style';
import { Homebox, Loading } from '../../component';
import { langs } from './config'; 

const useRepo = () => {
  const fetcher = useCallback(async () => {
    const data = await fetch('/api/repo').then(res => res.json());

    return data;
  });

  return fetcher;
};
const useFile = () => {
  const fetcher = useCallback(async () => {
    const data = await fetch('/api/file').then(res => res.json());

    return data.file;
  })

  return fetcher;
};
const useHome = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(null);
  const [file, setFile] = useState(null);
  const [repo, setRepo] = useState(null);
  
  const repofetcher = useRepo();
  const filefetcher = useFile();

  const load = useCallback(async () =>{
    setLoading(true);
    try {
      const filedata = await filefetcher();
      const repodata = await repofetcher();
      setFile(filedata);
      setRepo(repodata);
    } catch (err) {
      setErr(err);
    }
  }, [ filefetcher, repofetcher ])

  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    if (file !== null && repo !== null) setLoading(false);
  }, [ file, repo ])
  useEffect(() => {
    if (err !== null) setLoading(false)
  }, [ err ])

  return { loading, err, file, repo }
};

const Home: React.FC = () => {
  const { loading, err, file, repo } = useHome();

  if (err) return <div>Error</div>
  if (loading || !file || !repo) return <style.div><Loading /></style.div>
  return (
    <style.div className='home'>
      <Homebox title='Create' addon='See all templates' link='' type='create' datas={{ langs }}/>
      <Homebox title='Recent' addon='See all repls' link='' type='recent' datas={{ config: file }} />
      <Homebox title='Repos' addon='See all repos' link='' type='github' datas={{ config: repo }} />
    </style.div>
  )
};

export default Home;