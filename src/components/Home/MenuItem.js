import React from "react"
import Img from "gatsby-image"

const MenuItem = ({ item }) => {
  return (
    <div key={item.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
      <div>
        <Img fixed={item.image.fixed} />
      </div>
      {/* item text */}
      <div className="flex-grow-1 px-3">
        <div className="d-flex justify-content-between">
          <h6 className="mb-0">
            <small>{item.title}</small>
          </h6>
          <h6 className="mb-0 text-yellow">
            <small>${item.price}</small>
          </h6>
        </div>
        <p className="text-muted">
          <small>{item.info.info}</small>
        </p>
      </div>
    </div>
  )
}

export default MenuItem
