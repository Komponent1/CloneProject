import React, { useEffect } from 'react';
import * as style from './style';
// import { Autocomplete } from '../';
import { React as Komp } from '@seolim/komponent';

type Prop = {
  fetcher: Function
}
const Searchbar: React.FC = ({ fetcher }: Prop) => {

  return (
    <style.div className='searchbar'>
      <Komp.AutoComplete fetcher={fetcher} />
    </style.div>
  )
};

export default Searchbar;
