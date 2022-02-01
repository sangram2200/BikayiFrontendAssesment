import React, { useState, useEffect } from 'react';
import './Home.css';
import { BasicTable } from './BasicTable';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('In the effect');
    fetch('http://api.nobelprize.org/v1/prize.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, []);

  return <div>{data && <BasicTable data={data} />}</div>;
}
