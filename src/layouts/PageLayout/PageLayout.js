import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Header from '../../components/header/Header'
import LoginForm from '../../components/loginform/loginform'

export const PageLayout = ({ children }) => (
  <div>
    <Header/>
    <LoginForm/>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
