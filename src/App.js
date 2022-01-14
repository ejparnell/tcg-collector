// import useState here
import React, { useState } from "react"
import { Route, Router } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Home from "./components/Pages/Home"
import { Decks, Commander, Standard, Modern } from "./components/Pages/Decks"
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'


const App = (props) => {
	const [user, setUser] = useState(null)
	// this state name is the same as the function name. They both need to be unique. I suggest changing this one.
	const [msgAlert, setMsgAlert] = useState([])

	// This is the function name that you have named the same as state. They are 2 different things. Also this is no longer a class component so this needs to change over to function definition. 
	msgAlert = ({ heading, message, variant }) => {
		// gives me a uuid and assigns it to id
		const id = uuid()
		// `setSate` is not a valid state setter that you have defined. You called the valid setter `setMsgAlert` but since you need to change that to something new just update here with whatever you choose.
		setState((state) => {
			return {
				// taking all the messages that we have and adding the new one
				msgAlerts: [...state.msgAlerts, { heading, message, variant, id }],
			}
		})
	}
	// missing sign-out and change-password auth routes
	return (
		<>
			<Router>
				<Route path='/' element={<Home />} />
				<Route path='/decks' element={<Decks />} />
				<Route path='/decks/commander' element={<Commander />} />
				<Route path='/decks/standard' element={<Standard />} />
				<Route path='/decks/modern' element={<Modern />} />
				<Route path='/sign-up' render={() => (<SignUp msgAlert={msgAlert} setUser={setUser} />)}
				/>
				<Route
					path='/sign-in'
					render={() => (
						<SignIn msgAlert={msgAlert} setUser={setUser} />
					)}
				/>
			</Router>
		</>
	)
}

export default App
