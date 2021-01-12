import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

const EmployeeManagement = (props) => {

    const [listEmployee, setListEmployee] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/nhanvien").then(res => setListEmployee(res.data)).catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2> <b>Quản lý  Nhân viên</b></h2>
                            </div>
                            <div className="col-sm-6">
                            {/* <input className="form-control mr-sm-2 align-middle" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                                <button type="button" className="btn btn-success">Xóa</button>
                                <button type="button" className="btn btn-secondary">Sửa</button>
                                <button type="button" className="btn btn-primary" onClick={() => { }}>Thêm</button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label htmlFor="selectAll" />
                                    </span>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listEmployee.map(item =>
                                    <tr>
                                        <td>{item.idnhanvien}</td>
                                        <td>{item.tennhanvien}</td>
                                        <td>{item.ngaysinh}</td>
                                        <td>{item.gioitinh}</td>
                                        <td>{item.daichi}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.idchucvu}</td>
                                        <td>{item.idtaikhoan}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul className="pagination">
                            <li className="page-item disabled"><a href="#">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeManagement;