import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import mtgUrl from '../../MTGConfig'

// import mtgUrl from '../API-Management/MTGconfig'

class Sets extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sets: []
    }
  }
  // state = {
  //   sets: []
  // }

  // lifecycle methods
  componentDidMount () {
    // console.log('mounted')
    this.getSets()
  }

// call the API
getSets = () => {
  // this.setState(books: axios('url'))
  axios('https://api.magicthegathering.io/v1/sets')
    .then((response) => this.setState({ sets: response.data.sets }))
    .catch(console.error)
}

// render all the books

render () {
  // console.log('rendering')

  const listItemStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  const sets = this.state.sets.map((set) => (
    <li key={set.name}>
      <Link style={listItemStyle} to={'/sets/' + set.code}>
        {set.name}
      </Link>
    </li>
  ))

  return (
    <div>
      <button onClick={this.getSets}>Show Sets</button>
      <ul>{sets}</ul>
    </div>
  )
}
}

export default Sets
