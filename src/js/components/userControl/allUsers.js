import React from 'react';
import {Table,Input,Radio,Select} from 'antd';
import modal from '../modal';
import {fetchUrl} from '../../config/config'
import {Link} from 'react-router';
const Search = Input.Search;
const Option = Select.Option;


const columns = [{
    title: '',
    dataIndex: 'userImg',
    render: (text, record) => (
        <img style={{width:'30px'}} src={record.userImg}/>
    )
},{
    title: '用户',
    dataIndex: 'nickName',
},{
    title: '真实姓名',
    dataIndex: 'realName',
},{
    title: '性别',
    dataIndex: 'sex',
}, {
    title: '手机号',
    dataIndex:'phone',

},{
    title: '国家',
    dataIndex:'country',
    }, {
    title: '所在城市',
    dataIndex:'city',
}, {
    title: '注册时间',
    dataIndex:'userRegisterTime',
}, {
    title: '是否关注公众号',
    dataIndex:'isSubScribe',
}, {
    title: '关注时间',
    dataIndex:'subscribeTime',
}, {
    title: '注册ip',
    dataIndex:'wxUnionid',
}/*, {
    title: '设备类型',
    dataIndex:'userType',
}, {
    title: '设备编号',
    dataIndex:'userFacilityNumber',
}*/,{
    title: '操作',
    render: () => (
        <Radio.Group>
            <Radio.Button value="copyHref"><Link to='/userControl/allUsers/userDetail:'>详情</Link></Radio.Button>
            <Radio.Button value="default">设为讲师</Radio.Button>
        </Radio.Group>
    )
}];


function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}
const data = [];
export default class allCourse extends React.Component{
    constructor(){
        super();
        this.state={
            list:''
        }
    }

    componentWillMount(){
        fetch('http://liyang.zhishimao.ngrok.cc/api/backend/user/list/student', {
            method: "POST",
            body:'pageSize=9&pageIndex=1'
        }) .then(response => response.json())
            .then(json => {json.data.content.map((res,index)=>{
                    data.push({
                        idStr:json.data.content[index].idStr,
                        key:index,
                        nickName: json.data.content[index].nickName,
                        realName:json.data.content[index].realName,
                        phone:json.data.content[index].phone,
                        sex:json.data.content[index].sex,
                        intro:json.data.content[index].intro,
                        country:json.data.content[index].country,
                        city:json.data.content[index].city,
                        subscribeTime:json.data.content[index].subscribeTime,
                        isSubScribe:json.data.content[index].issubscribe,
                        deleted:json.data.content[index].deleted,
                        wxUnionid:json.data.content[index].wxUnionid,
                        userImg:json.data.content[index].avatar

                    })
                })

            })
    }
    render(){
        return(
            <div>
                <h3 className="rigthH3">查看全部用户</h3>
                <Search
                    placeholder="请输入搜索内容"
                    style={{ width: 200 }}
                    onSearch={value => console.log(value)}
                />
                <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>


        )
    }
}