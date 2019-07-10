import './style.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  changeText,
  search
} from './action'

class AppForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { text, changeText, search } = this.props

    return (
      <header className="AppForm-header col-lg-12 center-xs">
        <input
          type="text"
          id="text"
          className="AppForm-search"
          value={text}
          onChange={changeText}
          placeholder="enter your search"
        />
        <button
          className="AppForm-btn"
          onClick={search}
        >
          search
    </button>
      </header>
    )
  }
}

// const AppForm = ({ text, changeText, search }) => (
  // <header className="AppForm-header col-lg-12 center-xs">
  //   <input
  //     type="text"
  //     id="text"
  //     className="AppForm-search"
  //     value={ text }
  //     onChange={ changeText }
  //     placeholder="enter your search"
  //   />
  //   <button
  //     className="AppForm-btn"
  //     onClick={ search }
  //   >
  //     search
  //   </button>
  // </header>
// )

const mapStateToProps = state => ({ text: state.photos.text })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeText, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppForm)
