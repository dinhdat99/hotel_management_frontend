import React from 'react';
import { Table } from 'antd';

const RoomList = props => {

    return (
        <> 
            <Table
                columns={props.columns}
                dataSource={props.listRooms}
                bordered
                rowKey="id"
                size="small"
                showSizeChanger={true}
            />
        </>
    )
}

export default RoomList;