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
  if (typeStyle === "tot") {
    return {
      backgroundBox1: {background: 'rgb(0, 228, 0)'},
      thongtindonvi: { color: 'black' },
      hoatdongkhuyennghi:
      {
        boder: { border: 'solid 4px #ccff4a' },
        title: { color: 'white', background: 'rgba(74, 157, 28, 1)' },
        content: { color: 'black', background: 'rgba(179, 255, 166, 1)' }
      },
      box2: {
        title: {color: 'rgba(0, 94, 0, 1)', background: 'hsl(122 63% 37% / 0.5)'},
        boder: { border: 'solid 4px hsl(122 63% 37% / 0.5)' },
        aqivalue: {color: 'rgb(0, 228, 0)'},
        content: {color: 'rgb(13,154,1)',fontWeight: 'bold'}
      }
    }
  }
  if (typeStyle === "trungbinh") {
    return {
      backgroundBox1: {background: 'rgb(255, 255, 0)'},
      thongtindonvi: { color: 'black' },
      hoatdongkhuyennghi:
      {
        boder: { border: 'solid 4px rgb(255,150,0)' },
        title: { color: 'black', background: 'rgb(255, 255, 0)' },
        content: { color: 'black', background: 'rgba(255, 255, 176)' }
      },
      box2: {
        title: {color: 'black', background: 'rgb(254,235,128)'},
        boder: { border: 'solid 4px rgb(254,235,128)' },
        aqivalue: {color: 'rgb(255, 215, 0)'},
        content: {color: 'red', fontWeight: 'bold'}
      }
    }
  }
}

function ChatLuongKhongKhiPage() {
  const [thongSoAqi, setThongSoAqi] = useState({});
  const [loading, setLoading] = useState(false);
  const [stypePage, setstypePage] = useState({});
  useEffect(() => {
    setstypePage(getStyle('trungbinh'));
  }, [])

  useEffect(() => {
    chiSoKhongKhiService
      .getThongSoAqiKhongKhi("KHONG_KHI", "DXI_SoTNMT")
      .then((res) => {
        console.log(res);
        if (res.success && res.data != null) {
          setThongSoAqi(res.data);
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
          <Row className="footer">
            <Col style={{magin: 'auto'}}>
              <span style={{display: 'block'}}>TRANG THÔNG TIN ĐIỆN TỬ SỞ TÀI NGUYÊN VÀ MÔI TRƯỜNG BÌNH PHƯỚC </span>
              <span style={{display: 'block'}}>Chịu trách nhiệm chính: Giám đốc Dương Hoàng Anh Tuấn </span>
              <span style={{display: 'block'}}>Địa chỉ: QL 14, phường Tân Bình, thành phố Đồng Xoài, tỉnh Bình Phước</span>
              <span style={{display: 'block'}}>Điện thoại: 02713. 879110 - FAX: 02713.879110</span>
              <span style={{display: 'block'}}>Email: stnmt@binhphuoc.gov.vn</span>
            </Col>

          </Row>
        </Container>

      )}
    </div>
  );
}

export default ChatLuongKhongKhiPage;
