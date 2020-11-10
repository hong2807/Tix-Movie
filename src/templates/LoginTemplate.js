import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';






export const LoginTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
         
            <Component {...propsRoute} />
        </Fragment>
    }} />
}