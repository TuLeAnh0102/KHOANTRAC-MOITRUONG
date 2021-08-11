import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import { commonConstants } from "../constants/common.constants.js";
import { cauhinhhethongService } from "src/services/cauhinhhethong.service.js";
// sidebar nav config
//import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.common.sidebarShow);
  let user = JSON.parse(localStorage.getItem("user"));
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    const navcustom=  []
    if (user == null || user === undefined) {
      console.log("??");
      navcustom.push({
        _tag: "CSidebarNavItem",
        name: "Đăng nhập",
        to: "/login",
        icon: "cil-cursor",
      });
    } else {
      cauhinhhethongService.getMenu(1, 102).then((res) => {
        if (res.success && res.data != null) {
          res.data.map(item => {
            if (item.id_cha === 0)
            {
              let menucon = res.data.find(i => i.id_cha === item.id_menu)
              if (menucon) {
                let reObj = {};
                reObj._tag = item.tag;
                reObj.name = item.ten_menu;
                reObj.route = item.duong_dan;
                reObj.icon =  item.icon;
                reObj._children =[];
                res.data.map(itemmap => {
                  if (item.id_menu === itemmap.id_cha) {
                    let reObjcon = {}
                    reObjcon._tag = itemmap.tag;
                    reObjcon.name = itemmap.ten_menu;
                    reObjcon.to = itemmap.duong_dan;
                    reObj._children.push(reObjcon);
                  }
                });
                navcustom.push(reObj);
              }
              else
              {
                let reObj = {};
                reObj._tag = item.tag;
                reObj.name = item.ten_menu;
                reObj.to = item.duong_dan;
                reObj.icon =  item.icon;
                navcustom.push(reObj);
              }
            }
          })
          setNavigation(navcustom);
        }
      });
    }
  }, []);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) =>
        dispatch({ type: commonConstants.SIDEBAR_SHOW, sidebarShow: val })
      }
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src="logo.png"></img>
        VNPT Bình Phước
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};
export default React.memo(TheSidebar);
