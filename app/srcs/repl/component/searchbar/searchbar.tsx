import React from 'react';
import * as style from './style';
import { Autocomplete } from '../';

type Prop = {
  fetcher: Function
}
const Searchbar: React.FC = ({ fetcher }) => {
  return (
    <style.div className='searchbar'>
      <div className='searchbar_icon'>{'>'}</div>
      <div style={{ display: 'inline-block' }}>
        <Autocomplete fetcher={fetcher} />
      </div>
    </style.div>
  )
};

export default Searchbar;
