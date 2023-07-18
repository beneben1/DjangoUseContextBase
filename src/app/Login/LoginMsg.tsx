import { useAppSelector } from '../hooks';
import { selectAccessToken, selectLoginStatus } from './LoginSlice';
import jwt_decode from 'jwt-decode';

const LoginMsg = () => {
    const accessToken = useAppSelector(selectAccessToken);
    const status = useAppSelector(selectLoginStatus);
    let decodedToken: any = null;
    let username = '';

    if (accessToken) {
        // Decode the access token to extract the payload
        decodedToken = jwt_decode(accessToken);

        // Extract the username from the decoded token
        username = decodedToken.username;
    }


    if (status === 'logged') {
        return <div>Welcome, {username}</div>;
    } else {
        return <div>You are NOT logged in</div>;
    }
};

export default LoginMsg;
