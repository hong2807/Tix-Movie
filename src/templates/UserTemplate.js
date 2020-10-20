import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/User/Header/Header';





export const UserTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header></Header>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}

