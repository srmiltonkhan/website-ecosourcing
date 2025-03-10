
import { NavLink } from "react-router-dom";
import {Row, Col, Image} from 'react-bootstrap'

const Error404 = (props) => {
  return (
    <Row className="justify-content-center py-5" data-aos="zoom-in">
        <Col xl={12} className="text-center">
            <Image className="mb-4 img-error w-100" style={{maxWidth: "400px"}} src="/asset/img/error/error-404-monochrome.svg" alt="404 Error"/>
            <p className="lead">This requested URL was not found on this server.</p>
            <NavLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                  <path fill-ule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                Return to Home
            </NavLink>
        </Col>
    </Row>
  )
}

export default Error404