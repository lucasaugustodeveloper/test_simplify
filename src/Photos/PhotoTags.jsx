import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search } from '../Header/action'

const PhotosTags = ({ tags, search }) => (
  <div className="PhotosTags row">
    {tags.map(tag => (
      <div
        className="PhotosTags-item"
        key={tag.title}
        onClick={() => search(tag.title)}
      >
        {tag.title}
      </div>
    ))}
  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators({ search }, dispatch)

export default connect(mapDispatchToProps)(PhotosTags)
