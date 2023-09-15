import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logedinUser from '../Redux/Slices/AuthSlice'

const AuthRoute = () => {
    const { logedinUser } = useSelector((state) => state.Authslice)
    const { isLogin } = useSelector((state) => state.Authslice)

    return true ? <Navigate to="/" /> : <Outlet />
}

export default AuthRoute
