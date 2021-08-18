import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectTrNoLabel from '../../../components/Controls/SelectTrNoLabel';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
    CCol,
    CRow,
    CModal,
    CModalHeader,
    CModalBody,
    CButton,
    CModalFooter,
    CInput,
    CForm
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

export default function ModalModify({ isOpen, dataOptions = null, labelModal, handelClose, listMenuCha, keyEdit = 0 }) {
    const [modal, setModal] = useState(isOpen);
    const [summaryModal, setsummaryModal] = useState([]);
    const [listMenu, setlistMenu] = useState([]);
    const validationSchema = Yup.object().shape({
        ten_menu: Yup.string().required("không được để trống"),
        duong_dan: Yup.string().required("không được để trống"),
        tag: Yup.string().required("Vui lòng chọn"),
        id_cha: Yup.string().required("Vui lòng chọn"),
    });
    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, setValue, errors, control } = useForm({
        resolver: yupResolver(validationSchema),
    });
    useEffect(() => {
       if(dataOptions)
       {
           setValue('tag',dataOptions['tag']);
           setValue('id_cha',dataOptions['id_cha']);
       }
       else{
        setValue('tag','');
        setValue('id_cha','');
       }
    }, [dataOptions]);

    useEffect(() => {
        if (listMenuCha) {
            setlistMenu(listMenuCha)
        }

    }, [listMenuCha])
    const optionsTag = [
        { value: 'CSidebarNavDropdown', label: "CSidebarNavDropdown" },
        { value: 'CSidebarNavItem', label: "CSidebarNavItem" }
    ];
    useEffect(() => {
        setModal(isOpen)
    }, [isOpen]);
    useEffect(() => {
        if (dataOptions !== null) {
            setsummaryModal([
                {
                    ten_the: "Tên menu",
                    name: 'ten_menu',
                    require_the: true,
                    loai_the: 'input',
                    dataThe: dataOptions.ten_menu,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Đường link",
                    name: 'duong_dan',
                    require_the: true,
                    loai_the: 'input',
                    dataThe: dataOptions.duong_dan,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Icon",
                    name: 'icon',
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.icon,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Tag name",
                    name: 'tag',
                    require_the: true,
                    loai_the: 'select',
                    dataThe: optionsTag,
                    disable: false,
                    defaultValue: dataOptions.tag
                },
                {
                    ten_the: "Số thứ tự",
                    name: 'so_thu_tu',
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.stt,
                    disable: false,
                    defaultValue: ""
                },
                {
                    ten_the: "Menu Cha",
                    name: 'id_cha',
                    require_the: true,
                    loai_the: 'select',
                    dataThe: listMenu,
                    disable: false,
                    defaultValue: dataOptions.id_cha
                },
                // {
                //     ten_the: "Mã menu",
                //     name: 'id_menu',
                //     require_the: false,
                //     loai_the: 'input',
                //     dataThe: dataOptions.id_menu,
                //     disable: false,
                //     defaultValue: ""
                // },
                {
                    ten_the: "Status",
                    name: 'is_delete',
                    require_the: false,
                    loai_the: 'input',
                    dataThe: dataOptions.is_delete,
                    disable: false,
                    defaultValue: ""
                },
            ]);
        }

    }, [dataOptions])

    const toggle = () => {
        reset({})
        setValue('tag','');
        setValue('id_cha','');
        handelClose();
    }
    const handelLoaiTKChange = (e,id) => {
        setValue(id.name,e.value)
    }
    const handleSubmittest = (data) => {
        reset({}); 
        setValue('tag','');
        setValue('id_cha','');
        //gọi hàm update, keyedit = 0 thì tạo mới, khác 0 thì cập nhật
        console.log(keyEdit);
        console.log(data);
    }
    const handelUpdateClick = () => {

    }
    return (
        <div>
            <CModal
                show={modal}
                onClose={toggle}
                size="lg"
                closeOnBackdrop={false}
                style={{ borderRadius: '25px' }}
            >
                <CModalHeadertyled >{labelModal}</CModalHeadertyled>
                <form onSubmit={handleSubmit(handleSubmittest)} spellCheck="false">
                    <CModalBodyStyled >
                        {summaryModal && summaryModal.map((item, key) => {
                            return (
                                <CRow key={key} style={{ marginBottom: '8px' }}>
                                    <CColStyled xs="3">
                                        <span>{item.ten_the}</span>
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>{item.require_the ? "(*)" : ""}</span>:
                                    </CColStyled>
                                    <CCol xs="8">
                                        {item && item.loai_the && (item.loai_the === 'input') ?
                                            <div>
                                                <input
                                                    name={item.name}
                                                    ref={register}
                                                    style={{ color: 'black',  width: '100%', border: 'solid 1px hsl(0, 0%, 70%)', borderRadius: '4px', height: '2.4em' ,paddingLeft: '0.7em'}}
                                                    defaultValue={item.dataThe}
                                                    disabled={item.disable}
                                                />
                                                {errors[item.name] && <p style={{color: "red", padding:'0px', margin: '0px', fontStyle: 'italic'}}>{item.ten_the} {errors[item.name].message}</p>}
                                            </div>
                                            :
                                            <SelectTrNoLabel
                                                nameselect={item.name}
                                                labelSelect={item.ten_the}
                                                dataOptions={item.dataThe}
                                                setValueDefault={item.defaultValue}
                                                handelOnChange={handelLoaiTKChange}
                                                placeholder="Chọn . . ."
                                                control={control}
                                                errors={errors}
                                            />
                                        }
                                    </CCol>
                                </CRow>)
                        })
                        }

                    </CModalBodyStyled>

                    <CModalFooter>
                        <CButton
                            color="success"
                            type="submit"
                            onClick={handelUpdateClick}
                            name="btnUpdate"
                        >{dataOptions && dataOptions ? "Cập nhật" : "Lưu"}</CButton>
                        <CButton
                            color="secondary"
                            onClick={toggle}
                            name="btnCanCel"
                        >Đóng</CButton>
                    </CModalFooter>
                </form>
            </CModal>
        </div>
    )
}
