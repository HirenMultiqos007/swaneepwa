import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input  from './Input/Input2';



const schema = yup.object().shape({
    email: yup.string().email().required("Please provide email id"),
    password: yup.string().min(4, "Kindly enter a password").max(8, "Password must have max 8 characters").required("Kindly enter a password"),
});

function Forms(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const { t } = useTranslation()
    // const navigate = useNavigate()


    return (

        <>
            
                {/* <div className="input-wrapper">
                    <label> {`${t(`signinmodal.${props?.label}`)}`}</label>
                    <input
                        type={props?.type}  // 
                        {...register(props?.key)} // 
                        className="custom-input"
                    />
                    <p className='error'>{errors.email?.message}</p>
                </div> */}
                 <div className="input-wrapper">
                            <label> {`${t('signinmodal.email')}`}</label>
                            {/* <input
                                type="email"
                                {...register('email')}
                                className="custom-input"
                            /> */}
                            <Input type= {"email"} value={"email"}/>
                            <p className='error'>{errors.email?.message}</p>
                        </div>
        
        </>
    )
}

export default Forms