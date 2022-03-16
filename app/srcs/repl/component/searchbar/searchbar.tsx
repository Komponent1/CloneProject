import React from 'react';
import * as style from './style';
import { Autocomplete } from '../';

type Prop = {
  fetcher: Function
}
const Searchbar: React.FC = ({ fetcher }) => {
  return (
    <style.div className='searchbar'>
      <Autocomplete fetcher={fetcher} />
    </style.div>
  )
};

export default Searchbar;
