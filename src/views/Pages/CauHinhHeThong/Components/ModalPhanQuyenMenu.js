import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectTrNoLabel from '../../../../components/Controls/SelectTrNoLabel';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { MdDelete, MdModeEdit, MdSettings, MdExpandMore, MdChevronRight } from 'react-icons/md';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { cauhinhhethongService } from 'src/services';
// import Checkbox from '@material-ui/core/Checkbox';
// import Checkbox from 'src/components/Controls/Checkbox';
import Checkbox from '@material-ui/core/Checkbox';
import {
    CCol,
    CRow,
    CModal,
    CModalHeader,
    CModalBody,
    CButton,
    CModalFooter,
    CInput,
    CForm,
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


const useViewStyles = makeStyles({
    root: {}
});

const useItemStyles = makeStyles(theme => ({
    root: {
        "& > .MuiTreeItem-content > .MuiTreeItem-label": {
            display: "flex",
            alignItems: "center",
            padding: "4px 0",
            background: "transparent !important",
            pointerEvents: "none"
        },
        "& > .MuiTreeItem-content  > .MuiTreeItem-label::before": {
            content: "''",
            display: "inline-block",
            width: 12,
            height: 12,
            marginRight: 8,
            border: "1px solid #ccc",
            background: "white"
        }
    },
    iconContainer: {
        marginRight: 12,
        "& > svg": {
            padding: 8,
            "&:hover": {
                opacity: 0.6
            }
        }
    },
    label: {
        padding: 0
    },
    selected: {
        "& > .MuiTreeItem-content  > .MuiTreeItem-label::before": {
            background: theme.palette.primary.main,
            border: "1px solid transparent"
        }
    }
}));
export default function ModalPhanQuyenMenu({ isOpen, labelModal, handelClose, role_id }) {
    const [modal, setModal] = useState(false);
    const [treeData, settreeData] = useState([])
    const toggle = () => {
        // reset({})
        handelClose();
    }
    useEffect(() => {
        console.log(role_id);
    }, [role_id]);
    useEffect(() => {
        if (role_id && role_id.id_nhom_quyen !== undefined) {
            cauhinhhethongService.getMenuAdmin(role_id.id_nhom_quyen, '102',).then((res) => {
                if (res.success && res.data != null) {
                    console.log('res_menu', res.data);
                    //map data to object parent-children
                    let datamap = mapdataParentChildren(res.data);
                    settreeData(datamap);
                }
            });
        }

    }, [role_id])

    const mapdataParentChildren = (data) => {
        let datamap = data.filter((item) => item.id_cha === 0);
        datamap.map((item) => {
            let menucon = data.filter((i) => i.id_cha === item.id_menu)
            if (menucon) {
                item.children = menucon;
            }
            else {
                item.children = {}
            }

        })
        return datamap
    }
    return (
        <div>
            <CModal
                show={isOpen}
                // onClose={toggle}
                size="lg"
                closeOnBackdrop={false}
                style={{ borderRadius: '25px' }}
            >
                <CModalHeadertyled >Nhóm quyền: {role_id.ten_nhom_quyen}</CModalHeadertyled>
                {/* <form onSubmit={handleSubmit(handleSubmittest)} spellCheck="false"> */}
                <CModalBodyStyled >
                    <TreeView

                        defaultCollapseIcon={<MdExpandMore />}
                        defaultExpandIcon={<MdChevronRight />}
                    >
                        {treeData && treeData.map((item,key) => {
                            return (
                                <TreeItem
                                    key={key}
                                    nodeId={item.ten_menu}
                                    label={
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                    checked={item.checked? true: false}
                                                    style={{ height: '1em', }} />
                                            }
                                            label={item.ten_menu}
                                            style={{ marginBottom: '0px' }}
                                        />}
                                >
                                    {
                                        item.children && item.children.map((i,key) => {
                                            return(
                                                <TreeItem 
                                                    nodeId={i.ten_menu} 
                                                    label={i.ten_menu}
                                                    key={key}
                                                    label={
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    color="primary"
                                                                    style={{ height: '1em', }} 
                                                                    checked={i.checked? true: false}
                                                                />
                                                            }
                                                            label={i.ten_menu}
                                                            style={{ marginBottom: '0px' }}
                                                        />}
                                                />
                                            )
                                        })
                                    }
                                </TreeItem>
                            )
                        })}
                    </TreeView>
                    {/* {summaryModal && summaryModal.map((item, key) => {
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
                                                    style={{ color: 'black', width: '100%', border: 'solid 1px hsl(0, 0%, 70%)', borderRadius: '4px', height: '2.4em', paddingLeft: '0.7em' }}
                                                    defaultValue={item.dataThe}
                                                    disabled={item.disable}
                                                />
                                                {errors[item.name] && <p style={{ color: "red", padding: '0px', margin: '0px', fontStyle: 'italic' }}>{item.ten_the} {errors[item.name].message}</p>}
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
                        } */}
                </CModalBodyStyled>
                <CModalFooter>
                    {/* <CButton
                            color="success"
                            type="submit"
                            // onClick={handelUpdateClick}
                            name="btnUpdate"
                        >{id_menu ? "Cập nhật" : "Lưu"}</CButton> */}
                    <CButton
                        color="secondary"
                        onClick={toggle}
                        name="btnCanCel"
                    >Đóng</CButton>
                </CModalFooter>
                {/* </form> */}
            </CModal>
        </div>
    )
}
