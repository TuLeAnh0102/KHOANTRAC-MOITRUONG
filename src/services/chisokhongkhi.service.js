import config from '../configs/config';
import { authHeader, history } from '../helpers';

import axios from 'axios';

export const chiSoKhongKhiService = {
    getDmKhuVuc,
    getThongSoAqiKhongKhi
};


async function getDmKhuVuc(ma_loai_quan_trac) {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/chi-so-khong-khi/dm-khu-vuc`,
            params: {
              'ma_loai_quan_trac' : ma_loai_quan_trac
            }
        }).then((res) => {
            return res.data;
        })
    } catch (error) {
        return handleError(error);
    }
}

async function getThongSoAqiKhongKhi(ma_loai_quan_trac, ma_tram_quan_trac) {
    try {
        return await axios({
            method: 'Get',
            headers: authHeader(),
            url : `${config.apiUrl}/api/chi-so-khong-khi/thong-so-aqi-khong-khi`,
            params: {
              'ma_loai_quan_trac' : ma_loai_quan_trac,
              'ma_tram_quan_trac' : ma_tram_quan_trac
            }
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
        //history.push('/login');
    }
    return Promise.reject(error);
}
