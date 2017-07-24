/**
 * Created by ryzy-004 on 2017/7/17.
 */
/**
 * Created by ryzy-004 on 2017/7/17.
 */
import React from 'react';
import {Table,Menu,Row,Col,Icon ,Switch,Form,Input,Radio,Button,Tooltip,Select,Checkbox,Upload,message,DatePicker,Modal,InputNumber} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;
const Search = Input.Search;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const Dragger = Upload.Dragger;
const columns = [{
    dataIndex: 'userImg',
    render: (text, record) => (
        <img style={{width:'30px'}} src={record.userImg}/>
    )
},{
    dataIndex: 'nickName',
}, {
    dataIndex: 'age',
}, {
    dataIndex: 'sex',
}, {
    dataIndex: 'phone',
}];
const data = [];


let uuid = 0;

class createCourse extends React.Component{
    constructor(){
        super();
        this.state={
            addModalVisible:false,
            previewVisible: false,
            previewImage: '',
            fileList: [{

            }],
            selectedRowKeys: [],  // Check here to configure the default column
            timeValue:'',
            lecturerList:[],
        }
    }
    showAddModal = () => {

        this.setState({
            addModalVisible: true,
        });

        console.log(data)

    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    handleAddOk = (e) => {
        console.log(e);
        this.setState({
            addModalVisible: false,
        });
    };
    handleAddCancel = (e) => {
        console.log(e);
        this.setState({
            addModalVisible: false,
        });
    };
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 0) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };
    add = () => {
        uuid++;
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log( values);
                var managerJson={
                    "courseTitle": values.courseTitle,
                    "fileList": values.fileList,
                    "courseDes": values.courseDes,
                    "date-picker": values.date_picker,
                    "courseTimeLength": values.courseTimeLength,
                    "a1": values.a1,
                    "a2": values.a2,
                    "b1": values.b1,
                    "b1": values.b1,
                };
                fetch('http://api/client2.zhishimao.cn/backend/course/courseList', {
                    method: "POST",
                    body:managerJson
                }) .then(response => response.json())
                    .then(json => {
                        console.log(json)
                    })
            }
        });


    };

    onChangeRadioValue1 = (e) => {
        this.setState({
            isIndexRadioValue: e.target.value,
        });
    };
    onChangeRadioValue2 = (e) => {
        this.setState({
            isShelvesRadioValue: e.target.value,
        });
    };
    onChangeRadioValue3 = (e) => {
        this.setState({
            isRecruitingRadioValue: e.target.value,
        });
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    componentWillMount(){
        this.props.form.setFieldsValue({
            isIndexRadioValue:'否',
            isShelvesRadioValue:'否',
            isRecruitingRadioValue:'否'
        });
        fetch('http://liyang.zhishimao.ngrok.cc/api/backend/user/list/lecturer', {
            method: "POST",
            body:'pageSize=5&pageIndex=1'
        }) .then(response => response.json())
            .then(json => {json.data.content.map((res,index)=>{
                data.push({
                    idStr:json.data.content[index].idStr,
                    key:index,
                    nickName: json.data.content[index].user.nickName,
                    phone:json.data.content[index].user.phone,
                    sex:json.data.content[index].user.sex,
                    userImg:json.data.content[index].user.avatar,

                })
            })
                console.log(this.state.lecturerList)
        })
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        const plainOptions=[
            '否','是'
        ];
        const shelvesState=[
            '上架','下架'
        ];
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 },
        };
        const formItemNumInput = {
            wrapperCol: { span: 14},
        };
        const InputNumberLayout={
            labelCol: { span: 4 },
            wrapperCol: { span: 10 },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <div {...formItemLayout}
                    required={true}
                    key={k}
                >
                    <Button style={{ width: '43%' }} onClick={this.showAddModal}>点击添加</Button>
                    <Input type='text'  style={{ width: '43%' ,marginLeft:'5%',marginRight:'5%'}}/>
                    {keys.length > 0 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 0}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </div>
            );
        });
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );


        return (
            <div>
                <h3 className="rigthH3">创建课程</h3>
                <br/>
                <label className="basicInfoLabel" >基本信息</label>
                <br/>
                <Form className="createCurseForm" onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label='课程标题'>
                        {getFieldDecorator('courseTitle', {
                            rules: [{
                                required: true,
                                message: '建议课程不超过30字',
                            }],
                        })(
                            <Input placeholder="建议课程不超过30字"/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label='课程图片'>
                        {getFieldDecorator('fileList', {
                            rules: [{
                                required: true,
                                message: '建议课程不超过30字',
                            }],
                        })(
                            <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 5 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        )}


                    </FormItem>
                    <FormItem {...formItemLayout} label='课程介绍'>
                        {getFieldDecorator('courseDes', {
                            rules: [{
                                required: true,
                                message: '建议课程不超过30字',
                            }],
                        })(
                            <Input placeholder="请输入课程介绍"  />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label='开课时间'>
                        {getFieldDecorator('date_picker', config)(
                            <DatePicker />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="课程时长"
                    >
                        {getFieldDecorator('courseTimeLength',{
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <Select
                                mode="combobox"
                                placeholder="Please select"
                                style={{ width: '100%' }}
                            >
                                <Option value="5">5分钟</Option>
                                <Option value="25">25分种</Option>
                                <Option value="30">30分钟</Option>
                                <Option value="45">45分钟</Option>
                                <Option value="60">60分钟</Option>
                            </Select>
                        )}

                    </FormItem>
                    <FormItem {...formItemLayout} label='课程相关人员'>
                        <p><span>添加人员</span><span>身份</span></p>
                        <Button style={{ width: '43%' }} onClick={this.showAddModal} >点击添加</Button>
                        <Input type='text' value='讲师' style={{ width: '43%' ,marginLeft:'5%',marginRight:'5%'}}/>
                        {formItems}

                        <Button type="dashed" onClick={this.add} style={{width:'50%',marginTop:30}} >
                            <Icon type="plus" /> 添加其他人员
                        </Button>
                    </FormItem>
                    <br/>
                    <label className="basicInfoLabel" >上架信息</label>
                    <br/>
                    <FormItem {...InputNumberLayout}>
                        <label style={{marginLeft:64}}>互动学员人数：</label>
                        {getFieldDecorator('a1', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <InputNumber min={1} max={10}/>
                        )}
                    </FormItem>
                    <FormItem {...InputNumberLayout}>
                        <label style={{marginLeft:64}}>互动学员价格：</label>
                        {getFieldDecorator('a2', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <InputNumber min={1} max={10}/>
                        )}
                    </FormItem>
                    <FormItem {...formItemNumInput} label="">
                        <label style={{marginLeft:64}}>旁听学员人数：</label>
                        {getFieldDecorator('b1', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <InputNumber min={1} max={10} />
                        )}
                    </FormItem>
                    <FormItem>
                        <label style={{marginLeft:64}}>旁听学员价格：</label>
                        {getFieldDecorator('b2', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <InputNumber min={1} max={10}/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label='在首页上显示'>
                        {getFieldDecorator('isIndexRadioValue', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <RadioGroup  options={plainOptions} onChange={this.onChangeRadioValue1} setFieldsValue={this.props.form.setFieldsValue.isIndexRadioValue}>
                            </RadioGroup>

                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label='上架状态'>
                        {getFieldDecorator('isShelvesRadioValue', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <RadioGroup options={shelvesState} onChange={this.onChangeRadioValue2} setFieldsValue={this.props.form.setFieldsValue.isShelvesRadioValue}>
                            </RadioGroup>

                        )}

                    </FormItem>
                    <FormItem {...formItemLayout} label='平台招募'>
                        {getFieldDecorator('isRecruitingRadioValue', {
                            rules: [{
                                required: true,
                                message: '',
                            }],
                        })(
                            <RadioGroup options={plainOptions} onChange={this.onChangeRadioValue3} setFieldsValue={this.props.form.setFieldsValue.isRecruitingRadioValue}>
                            </RadioGroup>

                        )}

                    </FormItem>
                    <FormItem label="">
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
                <Modal
                    title='添加人员'
                    onOk={this.handleAddOk}
                    onCancel={this.handleAddCancel}
                    okText='确认'
                    cancelText="取消"
                    visible={this.state.addModalVisible}
                >
                    <Search
                        placeholder="请输入搜索内容"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                    /><br/>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </Modal>
            </div>
        );
    }
}
export default createCourse = Form.create()(createCourse);

