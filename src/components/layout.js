import React from 'react'

import Header from './Header/Header.js'
import Footer from '../Shared/Footer.js'

const Layout = (props) => (
	<div>
		<h1>TCG-Collector</h1>
		<Header />

		{props.children}

		<Footer />
	</div>
)

export default Layout
