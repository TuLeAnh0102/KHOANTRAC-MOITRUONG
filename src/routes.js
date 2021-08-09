import React from 'react';

const CauHinhHeThong = React.lazy(() => import('./views/Pages/CauHinhHeThong/cauhinhhethong'));
const DmKhuVucPage = React.lazy(() => import('./views/Pages/ChatLuongKhongKhiPage/DmKhuVucPage'));
const ChatLuongKhongKhiPage = React.lazy(() => import('./views/Pages/ChatLuongKhongKhiPage/ChatLuongKhongKhiPage'));

const routes = [
  { path: '/', exact: true, name: 'Trang chủ' },
  { path: '/cau-hinh-he-thong', name: 'Cấu hình hệ thống', component: CauHinhHeThong},
  { path: '/dm-khu-vuc', name: 'Danh sách khu vực', component: DmKhuVucPage},
  { path: '/chisokhongkhi/:id', name: 'Chất lượng không khí', component: ChatLuongKhongKhiPage}
];

export default routes;
