import React, { Fragment, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';



export const AdminTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
           
        </Fragment>
    }} />
}
