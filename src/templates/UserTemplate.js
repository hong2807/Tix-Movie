import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Share/Header/Header';
import { BackTop } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




export const UserTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header></Header>
            <Component {...propsRoute} />
            <BackTop>
                <div className="icon-to-top">
                    <FontAwesomeIcon className="icon" icon={faArrowUp} />
                </div>
            </BackTop>
        </Fragment>
    }} />
}

