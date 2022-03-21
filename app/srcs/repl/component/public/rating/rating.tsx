import React, { useState, useEffect } from 'react';
import * as style from './style';

type Prop = {
  disc?: 'star'|'circle',
  fetcher?: (rate: number) => Promise<any|void>
  num?: number,
  init?: number
}
const Rating: React.FC = ({ disc = 'star', fetcher = async (rate: number) => {}, num = 5, init = 0 }: Prop) => {
  const [hover, setHover] = useState<number>(0);
  const [rate, setRate] = useState<number>(init);
  const [before, setBefore] = useState<number>(init);

  useEffect(() => {
    if (before === rate) return;
    fetcher(rate)
      .then(() => setBefore(rate))
      .catch((err) => {
        alert(err);
        setRate(before);
      })
  }, [ rate ])

  return (
    <style.div className='kui_rating'>
      {Array.from({ length: num }).map((_, i) => (
        <style.rate className='kui_rating_rate' key={i}
          onMouseOver={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
          onClick={() => {
            if (i === rate - 1) setRate(i);
            else setRate(i + 1);
          }}
          rate={i < rate}
          hover={i < hover}>
          {'\u2606'}
        </style.rate>
      ))}
    </style.div>
  )
};

export default Rating;
