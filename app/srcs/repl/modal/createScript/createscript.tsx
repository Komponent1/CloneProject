import React, { useState, useRef } from 'react';
import { Button, Filterdropdown } from '../../component';
import { Modal } from '../';
import * as style from './style';
import { langs } from './config';

const ImportRepo: React.FC = ({ setBox }) => {
  return (
    <>
      <style.title>Import Github</style.title>
      <Button text='Create Template' click={() => setBox(true)}/>
      <style.body>
      <Filterdropdown list={['c', 'cpp', 'javascript']}/>
        
      </style.body>
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
        <style.input ref={ref}/>
        <style.infobox>
          {lang}
        </style.infobox>
      </style.body>
    </>
  )
}

const CreateScript: React.FC = () => {
  const [box, setBox] = useState<boolean>(true);

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
