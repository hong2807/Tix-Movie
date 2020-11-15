import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';



export const AdminTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={() => {
        return <Fragment>
           
        </Fragment>
    }} />
}
