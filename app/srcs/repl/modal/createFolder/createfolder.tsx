import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../';
import { Button } from '../../component';
import * as style from './style';

const CreateFolder: React.FC = () => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState<string>('untitled folder');

  return (
    <Modal>
      <style.div>
        <h3>New Folder</h3>
        <style.input type='text' value={value} onChange={e => {
          e.stopPropagation();
          setValue(e.target.value)
        }}/>
        <Button text='cancel' click={() => navigate(-1)}/>
        <Button text='create' click={() => {}}/>
      </style.div>
    </Modal>
  )
};

export default CreateFolder;
