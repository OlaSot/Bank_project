import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import Form from '../Form';
import { setUser } from '../../store/slices/userSlice';


const SignUp = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    function handleClickHome() {
        navigate('/');
      }
    
      function goBack() {
        navigate(-1);
      }
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.id,
                token: user.accessToken
            }));
            handleClickHome()
        })
        .catch(console.error)
    }

    return (
        <div>
            <Form title='register' handleClick={handleRegister}/>
        </div>
    )
}

export {SignUp}
