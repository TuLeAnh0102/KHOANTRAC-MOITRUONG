import React from 'react';

const NhomQuyen = React.lazy(() => import('./views/Pages/CauHinhHeThong/NhomQuyen'));
const DmKhuVucPage = React.lazy(() => import('./views/Pages/ChatLuongKhongKhiPage/DmKhuVucPage'));
const ChatLuongKhongKhiPage = React.lazy(() => import('./views/Pages/ChatLuongKhongKhiPage/ChatLuongKhongKhiPage'));
const DanhSachMenu = React.lazy(() => import('./views/Pages/CauHinhHeThong/DanhSachMenu'));
const DanhSachTaiKhoan = React.lazy(() => import('./views/Pages/CauHinhHeThong/DanhSachTaiKhoan'));

const routes = [
  { path: '/', exact: true, name: 'Trang chủ' },
  { path: '/cau-hinh-he-thong/nhom-quyen', name: 'Nhóm Quyền', component: NhomQuyen},
  { path: '/cau-hinh-he-thong/danh-sach-menu', name: 'Menu', component: DanhSachMenu},
  { path: '/cau-hinh-he-thong/user', name: 'Menu', component: DanhSachTaiKhoan},
  { path: '/dm-khu-vuc', name: 'Danh sách khu vực', component: DmKhuVucPage},
  { path: '/chisokhongkhi/:id', name: 'Chất lượng không khí', component: ChatLuongKhongKhiPage}
];

export default routes;
