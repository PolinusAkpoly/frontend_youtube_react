export const inputValidator = {
    errors: {},
    passwordValue: '',
    validator: (values) => {

        if (!values.full_name) {
            inputValidator.errors.full_name = 'The full_name field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.full_name)) {
            inputValidator.errors.full_name = 'The full_name must be at least 2 and at most 20 characters';
        }
        else if (/^[a-zA-Z]{2,20}$/i.test(values.full_name)) {
            delete inputValidator.errors.full_name
        }



        if (!values.email) {
            inputValidator.errors.email = 'The email field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            inputValidator.errors.email = 'Invalid email address';
        } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            delete inputValidator.errors.email;
        }



        if (!values.password) {
            inputValidator.errors.password = 'The password field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            inputValidator.errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        }
        else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            inputValidator.passwordValue = values.password;
            delete inputValidator.errors.password;
        }


        if (!values.passwordConfirm) {
            inputValidator.errors.passwordConfirm = 'The password confirm field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.passwordConfirm)) {
            inputValidator.errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        } else if (values.passwordConfirm !== values.password) {
            inputValidator.errors.passwordConfirm = 'The password does not match its confirmation';
        } else if (values.passwordConfirm === values.password) {

            delete inputValidator.errors.passwordConfirm;
        }

        return inputValidator.errors


    },
    checkAll: (values) => {
        if (!values.email) {
            inputValidator.errors.email = 'The email field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            inputValidator.errors.email = 'Invalid email address';
        }

        if (!values.full_name) {
            inputValidator.errors.full_name = 'The full_name field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.full_name)) {
            inputValidator.errors.full_name = 'The full_name must be at least 2 and at most 20 characters';
        }


        if (!values.password) {
            inputValidator.errors.password = 'The password field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            inputValidator.errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        }

        if (!values.passwordConfirm) {
            inputValidator.errors.passwordConfirm = 'The password confirm field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            inputValidator.errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        } else if (values.passwordConfirm !== values.password) {
            inputValidator.errors.passwordConfirm = 'The password does not match its confirmation';

        }

        return inputValidator.errors
    }

}






















// export default function Validator(values) {

// const errors = {};
// let passwordValue = '' ;

// if (!values.full_name) {
//     errors.full_name = 'The full_name field is required';
// } else if (!/^[a-zA-Z]{2,20}$/i.test(values.full_name)) {
//     errors.full_name = 'The full_name must be at least 2 and at most 20 characters';
// }
//  else if (/^[a-zA-Z]{2,20}$/i.test(values.full_name)) {
//     delete errors.full_name
// }



// if (!values.email) {
//     errors.email = 'The email field is required';
// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
// }else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     delete errors.email ;
// }



// if (!values.password) {
//    errors.password = 'The password field is required';
// } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
//    errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
// }
// else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
//     passwordValue = values.password;
//     delete errors.password;
// }


// if (!values.passwordConfirm) {
//     errors.passwordConfirm = 'The password confirm field is required';
// } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.passwordConfirm)) {
//     errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
// } else if(values.passwordConfirm !== passwordValue){
//    errors.passwordConfirm = 'The password does not match its confirmation';
// }else if(values.passwordConfirm === passwordValue){

//     delete errors.passwordConfirm;
// }

// return errors


// };



// export default function checkAll(values){


//     if (!values.email) {
//         errors.email = 'The email field is required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     if (!values.firstname) {
//         errors.firstname = 'The firstname field is required';
//     } else if (!/^[a-zA-Z]{2,20}$/i.test(values.firstname)) {
//         errors.firstname = 'The firstname must be at least 2 and at most 20 characters';
//     }

//     if (!values.lastname) {
//         errors.lastname = 'The lastname field is required';
//     } else if (!/^[a-zA-Z]{2,20}$/i.test(values.lastname)) {
//         errors.lastname = 'The lastname must be at least 2 and at most 20 characters';
//     }

//     if (!values.password) {
//        errors.password = 'The password field is required';
//     } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
//         errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
//     }

//     if (!values.passwordConfirm) {
//         errors.passwordConfirm = 'The password confirm field is required';
//     } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
//         errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
//     } else if(values.passwordConfirm !== values.password){
//         errors.passwordConfirm = 'The password does not match its confirmation';
//     }

//     return  errors
// }





























































