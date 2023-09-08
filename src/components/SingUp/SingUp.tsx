import React, { FC,  useState } from 'react';

// import { Redirect } from 'react-router-dom'
import { Link, Navigate  } from 'react-router-dom';
import './SingUp.css';
import { inputValidator } from '../../helpers/validators';
import PassWordInput from '../PassWordInput/PassWordInput';
import EntityManager from '../../api/entity';
import { User } from '../../models/user';
;
// import SingIn from '../SingIn/SingIn';







interface SingUpProps { }


const SignUp: FC<SingUpProps> = () => {
   


    const [formData, setFormData] = useState<any>({})
    const [errors, setErrors] = useState<any>({})
    const entity = new EntityManager()
    // const Navigate = useNavigate()
    const [goToSignIn, setGoToSignIn] = useState<boolean>(false)
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

            if (checkFormValid()) {
                const user: User = formData
                const data = await entity.signup(user)
                
                if(data.isSuccess){
                    // redirect to signin
                    setGoToSignIn(true)
                }else{
                    //error
                    setMessage(data.error)
                    // console.log(message);
                    // console.log(data.error);
                    
                    
                }
            }
    
    }

    if(goToSignIn){
     return  <Navigate  to="/singin"/>
        // return <SingIn/>
    }
   
    return (
        <div className="sign-box">
           
            
            <form action="" method="POST" className="absolute center-element box"
                onSubmit={handleSubmit}
            >
                <div className="form-title flex flex-center-h flex-center-v flex-column gap-5">
                    <div className='flex flex-center-v'>
                    <i className="fab fa-youtube"></i>
                    <h2>Inscription</h2>
                    </div>
                    <p className='danger'>
                        {message}
                    </p>
                </div>
                <div className="form-row flex flex-column ">
                    <input type="text"
                        placeholder="Username"
                        name='full_name'
                        className="flex-1"
                        onChange={handleChange}
                    />
                    {
                        errors.full_name ? <div className='danger'>{errors.full_name} </div> : null

                    }

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
                <div className="form-row flex flex-column">
                    <PassWordInput
                        placeholder="Confirm your password please !"
                        name="passwordConfirm"
                        handleChange={handleChange}
                    />
                    {
                        errors.passwordConfirm ? <div className='danger'>{errors.passwordConfirm} </div> : null

                    }
                </div>
                <div className="submit-button flex">
                    <button className="submit-signup flex-1 danger">S'inscrire</button>
                </div>
                <div className="form-info text-center">
                    Si vous avez de compte alors, <Link to="/singin">cliquez ici</Link> pour vous connecter.
                </div>
            </form>
        </div>
    )

};

export default SignUp;




