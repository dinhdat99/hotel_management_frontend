import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss'
import { Space, Button, Popconfirm, message } from 'antd';
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import RoomList from './RoomList';
import RoomCreate from './RoomCreate';
import RoomUpdate from './RoomUpdate';
import { toast } from 'react-toastify';
import TableHeader from '../../reusable/TableHeader';

const RoomManagement = (props) => {

    const [listRooms, setListRooms] = useState([]);

    const [pageStatus, setPageStatus] = useState(1);

    const [recordUpdate, setRecordUpdate] = useState(null);

    const [title, setTitle] = useState("Danh sách phòng");

    const createSuccessNoti = (values) => toast.success(values);

    const createFailNoti = (values) => toast.error(values)

    const handleCreateNewRoom = values => { 
        axios
            .post("http://localhost:4000/rooms", values.room)
            .then(response => {
                createSuccessNoti();
                setTitle("Danh sách phòng");
                setPageStatus(1);
                getListRoom();
            })
            .catch(err =>
                createFailNoti()
            )
    }

    const handleUpdateRoom = values => {
        axios
            .put(`http://localhost:4000/rooms/${values.id}`, values)
            .then(response => {
                createSuccessNoti("Cap nhat thanh cong");
                setTitle("Danh sách phòng");
                setPageStatus(1);
                getListRoom();
            })
            .catch(err =>
                createFailNoti("Cap nhat that bai")
            )
    }

    const handleDeleteRoom = values => {
        axios
        .delete(`http://localhost:4000/rooms/${values.id}`)
        .then(response => {
            createSuccessNoti("Xoa thanh cong");
            setTitle("Danh sách phòng");
            setPageStatus(1);
            getListRoom();
        })
        .catch(err =>
            createFailNoti("Xoa  that bai")
        )
    }

    const getListRoom  = ()=>{
        axios.get("http://localhost:4000/rooms")
            .then(duLieuTraVe => setListRooms(duLieuTraVe.data)) // neu goi API thanh cong, thi lay du lieu tra ve set vao listRooms bang phuong thuc setListRooms(values)
            .catch(err => console.log(err))
    }

    useEffect(() => { 
        getListRoom();
    }, [])

    const columns = [
        {
            title: "Mã phòng",
            dataIndex: "id",
        },
        {
            title: " Loại phòng ",
            dataIndex: "maloaiphong",
            render: (text, record) => {
                if (text === 1) {
                    return <span>Phòng thường</span>
                }
                else if (text === 2) {
                    return <span>Phòng VIP</span>
                }
                else return <span>Loại phòng không xoác đinh</span>
            }
        },
        {
            title: "Vị trí phòng",
            dataIndex: "vitriphong",
        },
        {
            title: "Thao Tác",
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type=""
                        onClick={() => {
                            setPageStatus(3)
                            setRecordUpdate(record);
                            setTitle("Cập nhật phòng")
                        }}
                    >
                        <EditFilled />
                    </Button>
                    <Popconfirm
                        placement="left"
                        title={"Chắc chắn xoá?"}
                        onConfirm={() => handleDeleteRoom(record)}
                        okText="Ok"
                        cancelText="Không"
                    >
                        <Button type="">
                            <DeleteFilled />
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <TableHeader title={title} headerAction={() => { console.log("auto run"); setTitle("Tạo mới phòng"); setPageStatus(2) }}></TableHeader>
                    {pageStatus === 1 && <RoomList columns={columns} listRooms={listRooms} />}
                    {pageStatus === 2 &&
                        <RoomCreate
                            goBack={() => {
                                setTitle("Danh sách phòng ");
                                setPageStatus(1)
                            }}
                            handleCreateNewRoom={handleCreateNewRoom}
                        />
                    }
                    {pageStatus === 3 && <RoomUpdate 
                    recordUpdate={recordUpdate}
                     goBack={() => { setTitle("Danh sách phòng "); setPageStatus(1) }} 
                     handleUpdateRoom={handleUpdateRoom}
                     />
                     }
                </div>
            </div>
            <br />
        </>
    )
}

export default RoomManagement;