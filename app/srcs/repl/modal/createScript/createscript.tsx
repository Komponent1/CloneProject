import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../';
import * as style from './style';

const CreateScript: React.FC = () => {
  const navigate = useNavigate();
  const path = useParams();

  return (
    <Modal>
      <style.div>
        <style.head>
          <style.title>Create a repl</style.title>
          <style.button>import github</style.button>
        </style.head>
        <style.body>
          <style.left>
            <style.input></style.input>
          </style.left>
          <style.right>
            <style.input></style.input>
          </style.right>
        </style.body>
      </style.div>
    </Modal>
  )
};

export default CreateScript;
