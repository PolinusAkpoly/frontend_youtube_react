/*
GENERATE WITH MUDEY FORMATION
CREATED AT : 16/08/2023 09:46:00
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
import './PassWordInput.css';


interface PassWordInputProps {
 name: string,
 placeholder: string,
 handleChange: (event: any)=>void
}


const PassWordInput : FC<PassWordInputProps> = ({name, placeholder, handleChange}) =>{

    // const entityService = new EntityService()
    const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState("password")

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        setLoading(false)
      }
      runLocalData()
    },[value])

    const handleSetType = () =>{
      inputType === "password" ? setInputType("text") : setInputType("password")
    }

  return (
    <>
      <div className="PassWordInput flex form-row relative">
          <input 
          type={inputType}
           name={name} 
           placeholder={placeholder}
           onChange={handleChange}
           className='flex-1' />
           <div className="absolute password-eye">
            {
              inputType === "password" ?
              <i className="fa fa-eye" onClick={handleSetType}  ></i>
              :
              <i className="fa fa-eye-slash" onClick={handleSetType}></i>
            }
            
            
            </div>
      </div>
    </>
  );
}

export default PassWordInput;