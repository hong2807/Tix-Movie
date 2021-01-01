import React from 'react'
import './UserManagement.scss'
import HeaderUserAdmin from '../../../components/Admin/HeaderUserAdmin/HeaderUserAdmin';
import TableUserAdmin from '../../../components/Admin/TableUserAdmin/TableUserAdmin';



export default function UserManagement() {
    return (
        <div className="usermanagement-component">
            <div className="container-fluid">
             <div className="usermanagement__content">
                    <HeaderUserAdmin/>
                    <TableUserAdmin/>
                </div>
            </div>  
        </div>  
    )
}
