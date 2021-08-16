import React from 'react'
import BangThongSo from "./ComponentCLKK/BangThongSo";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImgMap from "../../../assets/img/map.png";

const dataTableThongSo = [
    { name: "thông số 1h", so2: 4.58, co: 170.73, no2: 10.56, o3: 76.84, tsp: 34.93, pm10: 25.34, pm25: 16.78 },
    { name: "thông số 8h", so2: 4.58, co: 170.73, no2: 10.56, o3: 76.84, tsp: 34.93, pm10: 25.34, pm25: 16.78 },
    { name: "thông số 24h", so2: 4.58, co: 170.73, no2: 10.56, o3: 76.84, tsp: 34.93, pm10: 25.34, pm25: 16.78 },
]
const dataTableThongSoQCVN = [
    { name: "thông số 1h", so2: 350, co: 3000, no2: 200, o3: 200, tsp: 300, pm10: '', pm25: '' },
    { name: "thông số 8h", so2: '', co: 1000, no2: '', o3: 120, tsp: '', pm10: '', pm25: '' },
    { name: "thông số 24h", so2: 125, co: '', no2: 100, o3: '', tsp: 200, pm10: 150, pm25: 50 },
]
export default function Box2({ data, stylePage }) {
    return (
        <Container>
            <Row>
                <Col lg={2}>
                    <Row className="justify-content-md-center">
                        <Col className="css_TieuDe" style={stylePage?.title}>
                            <span>
                                VỊ TRÍ TRẠM QUAN TRẮC <br /> KV HUYỆN CHƠN THÀNH <br /> (ĐẶT
                                TẠI BAN QUẢN LÝ KCN MINH HƯNG 3)
                            </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="css_NoiDung" style={stylePage?.boder}>
                            <Image
                                id="map"
                                src={ImgMap}
                                alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"
                                width="100%"
                                height="100%"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={8} >
                    <Row className="justify-content-md-center">
                        <Col style={{ marginTop: '5px' }}>
                            <BangThongSo
                                dataTable={dataTableThongSo}
                                dataTableQCVN={dataTableThongSoQCVN}
                                styleContent={stylePage?.content}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={2}>
                    <Row className="justify-content-md-center">
                        <Col className="css_TieuDe" style={stylePage?.title}>
                            <span>
                                CHẤT LƯỢNG KHÔNG KHÍ TRUNG BÌNH GIỜ <br />{" "}
                                <span>VN_AQIH</span>
                            </span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="css_NoiDung" style={stylePage?.boder}>
                            <div className="css_AQI" style={stylePage?.aqivalue}>{data?.vn_aqi_h}</div>
                            <div className="align-items-end css_AQI_time">
                                09h:00 20/05/2021
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
