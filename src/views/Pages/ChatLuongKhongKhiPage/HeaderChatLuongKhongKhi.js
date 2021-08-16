import React from 'react'
import LogoHeader from "../../../assets/img/logo-wweb.png";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function HeaderChatLuongKhongKhi() {
    return (
        <Row className="header">
            <Col className="logo">
                <a title="Sở Tài nguyên và Môi trường tỉnh Bình Phước" href="/">
                    <Image
                        id="logoheader"
                        src={LogoHeader}
                        alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"
                    />
                </a>
            </Col>
        </Row>
    )
}
