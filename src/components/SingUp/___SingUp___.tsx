import React, { Component, FC, useState } from 'react';
import './SingUp.css';
import { render } from '@testing-library/react';

interface SingUpProps {}


const SignUp: FC<SingUpProps> = () => {
    
    const [formData, setFormData] = useState<any>({})


    

    // const handleChange = (event: any) =>{
    //     event.preventDefault()
    //     console.log({formData});
        
    // }
    const handleSubmit = (event: any) =>{
        event.preventDefault()
        console.log({formData});
        
    }
    
    
    return (
    <div className="sign-box">
    <form action=""  method="POST"  className="absolute center-element box"
    onSubmit={handleSubmit}
    >
        <div className="form-title flex flex-center-h flex-center-v gap-5">
            <i className="fab fa-youtube"></i>
            <h2>Inscription</h2>
        </div>
        <div className="form-row flex">
        <input type="text"
        placeholder="Username"
        name='full_name' 
        className="flex-1" 
        onChange={(e)=>setFormData({...formData, full_name: e.target.value})}
           />
        </div>
        <div className="form-row flex">
            <input type="email" placeholder="E-mail" name='email' className="flex-1"
            onChange={(e)=>setFormData({...formData, email: e.target.value})}
            />
        </div>
        <div className="form-row flex">
            <input type="password" placeholder="Mot de passe" name='password' className="flex-1"
            onChange={(e)=>setFormData({...formData, password: e.target.value})}
            />
        </div>
        <div className="form-row flex">
            <input type="password" className="flex-1" placeholder="Confirmez votre mot de passe"
            onChange={(e)=>setFormData({...formData, confirm_password: e.target.value})}
            />
        </div>
        <div className="submit-button flex">
            <button className="submit-signup flex-1 danger">S'inscrire</button>
        </div>
        <div className="form-info text-center">
            Si vous avez de compte alors, <a href="/singin">cliquez ici</a> pour vous connecter.
        </div>
    </form>
</div>
  )};
  
  export default SignUp;




