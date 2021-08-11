import React from 'react';

const NhomQuyen = React.lazy(() => import('./views/Pages/CauHinhHeThong/NhomQuyen'));
const routes = [
  { path: '/', exact: true, name: 'Trang chủ' },
  { path: '/cau-hinh-he-thong/nhom-quyen', name: 'Nhóm quyền', component: NhomQuyen}
];

export default routes;
