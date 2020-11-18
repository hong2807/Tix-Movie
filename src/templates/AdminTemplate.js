import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../components/Admin/Dashboard/Dashboard';



export const AdminTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={() => {
        return <Fragment>
           <Dashboard></Dashboard>s
        </Fragment>
    }} />
}
