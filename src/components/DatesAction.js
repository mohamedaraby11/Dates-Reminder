import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesAction = ({onDelete,onViewData}) => {
  return (
    <Row className="justify-content-centre my-2">
    <Col sm="8" className="d-flex justify-content-between">

     <button className="btn-style p-2" onClick={onDelete}>Delete All</button>
     <button className="btn-style p-2" onClick={onViewData}>Show All</button>

    </Col>
  </Row>
  )
}

export default DatesAction
