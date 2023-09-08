/*
GENERATE WITH MUDEY FORMATION
CREATED AT : 25/08/2023 10:10:02
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
import './Loading.css';


interface LoadingProps {
 
}


const Loading : FC<LoadingProps> = () =>{

    // const entityService = new EntityService()
    const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[value])

  return (
    <Fragment>
    {
      <div className="Loading flex jcc aic">
         <span className="loader"></span>
      </div>
    }
    </Fragment>
  );
}

export default Loading;