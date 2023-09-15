
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ReactComponent as EyeIcon } from '../../../../assets/icons/eye-icon.svg'
import { ReactComponent as CloseEyeIcon } from '../../../../assets/icons/close-eye-icon.svg'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Input2 = ({
    commonClass = "custom-input",
    addedClass = "",
    onClick,
    text = "",
    type = "",
}) => {
    const [toggle1, setToggle1] = useState(false)
    const { register} = useForm({
        resolver: yupResolver()
    });
    switch (type) {
        case "text":
            return (
                <input type={type} className={`${commonClass} ${addedClass}`} name={text} />
            )
        case "password":
            return (
                <>
                    <input
                        type={toggle1 ? 'text' : 'password'}
                        {...register('password', {
                            required: true
                        })}
                        className={`${commonClass} ${addedClass}`}
                     
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
                </>
            )
        default:
            return (
                <input type={type} className={`${commonClass} ${addedClass}`} name={text} />
            )
    }
}



export default Input2
