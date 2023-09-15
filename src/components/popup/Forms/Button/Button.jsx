import React from 'react'

const Button = ({
            commonClass="" ,
            addedClass="",
            onClick ,
            text="",
            type= "submit",
            disabled = false
        }) => {
  return (
  
           <button  className={`${commonClass} ${addedClass}`} disabled={disabled} onClick={onClick} type= {type}>{text}</button>
          )
}

export default Button
