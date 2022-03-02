import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequest } from '../../hook';
import { Modal } from '../../component';
import * as style from './style';

const CreateFolder: React.FC = () => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState<string>('untitled folder');
  const path = useParams();
  const { fetcher } = useRequest(
    'repl',
    'create', 
    {
      type: 'dir',
      name: value,
      paths: path['*'].split('/').filter(e => e !== '')
    }, 
    true
  );

  const makeFolder = async () => {
    await fetcher();
    navigate(-1);
  }

  return (
    <Modal>
      <style.div>
      <h3>New Folder</h3>
      <style.input type='text' value={value} onChange={e => {
        e.stopPropagation();
        setValue(e.target.value)
      }}/>
      <style.button style={{ background: 'rgba(172, 172, 172, 0.8)'}} onClick={() => navigate(-1)}>cancel</style.button>
      <style.button style={{ background: '#6B8DF2', color: 'white' }} onClick={() => makeFolder()}>create</style.button>
      </style.div>
    </Modal>
  )
};

export default CreateFolder;
