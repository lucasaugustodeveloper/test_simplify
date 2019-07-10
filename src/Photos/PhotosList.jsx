import './styles.scss'

import React from 'react'

const PhotosList = props => (
  <div className="PhotosList col-lg-3">
    <img
      src="https://wallpapersite.com/images/pages/pic_w/12719.jpg"
      alt="Goku migatte no gokui"
      className="PhotosList-img"
    />
    <div className="PhtoList-infos center-xs">
      <p className="PhotosList-title">Title image</p>
      <span className="PhotosList-author">Name Author</span>
    </div>
  </div>
)

export default PhotosList
