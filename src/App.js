import React from "react"
import { Route, Router } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Home from "./components/Pages/Home"
import { Decks, Commander, Standard, Modern } from "./components/Pages/Decks"
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'


const App = (props) => {
  const [user, setUser] = useState(null)
  const [msgAlert, setMsgAlert] = useState([])

  msgAlert = ({ heading, message, variant }) => {
	// gives me a uuid and assigns it to id
	const id = uuid()
	setState((state) => {
		return {
			// taking all the messages that we have and adding the new one
			msgAlerts: [...state.msgAlerts, { heading, message, variant, id }],
		}
	})
}

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
