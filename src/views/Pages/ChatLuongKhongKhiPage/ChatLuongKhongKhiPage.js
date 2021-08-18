import React, { useEffect, useState } from "react";
import HeaderChatLuongKhongKhi from "./HeaderChatLuongKhongKhi";
import Box1 from "./Box1"
import Box2 from "./Box2"
import "../ChatLuongKhongKhiPage/DmKhuVucCSS.css";
import { chiSoKhongKhiService } from "../../../services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useParams } from "react-router-dom";
import { Loading } from "src/components/Loading/loading";

const getStyle = (typeStyle) => {
    return {
      backgroundBox1: { background: `rgb(${typeStyle.ma_mau_rbg})` },
      box1:
      {
        emotion: { border: `solid 2px rgb(${typeStyle.mau_border_box1})`, background: `rgb(${typeStyle.ma_mau_rbg})` },
        title: { color: `rgb(${typeStyle.mau_chu_title_box1})`, background: `rgb(${typeStyle.mau_nen_title_box1})` },
        content: { background: `rgba(${typeStyle.mau_nen_content_box1})` }
      },
      box2: {
        title: { background: `rgb(${typeStyle.mau_nen_box2})` },
        boder: { border: `solid 2px rgb(${typeStyle.mau_nen_box2})` },
        aqivalue: { color: `rgb(${typeStyle.ma_mau_rbg})` },
        content: { color: `rgb(${typeStyle.mau_noi_dung_bang_aqi})`, fontWeight: 'bold' }
      },
      mau_footer: {background: `rgb(${typeStyle.mau_footer})`}
    }
}
function ChatLuongKhongKhiPage() {
  const [thongSoAqi, setThongSoAqi] = useState({});
  const [loading, setLoading] = useState(false);
  const [stypePage, setstypePage] = useState('');

  useEffect(() => {
    chiSoKhongKhiService
      .getThongSoAqiKhongKhi("KHONG_KHI", "DXI_SoTNMT")
      .then((res) => {
        if (res.success && res.data != null) {
          setThongSoAqi(res.data);
          setstypePage(getStyle(res.data.thongbaodan));
        }
      });
  }, []);

  return (
    <div>
      {loading ? (<Loading />) : (
        <Container fluid>
          <HeaderChatLuongKhongKhi />
          {Object.keys(thongSoAqi).length > 0 && (
            <>
              <Row className="box1" style={stypePage?.backgroundBox1}>
                <Box1
                  stylePage={stypePage}
                  data={thongSoAqi}
                />
              </Row>
              <Row className="justify-content-md-center">
                <Box2
                  stylePage={stypePage.box2}
                  data={thongSoAqi}
                />
              </Row>
            </>
          )}
          
          <Row className="footer" style={stypePage.mau_footer}>
            <Col style={{ magin: 'auto' }}>
              <span style={{ display: 'block' }}>TRANG THÔNG TIN ĐIỆN TỬ SỞ TÀI NGUYÊN VÀ MÔI TRƯỜNG BÌNH PHƯỚC </span>
              <span style={{ display: 'block' }}>Chịu trách nhiệm chính: Giám đốc Dương Hoàng Anh Tuấn </span>
              <span style={{ display: 'block' }}>Địa chỉ: QL 14, phường Tân Bình, thành phố Đồng Xoài, tỉnh Bình Phước</span>
              <span style={{ display: 'block' }}>Điện thoại: 02713. 879110 - FAX: 02713.879110</span>
              <span style={{ display: 'block' }}>Email: stnmt@binhphuoc.gov.vn</span>
            </Col>

          </Row>
          <Row style={{background: 'black', color: 'white', textAlign: 'center'}}>
            <Col style={{ magin: 'auto' }}>
              <span style={{ display: 'block' }}>Banr quyen abc xyz</span>
            </Col>

          </Row>
        </Container>

      )}
    </div>
  );
}

export default ChatLuongKhongKhiPage;
