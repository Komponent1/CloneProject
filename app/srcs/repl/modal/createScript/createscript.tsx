import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Filterdropdown, Loading } from '../../component';
import { Modal } from '../';
import * as style from './style';
import { langs } from './config';

const useRepo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [repo, setRepo] = useState(null);
  const [err, setErr] = useState(null);

  const fetcher = useCallback(async () => {
    const data = await fetch('/api/repo').then(res => res.json());

    return data;
  }, []);

  const load = useCallback(async () => {
    try {
      const data = await fetcher();
      setRepo(data);
    } catch (err) {
      setErr(err);
    }
  }, []);
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    if (repo) setLoading(false);
  }, [repo]);
  useEffect(() => {
    if (err) setLoading(false)
  }, [err]);

  return { loading, err, repo };
};
const useCreateScript = (navigate) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<number>(0);

  const fetcher = useCallback(async (name: string, lang: string) => {
    const res = await fetch('/api/create?type=script', {
      method: 'POST',
      body: JSON.stringify({ path: { '*': '' }, name, lang })
    });

    return res.status;
  }, []);
  
  const createScript = useCallback(async (name: string, lang: string) => {
    setLoading(true);
    setSuccess(await fetcher(name, lang));
  }, [ fetcher ]);
  useEffect(() => {
    if (success !== 0) {
      setLoading(false);
      if (success === 200) {
        navigate(-1);
      } else alert('error 500');
    }
  }, [ success ]);

  return { loading, createScript };
}

const ImportRepo: React.FC = ({ setBox }) => {
  const { loading, err, repo } = useRepo();
  const [name, setName] = useState<string>();

  if (err) return <div>Error</div>;
  if (loading || !repo) return <Loading />;
  return (
    <>
      <style.title>Import Github</style.title>
      <Button text='Create Template' click={() => setBox(true)}/>
      <style.body>
      <Filterdropdown list={repo.map(e => e.name) /* data */}
        setOption={(value: string) => setName(value)}/>
        
      </style.body>
      <Button text='Import' click={() => {}}/>
    </>
  );
}

const CreateTemplate: React.FC = ({ setBox }) => {
  const [name, setName] = useState<string>('untitled script');
  const [lang, setLang] = useState<string>(langs[0]);
  const ref = useRef<React.Ref>(null);
  const navigate = useNavigate();
  const { loading, createScript } = useCreateScript(navigate);

  if (loading) return <Loading />
  return (
    <>
      <style.title>Create Template</style.title>
      <Button text='Import Github' click={() => setBox(false)}/>
      <style.body>
        <Filterdropdown list={langs}
          setOption={(e: string) => {
            setLang(e)
            ref.current.focus();
          }} />
        <style.input ref={ref}
          value={name}
          onChange={e => setName(e.target.value)}/>
        <style.infobox>
          {lang}
        </style.infobox>
      </style.body>
      <Button text='create' click={() => {
        createScript(name, lang);
      }}/>
    </>
  )
}

const CreateScript: React.FC = () => {
  const [box, setBox] = useState<boolean>(false);

  return (
    <Modal>
      <style.div>
        {box ?
          <CreateTemplate setBox={setBox}/> :
          <ImportRepo setBox={setBox}/>
        }
      </style.div>
    </Modal>
  )
};

export default CreateScript;
