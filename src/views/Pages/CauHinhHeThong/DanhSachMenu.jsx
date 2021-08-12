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
import ModalModify from "./ModalModify";
import { MdDelete, MdModeEdit, MdSettings } from 'react-icons/md'

export default function DanhSachMenu() {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //state
    const [loading, setLoading] = useState(false);
    const [isOpenModal, setisOpenModal] = useState(false);
    const [isOpenModalSetting, setisOpenModalSetting] = useState(false)
    const [listMenu, setlistMenu] = useState([]);
    const [rows, setRows] = useState([]);
    const [listMenuCha, setlistMenuCha] = useState([]);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //function handleEditClick
    const handleEditClick = () => {
        // setisOpenModal(!isOpenModal)
        setisOpenModalSetting(!isOpenModalSetting)
    }
    const handleSettingClick = () => {
        // setisOpenModal(!isOpenModal)
        // setlistMenu(id);
        // console.log(id);
        setisOpenModalSetting(!isOpenModalSetting)
    }

    useEffect(() => {
        cauhinhhethongService.getMenuAdmin(1, 102).then((res) => {
            if (res.success && res.data != null) {
                console.log(res.data);
                var menuCha = res.data.filter(item => item.id_cha === 0);
                console.log('menucha', menuCha);
                if (menuCha) {
                    var list = menuCha.map(item => {
                        return {
                            'value': item.id_menu,
                            'label': item.ten_menu
                        }
                    });
                    list.unshift({
                        value: 0,
                        label: "Menu cha"
                    })
                    setlistMenuCha(list);
                }
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
                                            {/* <ModalInsert
                          isOpen={isOpenModal}
                          dataOptions={listMenu}
                          
                        /> */}
                                            <ModalModify
                                                labelModal="Cập nhật Menu"
                                                isOpen={isOpenModalSetting}
                                                dataOptions={listMenu}
                                                handelClose={handleSettingClick}
                                                listMenuCha={listMenuCha}
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
                                        style={{ fontWeight: 'normal', alignItem: 'left' }}
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
                                                id: "stt",
                                                accessor: (c) => c.stt,
                                                width: 100,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, { keys: ["stt"] }),
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
                                                Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}> Tên Menu</div>,
                                                id: "ten-menu",

                                                accessor: (c) => c.ten_menu,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["ten-menu"],
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
                                                Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}>Đường link</div>,
                                                id: "duong_dan",

                                                accessor: (c) => c.duong_dan,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["duong_dan"],
                                                    }),
                                                filterAll: true,
                                                Cell: ({ value }) => (
                                                    <span
                                                        style={{
                                                            display: "block",
                                                            width: "100%",
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        {value}
                                                    </span>
                                                ),
                                            },
                                            {
                                                Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}>ICon</div>,
                                                id: "icon",
                                                accessor: (c) => c.icon,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["icon"],
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
                                                Header: () => <div style={{ backgroundColor: '#04AA6D', color: '#ffffff', fontWeight: 'bold', padding: '5px' }}>Tag Name</div>,
                                                id: "tag",
                                                accessor: (c) => c.tag,
                                                filterMethod: (filter, rows) =>
                                                    matchSorter(rows, filter.value, {
                                                        keys: ["tag"],
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
                                                accessor: "id_menu",
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
                                                            onClick={() => { setlistMenu(props.original); handleEditClick() }}
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
    )
}
