import React from 'react'
import HoatDongKhuyenNghi from "./ComponentCLKK/HoatDongKhuyenNghi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Box1({ stylePage, data }) {
    return (
        <Container>
            <Row>
                <div className="css_TenTram">
                    <span>TRẠM QUAN TRẮC KHÔNG KHÍ KHU VỰC HUYỆN CHƠN THÀNH</span>
                </div>
            </Row>
            <Row>
                <Col lg={2} className="css_BorderStatus" style={stylePage?.box1?.emotion}>
                    <Row style={{ marginTop: '3em', textAlign: 'center', fontWeight: 'bold' }}>
                        <img
                            style={{ width: '100%', height: '200px' }}
                            id="emotionImage"
                            alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"
                            src={`${data.thongbaodan.emotion}.svg`}
                        />
                        {/* <Image
                            id="logoheader"
                            src={ImgBieuCam}
                            alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"
                            width="100%"
                            height="200px"
                        /> */}
                        <Col>{data.thongbaodan.chat_luong_khong_khi}</Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <HoatDongKhuyenNghi
                        data={{ title: "KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI BÌNH THƯỜNG", noidung: data.thongbaodan.kn_nguoi_binh_thuong }}
                        styles={stylePage?.box1}
                    />
                </Col>
                <Col lg={5}>
                    <HoatDongKhuyenNghi
                        data={{ title: "KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI NHẠY CẢM", noidung: data.thongbaodan.kn_nguoi_nhay_cam }}
                        styles={stylePage?.box1}
                    />
                </Col>
            </Row>
        </Container>
    )
}
