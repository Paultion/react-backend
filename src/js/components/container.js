/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react';
import Header from './header';
import Top from './top';
import Footer from './footer';
import {Row,Col,Menu} from 'antd';
import navLink from './NavLink';


export  default class Container extends React.Component{

    render(){

        return(

            <div>
                <Top/>
                <Header/>

                <Row className='body'>
                    <Col span={2}></Col>

                    <Col span={20} className='contaniner'>
                        {this.props.children}
                    </Col>
                    <Col span={2}></Col>

                </Row>
                <Footer/>
            </div>
        )
    }
}
