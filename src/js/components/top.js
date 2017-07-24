/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react';
import {Row,Col,Icon} from 'antd';

export  default class Top extends React.Component{

    render(){
        return(
            <div className="top">
                <Row>
                    <Col span={2}></Col>
                    <Col span={12}></Col>
                    <Col span={8}>
                        <span>你好，融优致远（北京）科技有限公司 Andy</span>
                        <span>&nbsp;&nbsp;退出&nbsp;&nbsp;</span>
                        <span><Icon type="question-circle" />帮助中心</span>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}