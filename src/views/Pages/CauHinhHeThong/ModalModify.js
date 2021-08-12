import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectTrNoLabel from '../../../components/Controls/SelectTrNoLabel';
import {
    CCol,
    CRow,
    CModal,
    CModalHeader,
    CModalBody,
    CButton,
    CModalFooter,
    CInput
} from '@coreui/react';
const styleLabel = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "black"
};
const styleTinhtrang = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "red"
};

const CModalBodyStyled = styled(CModalBody)`
    font-family: Roboto;
    font-style: normal;

`;
const CModalHeadertyled = styled(CModalHeader)`
  text-align: center;
  color: black;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;
const CColStyled = styled(CCol)`
align-items: right;
text-align: right;
`;

export default function ModalModify({ isOpen, dataOptions = null, valueDefault, labelModal, handelClose ,listMenuCha}) {
    const [modal, setModal] = useState(isOpen);
    const [summaryModal, setsummaryModal] = useState([]);
    const [listMenu, setlistMenu] = useState([]);
    useEffect(() => {
        if(listMenuCha)
        {
            console.log("listMenuCha",listMenuCha);
        setlistMenu(listMenuCha)
        }
        
    }, [listMenuCha])
    const optionsTag=[
        {value: 'CSidebarNavDropdown', label: "CSidebarNavDropdown"}, 
        {value: 'CSidebarNavItem', label: "CSidebarNavItem"}
    ];
    useEffect(() => {
        setModal(isOpen)
    }, [isOpen]);
    useEffect(() => {
        if (dataOptions !== null) {
            setsummaryModal([
                {
                    ten_the: "Tên menu",
                    require_the: true,
                    loai_the: 'input',
                    dataThe: dataOptions.ten_menu, 
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Đường link",
                    require_the: true,
                    loai_the: 'input',
                    dataThe: dataOptions.duong_dan,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Icon",
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.icon,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Tag name",
                    require_the: true,
                    loai_the: 'select',
                    dataThe: optionsTag,
                    disable: false,
                    defaultValue: dataOptions.tag
                },
                {
                    ten_the: "Số thứ tự",
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.stt,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Menu Cha",
                    require_the: true,
                    loai_the: 'select',
                    dataThe:listMenu,
                    disable: false,
                    defaultValue: dataOptions.id_cha
                },
                {
                    ten_the: "Mã menu",
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.id_menu,
                    disable: true,
                    defaultValue: ""
                },
                {
                    ten_the: "Status",
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.is_delete,
                    disable: true,
                    defaultValue: ""
                },
            ]);
        }

    }, [dataOptions])

    const toggle = () => {
        handelClose();
    }
    const handelLoaiTKChange = () => {
    }
    const handelUpdateClick = () => {
        console.log("???")
    }
    return (
        <div>
            <CModal
                show={modal}
                onClose={toggle}
                size="lg"
                closeOnBackdrop={false}
            >
                <CModalHeadertyled >{labelModal}</CModalHeadertyled>
                <CModalBodyStyled>
                    {summaryModal && summaryModal.map((item, key) => {
                        return (
                            <CRow key={key} style={{ marginBottom: '8px' }}>
                                <CColStyled xs="3">
                                    <span>{item.ten_the}</span>
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>{item.require_the ? "(*)" : ""}</span>:
                                </CColStyled>
                                <CCol xs="8">
                                    {item && item.loai_the && (item.loai_the === 'input') ?
                                        <CInput style={{ color: 'black', }} defaultValue={item.dataThe} disabled={item.disable}></CInput>
                                        :
                                        <SelectTrNoLabel
                                            nameselect="cong_ty"
                                            dataOptions={item.dataThe}
                                            setValueDefault={(item.defaultValue===0)? item.dataThe[0]: item.dataThe.find(i => i.value===item.defaultValue)}
                                            handelOnChange={handelLoaiTKChange}
                                            placeholder="Chọn . . ."
                                        />
                                    }
                                </CCol>
                            </CRow>)})
                    }
                </CModalBodyStyled>
                <CModalFooter>
                    <CButton
                        color="success"
                        onClick={handelUpdateClick}
                        name="btnUpdate"
                    >Cập nhật</CButton>
                    <CButton
                        color="secondary"
                        onClick={toggle}
                        name="btnCanCel"
                    >Đóng</CButton>
                </CModalFooter>
            </CModal>
        </div>
    )
}
