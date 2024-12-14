import React from 'react'
interface BtnProps{
  children: string;
  color?: string;
  onClick:() => void;
}
const Button = ({children,onClick,color='primary'}:BtnProps) => {
  return (
    <div className={'btn btn-'+color} onClick={onClick}>{children}</div>
  )
}

export default Button