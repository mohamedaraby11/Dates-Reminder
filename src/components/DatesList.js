import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({person}) => {
  return (
    <Row className="justify-content-centre">
    <Col  sm="8" className="">

     <div className="rectangle p-2">
     {person.length ? (person.map((item)=>{
          return(
            <div key={item.id} className="d-flex border-bottom mx-3 my-2">
        <img className="img-avatar" src={item.img} alt="maleIcon"/> 
        <div className="px-3">
          <p className="d-inline fs-5">{item.name}</p>
          <p className="fs-6">{item.date}</p>
        </div> 

      </div>

          )
     })) :<h2 className="p-5 text-centre"> You Have No Meeting Today</h2>}
      
      
     </div>
    </Col>
  </Row>
  )
}

export default DatesList
