import React from 'react'
import './PageNotFound.scss'

export default function PageNotFound(props) {
    return (
        <div className='page404-component'>
            <div className='page404__content'>
                <h1 className="page404__title">404</h1>
                <p className="page404__text text-center">Trang bạn đang tìm kiếm không có sẵn !</p>
                <button className="page404__btn btn" onClick={props.history.goBack}>Quay lại</button>	
            </div>
        </div>
    )
}
