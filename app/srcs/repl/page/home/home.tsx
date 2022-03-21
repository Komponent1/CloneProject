import React from 'react';
import * as style from './style';
import { Homebox, Loading } from '../../component';
import { useRequest } from '../../hook';
import { langs } from './config'; 

const useHomeData = () => {
  const repl = useRequest('repl', 'getfile');
  const repos = useRequest('repl', 'getrepo');

  return {
    loading: repl.loading || repos.loading,
    err: repl.err || repos.err,
    repl: repl.data,
    repo: repos.data
  }
}

const Home: React.FC = () => {
  const { loading, err, repl, repo } = useHomeData();

  if (err) return <div>Error</div>
  if (loading || !repo) return <style.div><Loading /></style.div>
  return (
    <style.div className='home'>
      <Homebox title='Create' addon='See all templates' link='' type='create' datas={{ langs }}/>
      <Homebox title='Recent' addon='See all repls' link='' type='recent' datas={{ config: repl }} />
      <Homebox title='Repos' addon='See all repos' link='' type='github' datas={{ config: repo.slice(0, 3) }} />
    </style.div>
  )
};

export default Home;