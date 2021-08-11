import React, { useEffect , useState} from 'react';
import LogoHeader from '../../../assets/img/logo-wweb.png';
import '../ChatLuongKhongKhiPage/DmKhuVucCSS.css';
import { useDispatch, useSelector } from 'react-redux';
import { chiSoKhongKhiService } from '../../../services';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link , useParams} from "react-router-dom";

function  DmKhuVucPage()  {
  const chiSoKhongKhi = useSelector(state => state.chiSoKhongKhiReducer);
  const dispatch = useDispatch();
  const [openPopupPartial, setOpenPopupPartial] = useState(false);
  const [keyForEdit, setKeyForEdit] = useState(0);
  const [dmKhuVuc, setDmKhuVuc] = useState([]);

  useEffect(() => {
      chiSoKhongKhiService.getDmKhuVuc("KHONG_KHI").then((res) => {
      if (res.success && res.data != null) {
        setDmKhuVuc(res.data);
      }
    });
  }, []);

  return (

    <Container fluid>
      <Row className="header" >
        <Col className="logo">
          <a title="Sở Tài nguyên và Môi trường tỉnh Bình Phước" href="/">
            <Image id="logoheader" src={LogoHeader} alt="Sở Tài nguyên và Môi trường tỉnh Bình Phước"/>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
          <div id="CHT_LNG_KHNG_KH_TNH_BNH_PHC">
            <span>CHẤT LƯỢNG KHÔNG KHÍ TỈNH BÌNH PHƯỚC</span>
          </div>
      </Row>
      <Row className="justify-content-md-center">
          {/* {chiSoKhongKhi.loading && <em>Loading users...</em>}
          {chiSoKhongKhi.error && <span className="text-danger">ERROR: {chiSoKhongKhi.error}</span>} */}
          {dmKhuVuc.map((item, index) =>(
            <Col xs lg="2">
              <div className="khuvuc" id={item.ma_khu_vuc}>
                <Link to={`/chisokhongkhi/${item.ma_khu_vuc}`} className="btn btn-primary">{item.ten_khu_vuc}</Link>
              </div>
            </Col>
          ))}

        {/* <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col> */}
      </Row>
    </Container>

  )
}

export default DmKhuVucPage
