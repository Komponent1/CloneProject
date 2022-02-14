import React from 'react';
import * as style from './style';
import { Autocomplete } from '../public';

type Prop = {
  fetcher: Function
}
const Searchbar: React.FC = ({ fetcher }) => {
  

  return (
    <style.div>
      <div>></div>
      <div style={{ display: 'inline-block' }}>
        <Autocomplete fetcher={fetcher} />
      </div>
    </style.div>
  )
};

export default Searchbar;
