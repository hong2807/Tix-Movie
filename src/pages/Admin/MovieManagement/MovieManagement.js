import React from 'react'
import './MovieManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch,} from '@fortawesome/free-solid-svg-icons';
import TableMovieAdmin from '../../../components/Admin/TableMovieAdmin/TableMovieAdmin';



export default function MovieManagement() {
     

   
    return (
        <div className="moviemanagement-component">
            <div className="container-fluid">
             <div className="moviemanagement__content">
                    <div className="moviemanagement__title">
                        <h3 className="title mb-0">Phim</h3>
                        <div className="moviemanagement__title-right">
                            <div className="mr-3 search">
                                <input type="text" placeholder="Tìm phim.."/>
                                <FontAwesomeIcon className="icon" icon={faSearch} />
                            </div>

                            <button className="add">
                                <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
                                Thêm phim
                            </button>
                        </div>
                    </div>
                    <TableMovieAdmin/>
                   

                    
                </div>
            </div>



            
        </div>
    )
}
