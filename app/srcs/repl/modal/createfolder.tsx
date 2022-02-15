import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequest } from '../hook';

const CreateFolder: React.FC = () => {
  const navigate = useNavigate();
  const [ value, setValue ] = useState<string>();
  const path = useParams();
  console.log(path);
  const [ data, loading, fetcher ] = useRequest('repl', 'create', {type: 'dir', name: value, paths: path }, true);

  const makeFolder = async () => {
    await fetcher();
    navigate(-1);
  }

  return (
    <div>
      New Folder
      <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={() => navigate(-1)}>cancel</button>
      <button onClick={() => makeFolder()}>create</button>
    </div>
  )
};

export default CreateFolder;
