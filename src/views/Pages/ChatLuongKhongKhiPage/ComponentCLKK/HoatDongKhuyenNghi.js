import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function HoatDongKhuyenNghi({data, styles}) {
    return (
        <Row className="css_BorderRectangle" style={styles?.emotion}>
        <Col>
          <Row className="justify-content-md-center" style={styles?.title}>
            <span className="css_TittleKhuyenNghi" >{data?.title}</span>
            <Row className="justify-content-md-center css_NoiDungKhuyeNghi" style={styles?.content}>
              <span >{ data?.noidung}</span>
            </Row>
          </Row>
        </Col>
      </Row>
    )
}
