import React from 'react';
import * as style from './style';

type Prop = {
  type?: 'linearspin' | 'delayspin' | 'line'
}

const typeCheck = (type) => {
  switch(type) {
    case 'linearspin':
      return (<style.linearspin className='kui_loading_linearspin'/>);
    case 'delayspin':
      return (<style.delayspin className='kui_loading_delayspin'/>);
    case 'line':
      return (
        <style.lines className='kui_loading_lines'>
          <style.line className='kui_loading_line' delay={0} />
          <style.line className='kui_loading_line' delay={0.2} />
          <style.line className='kui_loading_line' delay={0.4} />
        </style.lines>
      )
  }
}

const Loading = ({ type = 'linearspin' }: Prop) => {
  return (
    <style.div className='kui_loading'>
      {typeCheck(type)}
    </style.div>
  )
};

export default Loading;
