import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form';
import { setUser } from '../../store/slices/userSlice';



const Login = () => {
    
    const dispatch = useDispatch()
    function handleClickHome() {
        navigate('/');
      }
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.id,
                token: user.accessToken
            }))
            handleClickHome()
        })
        .catch(() => alert('Invalid user!'))

    }


    return (
        <div>
            <Form title='sign in' 
            handleClick={handleLogin}/>
        </div>
    )
}

export {Login}