import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const RoomUpdate = (props) => {

    React.useEffect(() => {
        console.log(props.recordUpdate)
    }, [])
    const onFinish = (values) => {
        props.handleUpdateRoom(values.room)
    };

    return (
        <Form
            {...layout}
            name="nest-messages"
            initialValues={{ room:{
                ...props.recordUpdate
            }} }
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <Form.Item
                name={['room', 'id']}
                label="ID"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['room', 'maloaiphong']}
                label="Loại phòng"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['room', 'tinhtrangphong']}
                label="Tình trạng phòng"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['room', 'vitriphong']}
                label="Vị trí phòng"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="danger" onClick={() => props.goBack()}   >
                    Quay lại
                </Button>
                {" "}
                <Button type="primary" htmlType="submit">
                    Tạo mới
            </Button>
            </Form.Item>
        </Form>
    );
};

export default RoomUpdate;