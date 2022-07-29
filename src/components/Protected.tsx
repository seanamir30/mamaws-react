import React, { ReactElement } from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export type user = {
    email: String,
    first_name: String,
    token: String,
    is_admin: boolean,
    id: String
}

export type protectedProps = {
    mode: 'admin' | 'user',
    children: ReactElement
}

const Protected = ({mode, children}: protectedProps) => {
    const { user } = useSelector((store: RootState) => store.user);
    
    if(!user.token && !user.is_admin && mode === 'admin'){
        return <Navigate to="/"/>
    }
    
    if(!user.token && mode === 'user'){
        return <Navigate to="/"/>
    }

  return children
}

export default Protected