import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequest } from '../../hook';
import { Modal } from '../';
import { Button } from '../../component';
import * as style from './style';

const useFolder = (navigate, value) => {
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

  return makeFolder;
}

const CreateFolder: React.FC = () => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState<string>('untitled folder');
  const makeFolder = useFolder(navigate, value);

  return (
    <Modal>
      <style.div>
        <h3>New Folder</h3>
        <style.input type='text' value={value} onChange={e => {
          e.stopPropagation();
          setValue(e.target.value)
        }}/>
        <Button text='cancel' click={() => navigate(-1)}/>
        <Button text='create' click={() => makeFolder()}/>
      </style.div>
    </Modal>
  )
};

export default CreateFolder;
