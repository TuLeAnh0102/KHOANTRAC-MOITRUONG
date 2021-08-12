import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CLabel,
  CFormGroup,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { matchSorter } from "match-sorter";
import { cauhinhhethongService } from "../../../services";
import { Loading } from "src/components/Loading/loading";
import ModalInsert from '../../../components/CauHinhHeThong/ModalInsert'
import ModalSettings from "src/components/CauHinhHeThong/ModalSettings";
import { MdDelete, MdModeEdit, MdSettings } from 'react-icons/md'

function NhomQuyen() {

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //state
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [isOpenModalSetting, setisOpenModalSetting] = useState(false)
  const [loaiTaiKhoan, setloaiTaiKhoan] = useState([]);
  const [rows, setRows] = useState([
    {
      id_nhom_quyen: 1,
      ten_nhom_quyen: "GTVT",
      id_loai_tai_khoan: 1,
      ten_loai_tai_khoan: 'Y Tế'
    }
  ]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //function
  const handleSettingClick = () => {
    // setisOpenModal(!isOpenModal)
    setisOpenModalSetting(!isOpenModalSetting)
  }

  useEffect(() => {
    cauhinhhethongService.getLoaiTaiKhoan().then((res) => {
      if (res.success && res.data != null) {
        setloaiTaiKhoan(res.data);
      }
    });
  }, [])


  return (
    <div>
      {loading ? (<Loading />) : (
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader><b>CẤU HÌNH HỆ THỐNG</b></CCardHeader>
              <CCardBody>
                <CFormGroup row className="my-0">
                  <CCol >
                    <CFormGroup>
                      <CButton
                        type="button"
                        size="sm"
                        color="success"
                        onClick={() => alert("Chức năng đang phát triển")}
                      >
                        <CIcon name="cil-Pencil" /> Thêm mới
                      </CButton>
                      <ModalInsert
                        isOpen={isOpenModal}
                        dataOptions={loaiTaiKhoan}
                      />
                      <ModalSettings
                        isOpen={isOpenModalSetting}
                        dataOptions={loaiTaiKhoan}
                      />
                      {/* <CButton
                        type="button"
                        size="sm"
                        color="info"
                        onClick={handleBtnExportClick}
                      >
                        <CIcon name="cil-print" /> Xuất báo cáo
                      </CButton> */}
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <hr className="mt-0" />
                {loading && <em>Loading users...</em>}
                {rows && (
                  <ReactTable
                    style={{ fontWeight: 'bold' }}
                    data={rows}
                    previousText="Trở về trang trước"
                    nextText="Trang kế tiếp"
                    loadingText="Loading..."
                    noDataText="Không có dữ liệu"
                    pageText="Trang"
                    ofText="của"
                    rowsText="dòng"
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      String(row[filter.id]) === filter.value
                    }
                    columns={[
                      {
                        Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}> Số thứ tự</div>,
                        id: "ten-cong-nhan",
                        accessor: (c) => c.ten_cong_nhan,
                        width: 100,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["ten-cong-nhan"] }),
                        filterAll: true,

                      },

                      {
                        Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}> Tên nhóm quyền</div>,
                        id: "ten-nhom-quyen",

                        accessor: (c) => c.ten_nhom_quyen,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["ten-nhom-quyen"],
                          }),
                        filterAll: true,
                        Cell: ({ value }) => (
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            {value}
                          </span>
                        ),
                      },
                      {
                        Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}>Loại tài khoản</div>,
                        id: "ten_loai_tai_khoan",

                        accessor: (c) => c.ten_loai_tai_khoan,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["ten_loai_tai_khoan"],
                          }),
                        filterAll: true,
                        Cell: ({ value }) => (
                          <span
                            style={{
                              display: "block",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            {value}
                          </span>
                        ),
                      },

                      {
                        Header: <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}> Chức năng</div>,
                        filterable: false,
                        accessor: "id",
                        Cell: (props) => (
                          <div style={{ textAlign: "center" }}>
                            <CButton
                              color="danger"
                              onClick={() => alert("Chức năng đang phát triển")}
                            >
                              <MdDelete
                              />
                            </CButton>
                            {"  "}
                            <CButton
                              style={{ backgroundColor: "#00b300", color: 'white' }}
                              color="#33cc33"
                              onClick={() => alert("Chức năng đang phát triển")}
                            >

                              <MdModeEdit />
                            </CButton>
                            {"  "}
                            <CButton
                              style={{ backgroundColor: "#669999", color: 'white' }}
                              color="#33cc33"
                              onClick={handleSettingClick}
                            >

                              <MdSettings />
                            </CButton>
                          </div>
                        ),
                      },

                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      )}
    </div>
  );
}

export default NhomQuyen;
