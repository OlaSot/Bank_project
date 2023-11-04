import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import Form from '../Form';
import { setUser } from '../../store/slices/userSlice';
import { getFirestore, doc, getDoc } from "firebase/firestore";



const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    function handleClickHome() {
        navigate('/');
      }
      const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(async({user}) => {
            const token = await user.getIdToken();
            const uid = user.uid;
    
            // Загружаем дополнительные данные пользователя из Firestore
            const db = getFirestore();
            const userRef = doc(db, 'users', uid);
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
                const additionalUserData = userSnapshot.data();
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: token,
                    ...additionalUserData  // Этот код добавит все дополнительные поля пользователя
                }));
            } else {
                console.error("No document found for user!");
            }
    
            handleClickHome();
        })
        .catch(() => alert('Invalid user!'));
    }


    return (
        <div>
            <Form title='sign in' 
            handleClick={handleLogin}/>
        </div>
    )
}

export {Login}