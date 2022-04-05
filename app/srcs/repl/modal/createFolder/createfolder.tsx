import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../';
import { Button, Loading } from '../../component';
import * as style from './style';

const useCreateFolder = (navigate) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSucess] = useState<number>(0);
  
  const fetcher = useCallback(async (path: string, name: string) => {
    const res = await fetch('/api/create?type=dir', {
      method: 'POST',
      body: JSON.stringify({ path, name })
    });

    return res.status;
  }, []);
  const createDirectory = useCallback(async (path: string, name: string) => {
    setLoading(true);
    setSucess(await fetcher(path, name));  
  }, [ fetcher ]);
  useEffect(() => {
    if (success !== 0) {
      setLoading(false);
      if (success === 200) {
        navigate(-1);
      } else alert('err 500');
    }
  }, [ success ]);

  return { loading, createDirectory };
}

const CreateFolder: React.FC = () => {
  const navigate = useNavigate();
  const [ name, setName ] = useState<string>('untitled folder');
  const path = useParams();
  const { loading, createDirectory } = useCreateFolder(navigate);

  if (loading) return <Loading />
  return (
    <Modal>
      <style.div>
        <h3>New Folder</h3>
        <style.input type='text' value={name} onChange={e => {
          e.stopPropagation();
          setName(e.target.value)
        }}/>
        <Button text='cancel' click={() => navigate(-1)}/>
        <Button text='create' click={() => {
          createDirectory(path, name);
        }}/>
      </style.div>
    </Modal>
  )
};

export default CreateFolder;
