import React from 'react';
import { createElement } from 'react';

interface alertProps{
    children: string;
    onCLose:()=>void;
}
const Alert = ({children,onCLose}:alertProps) => {
    return (
        <div className="alert alert-primary alert-dismissible" >
            {children}
            <button type="button" className="btn-close" onClick={onCLose} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    )
}

export default Alert