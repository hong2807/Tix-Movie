import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../components/Admin/Sidebar/Sidebar';

export const AdminTemplate = ({ Component, ...restProps }) => {
    return <Route {...restProps} render={(propsRoute) => {
        return <div className="d-flex">
           <Sidebar {...propsRoute}></Sidebar>
           <div className='right-content' style={{width: "calc(100% - 280px)", backgroundColor: "#1a191f"}}>
                <Component {...propsRoute} />
           </div>
        </div>
    }} />
}
