import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as EyeIcon } from '../../assets/icons/eye-icon.svg'
import { ReactComponent as CloseEyeIcon } from '../../assets/icons/close-eye-icon.svg'
import SignUpModal from '../SignUpModal'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required("Please provide email id"),
    password: yup.string().min(4, "Kindly enter a password").max(8, "Password must have max 8 characters").required("Kindly enter a password"),
});


const PasswordForm = () => {
    const [toggle1, setToggle1] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
   
    const { t } = useTranslation()


    const onSubmit = (data) => {
            alert("User find")
    }
  return (
    <div className="input-wrapper">
        <label> {`${t('signinmodal.password')}`}</label>
        <div className="password-wrapper">
            <input
                type={toggle1 ? 'text' : 'password'}
                {...register('password', {
                    required: true
                })}
                className="custom-input password-field"
            />
            <div
                onClick={() => {
                    setToggle1(!toggle1)
                }}
                className="eye-icon"
            >
                {toggle1 ? (
                    <CloseEyeIcon alt="eye" />
                ) : (
                    <EyeIcon alt="eye" />
                )}
            </div>
        </div>
        <p className='error'>{errors.password?.message}</p>
    </div>
  )
}

export default PasswordForm