import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button,
	Icon,
	Form,
	Input,
	Select,
	Col,
	Row,
	Checkbox,
	message,
	Spin
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;


const RuleModal = ({
	RuleModalvisible,
	RuleModalloading,
	CategoryList,
	RuleValidating,
	SysList,
	RuleSysValidating,
	SelOnchange,
	onCancel,
	handForm,
	handFormUpd,
	ProcessEditData,
	// processName,
	form: {
		getFieldDecorator,
		validateFields,
		getFieldsValue,
		getFieldError
	},
}) => {
	/*新增白名单*/
	let data = {
		...getFieldsValue()
	};
	//获取数据
	function handleOk() {
		validateFields((errors) => {
			if (errors) {
				return;
			}
			if (ProcessEditData == '') {
				handForm(data)
			} else {
				console.log(data)
				handFormUpd(data, ProcessEditData.id)
			}

		});
	};
	const formItemLayout = {
		labelCol: {
			span: 5
		},
		wrapperCol: {
			span: 14
		},
	};
	const ModalList = {
		visible: RuleModalvisible,
		confirmLoading: RuleModalloading,
		title: ProcessEditData == "" ? "新增规则" : "修改规则",
		okText: ProcessEditData == "" ? "确定" : "确定修改",
		cancelText: "取消",
		onOk: handleOk,
		onCancel
	};

	if (ProcessEditData != '') {
		ProcessEditData.category_id = String(ProcessEditData.category_id);
		ProcessEditData.sys_type = String(ProcessEditData.sys_type);
		// ProcessEditData.sys_name = '';
	}
	const seloption = [{
		name: 'windows',
		typeId: 2
	}, {
		name: 'linux',
		typeId: 1
	}];


	function SelectOnchange(e) {
		ProcessEditData.process_name = getFieldsValue().process_name;
		ProcessEditData.category_id = getFieldsValue().category_id;
		ProcessEditData.process_details = getFieldsValue().process_details;
		ProcessEditData.sys_type = e;
		ProcessEditData.sys_name = '';
		SelOnchange(e)
	}

	function SelectOnchangeName(e) {
		ProcessEditData.sys_name = e;
	}
	const CategorySelect = CategoryList.map((item, index) => <Option key={index} value={String(item.category_id)}>{item.category_name}</Option>)
	const SyeSelect = seloption.map((item, index) => <Option key={index} value={String(item.typeId)}>{item.name}</Option>)
	const SysName = SysList.map((item, index) => <Option key={index} value={item.os_name}>{item.os_name}</Option>)
	return (
		<Modal {...ModalList}>
		    <Form horizontal >
                <FormItem  {...formItemLayout} label='进程' hasFeedback>
               
                  {getFieldDecorator('process_name', {
                   initialValue:ProcessEditData.process_name,
		           rules: [{ required:true, message: '进程不能为空!' },],
		          })(
                  <Input  placeholder="请输入进程名称"/>
                  )}
	            </FormItem>
	             {/* validateStatus={RuleValidating?'validating':null}notFoundContent={RuleValidating ? 'Not Found' : <Spin />} */}
	             <FormItem  {...formItemLayout} label='类别' hasFeedback>
	              <Spin spinning={RuleValidating}>
	              {getFieldDecorator('category_id', {
	              initialValue:ProcessEditData.category_id,
		           rules: [
		              { required:true, message: '类别不能为空!' },
		            ],
		          })(
                     <Select placeholder="请选择类别">
				       {CategorySelect}
				    </Select>
                  )}
                  </Spin>
	            </FormItem>
	            <FormItem  {...formItemLayout} label='系统' >
	             <Col span="11">
		             <FormItem hasFeedback>
			             {getFieldDecorator('sys_type', {
			               initialValue:ProcessEditData.sys_type,
				           rules: [
				              { required:true, message: '系统不能为空!' },
				            ],
				          })(
		                    <Select placeholder="请选择系统" onChange={SelectOnchange}>
						       {SyeSelect}
						    </Select>
		                  )}
		              </FormItem>
	              </Col>
	              <Col span="2"></Col>
	              
                  <Col span="11">
		             <FormItem hasFeedback>
			             <Spin spinning={RuleSysValidating}>
				          {getFieldDecorator('sys_name', {
				           initialValue:ProcessEditData.sys_name,
				           rules: [
				              { required:SysList==''?false:true, message: '版本不能为空!' },
				            ],
				          })(
						        <Select placeholder="请选择版本" onChange={SelectOnchangeName}>
						          {SysName}
						        </Select>
							  )} 
		                </Spin>
                    </FormItem>
                  </Col>
	            </FormItem>
	            <FormItem  {...formItemLayout} label='名称' hasFeedback>
                  {getFieldDecorator('process_details', {
	                  initialValue:ProcessEditData.process_details,
			           rules: [{ required:true, message: '名称不能为空!' },],
			          })(
	                  <Input  placeholder="请输入名称"/>
                  )}  
	            </FormItem>
	        </Form>
        </Modal>
	)
}



RuleModal.proptypes = {
	// Detaimodal: PropTypes.isRequired,
	// Modalvisible: PropTypes.any,
	// Modalloading: PropTypes.any,
};

export default Form.create({
	mapPropsToFields(props) {
		return {
			...props,
			ProcessEditData: []
		}
	}
})(RuleModal)