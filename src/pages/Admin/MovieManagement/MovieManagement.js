import React from 'react'
import './MovieManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEdit, faPlus, faSearch, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Input, Button, Select, Modal } from 'antd';
import { useState } from 'react';

export default function MovieManagement() {
     // Form
     const [componentSize, setComponentSize] = useState('default');
     const onFormLayoutChange = ({ size }) => {
         setComponentSize(size);
     };

    //Modal edit
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
      setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };

    // Float label
    const [floatLabelActive, setfloatLabelActive] = useState(false);
    const [value, setValue] = useState('');
    const handleTextChange = (text) => {
        setValue(text);
        if (text !== '') {
          setfloatLabelActive(true);
        } else {
          setfloatLabelActive(false);
        }
    }


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
                                        <button className="icon-edit icon-bg" onClick={showModal}>
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
                                        <button className="icon-edit icon-bg" onClick={showModal}>
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
                                        <button className="icon-edit icon-bg" onClick={showModal}>
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



            <Modal
                title=""
                visible={visible}
                // onOk={handleOk}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="editMovieModal__title">
                    <div className="editMovieModal__user">
                        <div className="editMovieModal__avatar">
                            <FontAwesomeIcon className="icon" icon={faUserCircle} />
                        </div>
                        <div className="editMovieModal__text">
                            <p className="mb-0">honghuynh</p>
                        </div>
                    </div>
                    <div className="editMovieModal__action">
                        <button className="btn btn-delete">Xóa thành viên</button>
                    </div>
                </div>

                <div className="editMovieModal__details">
                    <div className="row">
                        <div className="col-5">
                            <div className="editMovieModal__details-left">  
                                <div class="form-img">Chọn hình ảnh</div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="editMovieModal__details-right">
                               
                                <Form
                                    className="editMovieModal__form"
                                    labelCol={{ span: 48 }}
                                    wrapperCol={{ span: 48 }}
                                    layout="vertical"
                                    initialValues={{ size: componentSize }}
                                    onValuesChange={onFormLayoutChange}
                                    size={componentSize}
                                >
                                    <Form.Item >
                                        <div className="float-label">
                                            <Input type="text" disabled/>
                                            <label>Mã Phim</label>
                                        </div>
                                    </Form.Item>
                                    <Form.Item>
                                        <div className="float-label">
                                            <Input type="text" onChange={(e) => handleTextChange(e.target.value)}/>
                                            <label className={ floatLabelActive ? "Active" : ""}>Tên Phim</label>
                                        </div>
                                    </Form.Item>
                                  

                                    <Form.Item className="form-btn">
                                        <Button className="btn-update">Thay đổi</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
