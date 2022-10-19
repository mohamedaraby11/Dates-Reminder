import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesCount = ({person}) => {
  return (
    <div>
      <Row className="justify-content-centre my-2">
            <Col sm="8" className="">

           You Have {person.length} Meeting Today
            </Col>
          </Row>
    </div>
  )
}

export default DatesCount
