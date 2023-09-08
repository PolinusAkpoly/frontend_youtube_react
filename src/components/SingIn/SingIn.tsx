import React, { FC, useState } from 'react';
import './SingIn.css';
import { Link, Navigate } from 'react-router-dom';
import PassWordInput from '../PassWordInput/PassWordInput';
import { User } from '../../models/user';
import { inputValidator } from '../../helpers/validators';
import EntityManager from '../../api/entity';

interface SingInProps {}

const SingIn: FC<SingInProps> = () => {
    
    const [formData, setFormData] = useState<any>({})
    const [errors, setErrors] = useState<any>({})
    const entity = new EntityManager()
    // const Navigate = useNavigate()
    const [goToHome, setGoToHome] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")



    const handleChange = (event: any) => {
        event.preventDefault()
        const { name, value } = event.target
        const newValue = { ...formData, [name]: value }
        setFormData(newValue)

        setErrors(inputValidator.validator(newValue))


    }

    const checkFormValid = () => {

        const errors = inputValidator.checkAll(formData)
        if (Object.keys(errors).length === 0) {
            return true
        }


        return false
    }

    const handleSubmit = async (event: any) => {
       
            event.preventDefault()

            if (formData.email && formData.password) {
                const user: User = formData
                const data = await entity.signin(user)
                // console.log({data});
                if(data.isSuccess){
                    localStorage.setItem("authData", JSON.stringify(data))
                    setGoToHome(true)
                }else{
                    setMessage(data.message)
                     
                }
                
            }     
    
    }

    if(goToHome){
     return  <Navigate  to="/"/>
        
    }
   
    return (
        <div className="sign-box">
           
            
            <form action="" method="POST" className="absolute center-element box"
                onSubmit={handleSubmit}
            >
                <div className="form-title flex flex-center-h flex-center-v flex-column gap-5">
                <div className='flex flex-center-v'>
                    <i className="fab fa-youtube"></i>
                    <h2>Se Connecter</h2>
                    </div>
                    <p className='danger'>
                        {message}
                    </p>
                </div>
               
                <div className="form-row flex flex-column">
                    <input type="email" placeholder="E-mail" name='email' className="flex-1"
                        onChange={handleChange}
                    />
                    {
                        errors.email ? <div className='danger'>{errors.email} </div> : null

                    }
                </div>
                <div className="form-row flex flex-column relative">
                    <PassWordInput
                        placeholder="Your password please !"
                        name="password"
                        handleChange={handleChange}
                    />

                    {
                        errors.password ? <div className='danger'>{errors.password} </div> : null

                    }
                </div>
               
                <div className="submit-button flex">
                    <button className="submit-signup flex-1 danger">Se connecter</button>
                </div>
                <div className="form-info text-center">
                    Si vous n'avez pas de compte alors, <Link to="/singup">cliquez ici</Link> pour vous inscrire.
                </div>
            </form>
        </div>
    )
}

export default SingIn;
