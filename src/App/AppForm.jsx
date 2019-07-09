import './style.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  changeText,
  search
} from './action'

const AppForm = ({ text, changeText }) => (
  <header className="AppForm-header col-lg-6 col-lg-offset-3">
    <input
      type="text"
      id="text"
      className="AppForm-search"
      value={ text }
      onChange={ changeText }
      placeholder="enter your search"
    />
    <button
      className="AppForm-btn"
      onClick={ search }
    >
      search
    </button>
  </header>
)

const mapStateToProps = state => ({ text: state.photo.text })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeText, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppForm)
