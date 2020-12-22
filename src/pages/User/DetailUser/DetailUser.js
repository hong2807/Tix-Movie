import React, { useEffect } from 'react'
import './DetailUser.scss'
import { Tabs } from 'antd';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import UserApi from '../../../api/services/UserApi';


export default function DetailUser() {
    // Ant Design
    const { TabPane } = Tabs;
    function callback(key) {
    console.log(key);
    }

    // Form
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const[userInfo, setuserInfo] = useState({});
    const[bookingHistory, setBookingHistory] = useState([]);


    useEffect( () => {
        const data = {
            "taiKhoan": localStorage.getItem('userName')
        }
        console.log('data',data)
        UserApi.userInfo(data)
        .then(response => {
            console.log(response.data);
            setuserInfo(response.data);
            setBookingHistory(response.data.thongTinDatVe);
        })
        .catch(error => {
            console.log("abc");
        })
    },[])

    const renderTransaction = () => {
        return bookingHistory.map((item,index) => {
            return <div className="detailuser__history-item mb-5" key={index}>
            <div className="row">
                <div className="col-2">
                    <div>
                        <img style={{width: 100, height: 120}} src="/images/test.png" alt=""></img>
                    </div>
                </div>
                <div className="col-10">
                <div>
                    <p>Phim {item.tenPhim}</p>
                    {item.danhSachGhe.map((value,index) => {
                        return <>
                        <p>{value.tenHeThongRap} - L3-Bitexco Icon 68, 2 Hải Triều, Quận 1</p>
                        <p>Ngày đặt: 11.10.2020 - {value.tenRap} - Ghế {value.tenGhe}</p>
                    </>
                    })}
                </div>
            </div>
            </div>
        </div>
        })
    }

    // const renderChairInfo = () => {
    //     return bookingHistory.map((item) => {
    //         return item.danhSachGhe.map((value,index) => {
    //             return <>
    //                 <p>{value.tenHeThongRap} - L3-Bitexco Icon 68, 2 Hải Triều, Quận 1</p>
    //                 <p>Ngày đặt: 11.10.2020 - {value.tenRap} - Ghế {value.tenGhe}</p>
    //             </>
    //         })
            
    //     })
    // }

    return (
        <div className="detailuser-component component-padding">
            <div className="container">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Thông tin cá nhân" key="1">
                {/* <div className="addUserModal__title">
                    <h4 className="title">Thêm Thành Viên</h4>
                </div> */}
                <div className="detailuser__info">
                    <div className="detailuser__info-content">
                        <Form
                            className="addUserModal__form"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            layout="vertical"
                            initialValues={{ size: componentSize }}
                            onValuesChange={onFormLayoutChange}
                            size={componentSize}
                        >
                            <Form.Item label="Email" >
                                <Input type="text"  value={userInfo.email} />
                            </Form.Item>
                            <Form.Item label="Họ tên" >
                                <Input type="text" value={userInfo.hoTen} />
                            </Form.Item>
                            <Form.Item label="Số điện thoại" >
                                <Input type="text" value={userInfo.soDT} />
                            </Form.Item>
                            <Form.Item label="Tài khoản" >
                                <Input type="text" value={userInfo.taiKhoan} />
                            </Form.Item>
                            <Form.Item label="Mật khẩu" >
                                <Input type="text" value={userInfo.matKhau} />
                            </Form.Item>
                            <Form.Item className="form-btn">
                                <Button className="btn-update">Cập nhật</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                </TabPane>
                <TabPane tab="Lịch sử đặt vé" key="2">
                    <div className="detailuser__history">
                        <div className="detailuser__history-content">
                            {renderTransaction()}
                            {/* <div className="detailuser__history-item mb-5">
                                <div className="row">
                                    <div className="col-2">
                                        <div>
                                            <img style={{width: 100, height: 120}} src="/images/test.png" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-10">
                                    <div>
                                        <p>Phim</p>
                                        <p>BHD Star BitexCo - L3-Bitexco Icon 68, 2 Hải Triều, Quận 1</p>
                                        <p></p>
                                        <p>Ngày đặt: 11.10.2020 - Rạp 01 - Ghế A11,A12</p>
                                    </div>
                                </div>
                                </div>
                            </div> */}
                         
                        </div>
                    </div>
                </TabPane>
            </Tabs>
            </div>
        </div>
    )
}
