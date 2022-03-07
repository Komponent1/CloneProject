import React from 'react';
import { Homebox } from '../component';
import { useRequest } from '../hook';

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

  if (loading || !repl) return <div>Loading</div>
  if (err) return <div>Error</div>
  return (
    <div>
      <Homebox title='Create' addon='See all templates' link='' type='create' datas={{ config: ['c', 'cpp'] }}/>
      <Homebox title='Recent' addon='See all repls' link='' type='recent' datas={{ config: repl }} />
      <Homebox title='Repos' addon='See all repos' link='' type='github' datas={{ config: repo.slice(0, 3) }} />
    </div>
  )
};

export default Home;