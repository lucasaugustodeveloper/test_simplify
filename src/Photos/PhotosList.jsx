import './styles.scss'

import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const PhotosList = ({ list }) => {
  return (
    <div className="row">
      {list.map(item => (
        <div className="PhotosList col-lg-3" key={item.id}>
          <img
            src={item.urls.regular}
            alt={item.alt_description}
            className="PhotosList-img"
          />
          <div className="PhtoList-infos center-xs">
            <p className="PhotosList-title">
              {item.description}
            </p>
            <span className="PhotosList-author">
              {item.user.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({ list: state.photos.list })

export default connect(mapStateToProps)(PhotosList)
