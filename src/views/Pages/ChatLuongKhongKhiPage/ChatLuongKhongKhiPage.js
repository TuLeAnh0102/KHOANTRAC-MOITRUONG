import React, { useEffect, useState } from "react";
import LogoHeader from "../../../assets/img/logo-wweb.png";
import "../ChatLuongKhongKhiPage/DmKhuVucCSS.css";
import { chiSoKhongKhiService } from "../../../services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { Loading } from "src/components/Loading/loading";

function ChatLuongKhongKhiPage() {
  const [thongSoAqi, setThongSoAqi] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    chiSoKhongKhiService
      .getThongSoAqiKhongKhi("KHONG_KHI", "DXI_SoTNMT")
      .then((res) => {
        console.log(res);
        if (res.success && res.data != null) {
          setThongSoAqi(res.data);
        }
      });


    // let repeat;
    // async function reloadData() {
    //   console.log("AAAA");
    //   chiSoKhongKhiService
    //     .getThongSoAqiKhongKhi("KHONG_KHI", "DXI_SoTNMT")
    //     .then((res) => {
    //       if (res.success && res.data != null) {
    //         setThongSoAqi(res.data);
    //         repeat = setTimeout(reloadData, 10000);
    //       }
    //     });
    // }

    // reloadData();

    // return () => {
    //   if (repeat) {
    //     clearTimeout(repeat);
    //   }
    // };
  }, []);

  return (
    <div>
    {loading ? (<Loading />) : (
      <Container fluid>
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
        { Object.keys(thongSoAqi).length > 0 && (
          <>
            <Row className="box1">
              <Container>
                <Row>
                  <div className="css_TenTram">
                    <span>TRẠM QUAN TRẮC KHÔNG KHÍ KHU VỰC HUYỆN CHƠN THÀNH</span>
                  </div>
                </Row>
                <Row>
                  <Col lg={2}>
                    <Row className="css_BorderRectangle">
                      <Col>{thongSoAqi.thongbaodan.chat_luong_khong_khi}</Col>
                    </Row>
                  </Col>
                  <Col lg={5}>
                    <Row className="css_BorderRectangle">
                      <Col>
                        <Row className="justify-content-md-center css_BackgroudKhuyenNghi">
                          <span className="css_TittleKhuyenNghi">
                            KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI BÌNH THƯỜNG
                          </span>
                          <Row className="justify-content-md-center css_NoiDungKhuyeNghi">
                            <span>{thongSoAqi.thongbaodan.kn_nguoi_binh_thuong}</span>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={5}>
                    <Row className="css_BorderRectangle">
                      <Col>
                        <Row className="justify-content-md-center css_BackgroudKhuyenNghi">
                          <span className="css_TittleKhuyenNghi">
                            KHUYẾN NGHỊ HOẠT ĐỘNG CHO NHỮNG NGƯỜI NHẠY CẢM
                          </span>
                          <Row className="justify-content-md-center css_NoiDungKhuyeNghi">
                            <span>{thongSoAqi.thongbaodan.kn_nguoi_nhay_cam}</span>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row className="justify-content-md-center">
              <Container>
                <Row>
                  <Col lg={2}>
                    <Row className="justify-content-md-center css_TieuDe">
                      <span>
                        VỊ TRÍ TRẠM QUAN TRẮC <br /> KV HUYỆN CHƠN THÀNH <br /> (ĐẶT
                        TẠI BAN QUẢN LÝ KCN MINH HƯNG 3)
                      </span>
                    </Row>
                    <Row></Row>
                  </Col>
                  <Col lg={8}>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Thông số (mg/m3)</td>
                            <td>SO2</td>
                            <td>CO</td>
                            <td>NO2</td>
                            <td>O3</td>
                            <td>TSP</td>
                            <td>PM10</td>
                            <td>PM2.5</td>
                          </tr>
                          <tr>
                            <td>Thông số 1h</td>
                            <td>4.58</td>
                            <td>170.73</td>
                            <td>10.56</td>
                            <td>76.84</td>
                            <td>34.93</td>
                            <td>25.34</td>
                            <td>16.78</td>
                          </tr>
                          <tr>
                            <td>Thông số 8h</td>
                            <td>4.58</td>
                            <td>170.73</td>
                            <td>10.56</td>
                            <td>76.84</td>
                            <td>34.93</td>
                            <td>25.34</td>
                            <td>16.78</td>
                          </tr>
                          <tr>
                            <td>Thông số 24h</td>
                            <td>4.58</td>
                            <td>170.73</td>
                            <td>10.56</td>
                            <td>76.84</td>
                            <td>34.93</td>
                            <td>25.34</td>
                            <td>16.78</td>
                          </tr>
                          <tr>
                            <td colSpan="7">QCVN 05:2013/BTNMT</td>
                          </tr>
                          <tr>
                            <td>Thông số 1H</td>
                            <td>350</td>
                            <td>30000</td>
                            <td>200</td>
                            <td>200</td>
                            <td>300</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Thông số 8H</td>
                            <td>-</td>
                            <td>10000</td>
                            <td>-</td>
                            <td>120</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Thông số 24h</td>
                            <td>125</td>
                            <td>-</td>
                            <td>100</td>
                            <td>-</td>
                            <td>200</td>
                            <td>150</td>
                            <td>50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Col>
                  <Col lg={2}>
                    <Row className="justify-content-md-center">
                      <Col className="css_TieuDe">
                        <span>
                          CHẤT LƯỢNG KHÔNG KHÍ TRUNG BÌNH GIỜ <br />{" "}
                          <span>VN_AQIH</span>
                        </span>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                      <Col className="css_NoiDung">
                        <div className="css_AQI">{thongSoAqi.vn_aqi_h}</div>
                        <div className="align-items-end css_AQI_time">
                          09h:00 20/05/2021
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Row>
          </>
        )}
      </Container>

    )}
    </div>
  );
}

export default ChatLuongKhongKhiPage;
