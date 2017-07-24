/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react'
import { Modal, Button } from 'antd';

export default class modal extends React.Component {

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (


                <Modal
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText='确认'
                    cancelText="取消"
                    visible={true}
                >
                <p>确认下架</p>
                </Modal>
        );
    }
}
