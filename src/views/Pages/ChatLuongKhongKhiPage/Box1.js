import React from 'react'
import HoatDongKhuyenNghi from "./ComponentCLKK/HoatDongKhuyenNghi";
import ImgBieuCam from "../../../assets/img/AQIgood.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Box1({ stylePage, data }) {
    return (
        <Container>
            <Row>
                <div className="css_TenTram" style={stylePage?.thongtindonvi}>
                    <span>TRẠM QUAN TRẮC KHÔNG KHÍ KHU VỰC HUYỆN CHƠN THÀNH</span>
                </div>
            </Row>
            <Row>
                <Col lg={2} className="css_BorderStatus" style={stylePage?.hoatdongkhuyennghi?.boder}>
                    <Row style={{ marginTop: '3em', textAlign: 'center', fontWeight: 'bold' }}>
                        <Image
                            id="logoheader"
                            src={ImgBieuCam}
                            alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"
                            width="100%"
                            height="200px"
                        />
                        <Col>{data.thongbaodan.chat_luong_khong_khi}</Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <HoatDongKhuyenNghi
                        data={{ title: "KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI BÌNH THƯỜNG", noidung: data.thongbaodan.kn_nguoi_binh_thuong }}
                        styles={stylePage?.hoatdongkhuyennghi}
                    />
                </Col>
                <Col lg={5}>
                    <HoatDongKhuyenNghi
                        data={{ title: "KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI NHẠY CẢM", noidung: data.thongbaodan.kn_nguoi_nhay_cam }}
                        styles={stylePage?.hoatdongkhuyennghi}
                    />
                </Col>
            </Row>
        </Container>
    )
}
