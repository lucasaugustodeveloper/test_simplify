import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  changeText,
  search
} from './action'

const AppForm = ({ text, changeText, search }) => (
  <div>
    <input
      type="text"
      id="text"
      value={text}
      onChange={ changeText }
      placeholder="enter your search"
    />
    {console.log(text)}
    <button>search</button>
  </div>
)

const mapStateToProps = state => ({ text: state.photo.text })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeText, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppForm)
