import React from 'react'
import './MovieManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEdit, faPlus, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
                
                    <div className="moviemanagement__table mt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Mã phim</th>
                                    <th>Tên phim</th>
                                    <th>Ngày khởi chiếu</th>
                                    <th>Đánh giá</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-img">
                                        <img src="/images/slider4.jpg" alt=""/>
                                    </td>
                                    <td>1344</td>
                                    <td>Tiệc Trăng Máu</td>
                                    <td>23.10.2020</td>
                                    <td>7.8</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg">
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="usermanagement__pagination">
						<span>10 from 3 702</span>

						<ul className="paginator">
							<li className="paginator__item paginator__item--prev">
								<a href="./">
                                    <FontAwesomeIcon className="icon" icon={faAngleLeft} />
                                </a>
							</li>
							<li className="paginator__item active"><a href="./">1</a></li>
							<li className="paginator__item"><a href="./">2</a></li>
							<li className="paginator__item"><a href="./">3</a></li>
							<li className="paginator__item"><a href="./">4</a></li>
							<li className="paginator__item paginator__item--next">
								<button>
                                    <FontAwesomeIcon className="icon" icon={faAngleRight} />
                                </button>
							</li>
						</ul>
					</div>
                </div>
            </div>
        </div>
    )
}
