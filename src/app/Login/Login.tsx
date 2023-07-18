import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { loginAsync, logoutAsync, selectLoginStatus } from './LoginSlice';

const Login = () => {
    const [user, setuser] = useState("")
    const [pwd, setpwd] = useState("")
    const Loginstatus = useAppSelector(state => selectLoginStatus(state));
    const dispatch = useAppDispatch();



    return (
        <div>
            {Loginstatus === 'logged' ?
                <button onClick={() => dispatch(logoutAsync())}>logout</button> :
                <div>
                    <h1>Login Here</h1>
                    Username:
                    <input  onChange={(e) => setuser(e.target.value)} />
                    Password:
                    <input type='password' onChange={(e) => setpwd(e.target.value)} />
                    <button onClick={() => dispatch(loginAsync({ user, pwd }))}>login</button>
                </div>}
        </div>
    )
}

export default Login;