import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routing from './router/Routing'
import '../style.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <Routing />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root