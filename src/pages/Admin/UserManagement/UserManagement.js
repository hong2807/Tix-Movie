import React from 'react'
import './UserManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HeaderUserAdmin from '../../../components/Admin/HeaderUserAdmin/HeaderUserAdmin';
import TableUserAdmin from '../../../components/Admin/TableUserAdmin/TableUserAdmin';



export default function UserManagement() {
    const[numberPagination, setNumberPagination] = useState();

    const renderNumberPagination= () => {
        console.log(numberPagination)
        let rows = [];
        let count = 0;
        for(let i = 1; i <= numberPagination; i++) {
            if(count < 5) {
                count++;
                rows.push(<li className="paginator__item" key={i}><a href="./">{i}</a></li>);
            } 
        }
        return rows;
    }


    return (
        <div className="usermanagement-component">
            <div className="container-fluid">
             <div className="usermanagement__content">
                    <HeaderUserAdmin/>
                    <TableUserAdmin/>

                    <div className="usermanagement__pagination">
						<span>10 from 3 702</span>

						<ul className="paginator">
							<li className="paginator__item paginator__item--prev">
								<a href="./">
                                    <FontAwesomeIcon className="icon" icon={faAngleLeft} />
                                </a>
							</li>
							{/* <li className="paginator__item active"><a href="./">1</a></li>
							<li className="paginator__item"><a href="./">2</a></li>
							<li className="paginator__item"><a href="./">3</a></li>
							<li className="paginator__item"><a href="./">4</a></li> */}
                            {renderNumberPagination()}
							<li className="paginator__item paginator__item--next">
								<a href="./">
                                    <FontAwesomeIcon className="icon" icon={faAngleRight} />
                                </a>
							</li>
						</ul>
					</div>
                </div>
            </div>
            
            
                   
         
        </div>  
    )
}
