import React from 'react'
import Alert from 'react-bootstrap/Alert'

import './AutoDismissAlert.scss'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.timeoutId = null
  }

  componentDidMount () {
    // set the id to timeout ID setTimeout use our handle close (handleClose is in this file) closes after 5 seconds
    this.timeoutId = setTimeout(this.handleClose, 5000)
  }

  // cleaning up this component when we venture away
  componentWillUnmount () {
    clearTimeout(this.timeoutId)
  }

handleClose = () => this.setState({ show: false })

render () {
  const { variant, heading, message, deleteAlert, id } = this.props

  // Delete this alert after the fade animation time (300 ms by default)
  if (!this.state.show) {
    setTimeout(() => {
      deleteAlert(id)
    }, 300)
  }

  return (
    <Alert
      dismissible
      show={this.state.show}
      variant={variant}
      onClose={this.handleClose}>
      <div className='container'>
        <Alert.Heading>{heading}</Alert.Heading>
        <p className='alert-body'>{message}</p>
      </div>
    </Alert>
  )
}
}

export default AutoDismissAlert
