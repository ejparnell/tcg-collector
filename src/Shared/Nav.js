import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
	<nav>
		<NavLink to='/'> Home </NavLink>
		<NavLink to='/collection'> Collection </NavLink>
		<NavLink to='/decks'> Decks </NavLink>
		<NavLink to='/sets'> Sets </NavLink>
	</nav>
)

export default Nav
