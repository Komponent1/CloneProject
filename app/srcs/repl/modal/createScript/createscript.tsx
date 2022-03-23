import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Filterdropdown, Loading } from '../../component';
import { useRequest } from '../../hook';
import { Modal } from '../';
import * as style from './style';
import { langs } from './config';

const useCreateScript = (lang: string) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const { loading, err, fetcher } = useRequest('repl', 'create', {
    type: 'script', name, paths: [], lang
  }, true);

  const create = async () => {
    if (lang === '') return;
    if (name === '') return;
    await fetcher();
    navigate(-1);
  }

  return { create, name, setName, loading }
};
const useGitRepo = () => {
  const { loading, err, data } = useRequest('repl', 'getrepo');
  const [name, setName] = useState<string>();

  return { data, loading }
}
const ImportRepo: React.FC = ({ setBox }) => {
  const { data, loading } = useGitRepo();
  const [name, setName] = useState<string>();

  if (loading || !data) return <Loading />
  return (
    <>
      <style.title>Import Github</style.title>
      <Button text='Create Template' click={() => setBox(true)}/>
      <style.body>
      <Filterdropdown list={data.map(e => e.name)}
        setOption={(value: string) => setName(value)}/>
        
      </style.body>
      <Button text='Import' click={() => {}}/>
    </>
  )
}

const CreateTemplate: React.FC = ({ setBox }) => {
  const [lang, setLang] = useState<string>(langs[0])
  const ref = useRef<React.Ref>(null)
  const { create, name, setName } = useCreateScript(lang);

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
      <Button text='create' click={() => create()}/>
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
