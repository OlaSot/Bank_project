import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ActivityPage from './pages/ActivityPage'
import CardsPage from './pages/CardsPage'
import RecipientsPage from './pages/RecipientsPage'
import HelpCenterPage from './pages/HelpCenterPage'
import EarnGiftsPage from './pages/EarnGiftsPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { fetchUsers } from './requests/users_req'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchUsers())
	},[dispatch])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/cards' element={<CardsPage />} />
				<Route path='/activity' element={<ActivityPage />} />
				<Route path='/recipients' element={<RecipientsPage />} />
				<Route path='/help' element={<HelpCenterPage />} />
				<Route path='/gifts' element={<EarnGiftsPage />} />
				<Route path='/register' element={<RegisterPage />}></Route>
				<Route path='/login' element={<LoginPage />}></Route>
			</Routes>
		</>
	)
}

export default App
