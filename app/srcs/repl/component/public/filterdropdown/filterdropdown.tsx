import React, { useState } from 'react';
import * as style from './style';

const MakeLi: React.FC = ({ list, setDisplay, setValue, setOption }) => (
  <>
    {list.map((e , i) => (
          <style.item className='kui_filterdropdown_li' key={i}
            onClick={event => {
              event.stopPropagation();
              setValue(e);
              setDisplay(false);
              setOption(e, i);
            }}>
            {e}
          </style.item>
    ))}
  </>
);

type Prop = {
  placeholder?: string
  init?: string
  list: string[]
  setOption: (optin: string, idx?: number) => void|any
}
const Filterdropdown: React.FC = ({ placeholder, init, list, setOption }: Prop) => {
  const [display, setDisplay] = useState<boolean>(false);
  const [value, setValue] = useState<string>(init ? init : '');
  
  return (
    <style.div className='kui_filterdropdown'>
      <style.input className='kui_filterdropdown_input'
        placeholder={placeholder ? placeholder : ''}
        onFocus={() => setDisplay(true)}
        value={value}
        onChange={e => setValue(e.target.value)}/>
      <style.menu className='kui_filterdropdown_ul'
        show={display}>
        {value === '' ?
          <MakeLi list={list} setDisplay={setDisplay} setValue={setValue} setOption={setOption}/> :
          <MakeLi list={list.filter(e => e.search(value) !== -1)} setDisplay={setDisplay} setValue={setValue} setOption={setOption}/>
        }
      </style.menu>
    </style.div>
  )
};

export default Filterdropdown;
