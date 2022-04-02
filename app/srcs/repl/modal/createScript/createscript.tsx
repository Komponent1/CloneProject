import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Filterdropdown, Loading } from '../../component';
import { Modal } from '../';
import * as style from './style';
import { langs } from './config';

const ImportRepo: React.FC = ({ setBox }) => {
  const [name, setName] = useState<string>();

  return (
    <>
      <style.title>Import Github</style.title>
      <Button text='Create Template' click={() => setBox(true)}/>
      <style.body>
      <Filterdropdown list={[] /* data */}
        setOption={(value: string) => setName(value)}/>
        
      </style.body>
      <Button text='Import' click={() => {}}/>
    </>
  )
}

const CreateTemplate: React.FC = ({ setBox }) => {
  const [lang, setLang] = useState<string>(langs[0])
  const ref = useRef<React.Ref>(null)

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
          onChange={e => {/* change name */}}/>
        <style.infobox>
          {lang}
        </style.infobox>
      </style.body>
      <Button text='create' click={() => {/* create diretory */}}/>
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
