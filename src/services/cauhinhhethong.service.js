import config from '../configs/config';
import { authHeader } from '../helpers';
import axios from 'axios';

export const cauhinhhethongService = {
    getLoaiTaiKhoan,
    modifyNhomQuyen,
    getMenu
};

async function getMenu(user_id, role_id) {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/cau-hinh/get-menu-by-user`,
            params: {
                'user_id' : user_id,
                'role_id' : role_id
            }
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return handleError(error);
    }
}
async function getLoaiTaiKhoan() {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/cau-hinh/get-loai-tai-khoan`
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return handleError(error);
    }
}
async function modifyNhomQuyen(obj) {
    try {
        return await axios({
            method: 'POST',
            headers: authHeader(),
            url: `${config.apiUrl}/api/cau-hinh/them-them-nhom-quyen`,
            data: JSON.stringify(obj)
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return handleError(error);
    }
}

function handleError(error) {
    if( error.isAxiosError && error.response.status === 401)
    {
        // history.push('/login');
    }
    return Promise.reject(error);
}
