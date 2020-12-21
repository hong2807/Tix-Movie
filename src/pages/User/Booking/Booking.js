import React, { useEffect, useState } from 'react'
import BookingApi from '../../../api/services/BookingApi';
import './Booking.scss'
import { Redirect } from 'react-router-dom'
import { setNestedObjectValues } from 'formik';

export default function Booking(props) {
    
    const[chairList,setChairList] = useState([]);

    const[filmInfo,setFilmInfo] = useState({});

    const[chairSelected,setChairSelected] = useState([]);

    const[booking,setBooking] = useState({});

    useEffect( () => {
        BookingApi.getChairList(props.match.params.maLichChieu)
        .then ( response => {
            console.log('chairList',response.data);
            setChairList(response.data.danhSachGhe);
            setFilmInfo(response.data.thongTinPhim);
        })
        .catch (error => {
            console.log('chairList',error.response.data)
        })
    },[])

    const renderChairList =  () => {
        return chairList.map((item,index) => {
            const isActive = chairSelected.filter((value) => {
                return value.maGhe === item.maGhe 
            }).length > 0 
           
            return <li onClick={ () => getChairInfo(item)} className={[item.daDat ? 'selected' : item.loaiGhe === 'Thuong' ? 'normal' : 'vip', isActive ? "active" : ""].join(' ')} key={index}>{item.tenGhe}</li>
        })
    }

    const getChairInfo = (item) => {
        if (chairSelected.indexOf(item) === -1) {
            chairSelected.push(item);
        }else {
            const index = chairSelected.findIndex((value)=> {
                return value === item
            })
            chairSelected.splice(index,1);
        }

        let chairListSelected = [...chairSelected];
        setChairSelected(chairListSelected);
    }

    const normalListSelected = chairSelected.filter((item) => {
        return item.loaiGhe === "Thuong"
    })
    
    const vipListSelected = chairSelected.filter((item) => {
        return item.loaiGhe === "Vip"
    })

    const bookingTicket = (data) => {
        setBooking(data = {
            
                "token": `Bearer ${localStorage.getItem('token')} `
            ,
            "maLichChieu": props.match.params.maLichChieu,
            "danhSachVe": [
                {
                "maGhe": chairSelected.map((item) => {
                    return item.maGhe
                }).toString(),
                "giaVe": chairSelected.map((item) => {
                    return item.giaVe
                }).toString()
                }
            ],
            "taiKhoanNguoiDung": localStorage.getItem('userName'),
        })
        console.log('setBooking',data);
        BookingApi.booking()
            .then(response => {
                console.log('booking',response.data);
            })
            .catch(error => {
                console.log('booking error',error.response.data);
            })
    }
    
   

    
    console.log('chairSelected',chairSelected);
    if (localStorage.getItem('token')) {
    return (
        <div className="booking-component component-padding">
            <div className="container">
                <div className="booking__content">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="booking__left">
                                <div className="booking-screen">
                                    Màn hình
                                </div>

                                <div className="booking-viewseat">
                                    <div className="row">
                                        <div className="col-1">
                                            <div className="booking-line">
                                                <ul>
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                    <li>D</li>
                                                    <li>E</li>
                                                    <li>F</li>
                                                    <li>G</li>
                                                    <li>I</li>
                                                    <li>J</li>
                                                    <li>K</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-10">
                                            <div className="booking-seats">
                                                <ul>
                                                    {renderChairList()}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-1">
                                            <div className="booking-line">
                                                <ul>
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                    <li>D</li>
                                                    <li>E</li>
                                                    <li>F</li>
                                                    <li>G</li>
                                                    <li>I</li>
                                                    <li>J</li>
                                                    <li>K</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="booking__description mt-4">
                                <div className="d-flex justify-content-around">
                                    <div className="text-center">
                                        <img src="/images/seat-blue.png" alt="" style={{width: 25, height: 25}}/>
                                        <p>Ghế Thường</p>
                                    </div>
                                    <div  className="text-center">
                                        <img src="/images/seat-red.png" alt="" style={{width: 25, height: 25}}/>
                                        <p>Ghế Vip</p>
                                    </div>
                                    <div  className="text-center">
                                        <img src="/images/seat-yellow.png" alt="" style={{width: 25, height: 25}}/>
                                        <p>Ghế đang chọn</p>
                                    </div>
                                    <div  className="text-center">
                                        <img src="/images/seat-grey.png" alt="" style={{width: 25, height: 25}}/>
                                        <p>Ghế đã đặt</p>
                                    </div>
                                </div>
                             </div>
                            
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="booking__right">
                                <div className="booking-rightContent">
                                    <div className="cardWrap">
                                        <div className="card cardTop">
                                            <div className='content'>
                                                <div className="title">
                                                <span>Phim</span>
                                                <h2>{filmInfo.tenPhim}</h2>
                                                </div>
                                                <div className="name">
                                                <span>Rạp</span>
                                                <h2>{filmInfo.tenCumRap}</h2>
                                                </div>
                                                <div className="seat">
                                                <span>Ngày</span>
                                                <h2>{filmInfo.ngayChieu}</h2>
                                                </div>
                                                <div className="time">
                                                <span>Giờ</span>
                                                <h2>{filmInfo.gioChieu}</h2>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="name">
                                                    <span>Rạp</span>
                                                    <h2>{filmInfo.tenRap}</h2>
                                                </div>
                                                <div className="name">
                                                    <span>Email</span>
                                                    <h2 className='text-lowercase'>{localStorage.getItem('email')}</h2>
                                                </div>
                                                <div className="name">
                                                    <span>Số ĐT</span>
                                                    <h2>{localStorage.getItem('soDT')}</h2>
                                                </div>
                                            </div>
                                            </div>
                                        <div className="card cardBottom">
                                            <h1 className='header__logo'>
                                                Tix <span>Movie</span>
                                            </h1>

                                            {normalListSelected.length > 0 &&  <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Vé Thường:</div><div className='ticket-price'>{normalListSelected.length} x {(normalListSelected[0].giaVe).toLocaleString()}</div>
                                            </div>}

                                            {vipListSelected.length > 0 && <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Vé Vip:</div><div className='ticket-price'>{vipListSelected.length} x {(vipListSelected[0].giaVe).toLocaleString()}</div>
                                            </div>}

                                            
                                          
                                                {/* <div className='list-seat-detail'>(B1, B2)</div> */}
                                            <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Ghế:</div>
                                                {chairSelected.length > 0 && <div className='ticket-price'>
                                                   ( {chairSelected.map((item) => {
                                                        return item.tenGhe
                                                    }).toString()} ) 
                                                </div>}
                                                
                                            </div>
                                            {/* <div className='list-seat-detail text-right'>
                                                <div className='ticket-type'>Ghế:</div>
                                             
                                            </div>
                                             */}

                                            <div className='price-total'>
                                                <span>Tổng Tiền</span>
                                                {chairSelected.length > 0 && <h3>  
                                                    {chairSelected.reduce((total,item) => {
                                                            return (total + item.giaVe)
                                                        },0).toLocaleString()}
                                                    </h3>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='btn btn-booking' onClick={bookingTicket  }>Mua vé</button>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                 


                    <div className="booking__confirm booking__right">
                             <div className="cardWrap">
                                        <div className="card cardTop">
                                            <div className='content'>
                                                <div className="title">
                                                <span>Phim</span>
                                                <h2>{filmInfo.tenPhim}</h2>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className="name">
                                                    <span>Rạp</span>
                                                    <h2>{filmInfo.tenCumRap}</h2>
                                                    </div>
                                                    <div className="name ml-3">
                                                        <span>Rạp</span>
                                                        <h2>{filmInfo.tenRap}</h2>
                                                    </div>
                                                </div>
                                                <div className="seat">
                                                <span>Ngày</span>
                                                <h2>{filmInfo.ngayChieu}</h2>
                                                </div>
                                                <div className="time">
                                                <span>Giờ</span>
                                                <h2>{filmInfo.gioChieu}</h2>
                                                </div>
                                                <div className="clear"></div>
                                                <div className='d-flex'>
                                                    <div className="name">
                                                        <span>Email</span>
                                                        <h2 className='text-lowercase'>{localStorage.getItem('email')}</h2>
                                                    </div>
                                                    <div className="name ml-3">
                                                        <span>Số ĐT</span>
                                                        <h2>{localStorage.getItem('soDT')}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        <div className="card cardBottom">
                                            <h1 className='header__logo'>
                                                Tix <span>Movie</span>
                                            </h1>

                                            {normalListSelected.length > 0 &&  <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Vé Thường:</div><div className='ticket-price'>{normalListSelected.length} x {(normalListSelected[0].giaVe).toLocaleString()}</div>
                                            </div>}

                                            {vipListSelected.length > 0 && <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Vé Vip:</div><div className='ticket-price'>{vipListSelected.length} x {(vipListSelected[0].giaVe).toLocaleString()}</div>
                                            </div>}

                                            
                                          
                                                {/* <div className='list-seat-detail'>(B1, B2)</div> */}
                                            <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Ghế:</div>
                                                {chairSelected.length > 0 && <div className='ticket-price'>
                                                   ( {chairSelected.map((item) => {
                                                        return item.tenGhe
                                                    }).toString()} ) 
                                                </div>}
                                                
                                            </div>
                                            {/* <div className='list-seat-detail text-right'>
                                                <div className='ticket-type'>Ghế:</div>
                                             
                                            </div>
                                             */}

                                            <div className='price-total'>
                                                <span>Tổng Tiền</span>
                                                {chairSelected.length > 0 && <h3>  
                                                    {chairSelected.reduce((total,item) => {
                                                            return (total + item.giaVe)
                                                        },0).toLocaleString()}
                                                    </h3>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    </div> 
                </div>
            </div>
        </div>
    )                                        
    }
    return (
        <Redirect to='/dangnhap' />
    )
}
