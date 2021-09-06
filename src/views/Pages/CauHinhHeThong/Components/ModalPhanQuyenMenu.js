import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SelectTrNoLabel from '../../../../components/Controls/SelectTrNoLabel';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { MdDelete, MdModeEdit, MdSettings,MdExpandMore,MdChevronRight } from 'react-icons/md';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
import CIcon from '@coreui/icons-react'
import { Route } from 'react-router-dom';

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
export default function ModalPhanQuyenMenu({ isOpen, labelModal, handelClose }) {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        // reset({})
        handelClose();
    }
    useEffect(() => {
        setModal(isOpen)
    }, [isOpen]);
    return (
        <div>
            <CModal
                show={modal}
                // onClose={toggle}
                size="lg"
                closeOnBackdrop={false}
                style={{ borderRadius: '25px' }}
            >
                <CModalHeadertyled >{labelModal}</CModalHeadertyled>
                {/* <form onSubmit={handleSubmit(handleSubmittest)} spellCheck="false"> */}
                <CModalBodyStyled >
                    <TreeView
                        
                        defaultCollapseIcon={<MdExpandMore />}
                        defaultExpandIcon={<MdChevronRight />}
                    >
                        <TreeItem  nodeId="1" 
                        // style={{padding: '0px'}}
                        label={
                            <FormControlLabel
                                control={
                                <Checkbox
                                    color="primary" 
                                    style={{height: '1em',}}
                                />}
                                label="Primary"
                                style={{marginBottom: '0px'}}
                                
                            >
                                
                            </FormControlLabel>
                        }>
                            <TreeItem nodeId="2" label="Calendar" />
                            <TreeItem nodeId="3" label="Chrome" />
                            <TreeItem nodeId="4" label="Webstorm" />
                        </TreeItem>
                        <TreeItem nodeId="5" label="Documents">
                            <TreeItem nodeId="10" label="OSS" />
                            <TreeItem nodeId="6" label="Material-UI">
                                <TreeItem nodeId="7" label="src">
                                    <TreeItem nodeId="8" label="index.js" />
                                    <TreeItem nodeId="9" label="tree-view.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeItem>
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
