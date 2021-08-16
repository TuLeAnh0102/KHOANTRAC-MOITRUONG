import React from 'react'

export default function BangThongSo({ dataTable, dataTableQCVN,styleContent }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered th">
                <tbody>
                    <tr style={{ fontWeight: 'bold' }}>
                        <td>Thông số (mg/m3)</td>
                        <td>SO2</td>
                        <td>CO</td>
                        <td>NO2</td>
                        <td>O3</td>
                        <td>TSP</td>
                        <td>PM10</td>
                        <td>PM2.5</td>
                    </tr>
                    {dataTable?.map((item, key) => {
                        return (
                            <tr key={key} style={styleContent}>
                                <td style={{color: 'black'}}>{item.name}</td>
                                <td >{item.so2}</td>
                                <td>{item.co}</td>
                                <td>{item.no2}</td>
                                <td>{item.o3}</td>
                                <td>{item.tsp}</td>
                                <td>{item.pm10}</td>
                                <td>{item.pm25}</td>
                            </tr>)
                    })}
                    <tr>
                        <td colSpan="7" style={{ fontWeight: 'bold' }}>QCVN 05:2013/BTNMT</td>
                    </tr>
                    {dataTableQCVN?.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.name}</td>
                                <td>{item.so2 ? item.so2 : '-'}</td>
                                <td>{item.co ? item.co : '-'}</td>
                                <td>{item.no2 ? item.no2 : '-'}</td>
                                <td>{item.o3 ? item.o3 : '-'}</td>
                                <td>{item.tsp ? item.tsp : '-'}</td>
                                <td>{item.pm10 ? item.pm10 : '-'}</td>
                                <td>{item.pm25 ? item.pm25 : '-'}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
