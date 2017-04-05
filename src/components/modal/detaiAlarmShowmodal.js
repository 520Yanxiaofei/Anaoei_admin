import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button,
	Table,
	Tooltip,
} from 'antd';
import styles from '../layout.less'

const Detaishowmodal = ({
	AlarmShowvisible,
	Alarmshowloading,
	AlarmShowMsg,
	currentrepeat,
	pagesize,
	pagecurrentrepeat,
	pagechange,
	pagecurrentchange,
	onCancel,
}) => {
	const pagelist = {
		total: pagesize,
		showSizeChanger: false,
		/*当前页数*/
		current: currentrepeat,
		/*当前页码*/
		defaultPageSize: pagecurrentrepeat,
		onShowSizeChange(current, pageSize) {
			pagecurrentchange(current, pageSize)
		},
		onChange(current) {
			pagechange(current)
		}
	}
	const formItemLayout = {
		labelCol: {
			span: 5
		},
		wrapperCol: {
			span: 14
		},
	};
	const ModalList = {
		visible: AlarmShowvisible,
		confirmLoading: Alarmshowloading,
		title: "详细进程表",
		okText: "确定",
		cancelText: "取消",
		footer: false,
		width: 900,
		onCancel: onCancel
	};
	const columns_one = [{
		title: '告警时间',
		dataIndex: 'warn_time',
		key: 'warn_time',
		width: '12%',
		render: (text) => {
			return (
				<div className={styles.whiteTr}>{text}</div>
			)
		}
	}, {
		title: '进程名',
		dataIndex: 'process_name',
		key: 'process_name',
		width: '10%',
		render: (text) => {
			return (
				<div className={styles.whiteTr}>{text}</div>
			)
		}
	}, {
		title: '启动用户',
		dataIndex: 'process_user',
		key: 'process_user',
		width: '12%',
		render: (text) => {
			return (
				<div className={styles.whiteTr}>{text}</div>
			)
		}
	}, {
		title: '启动参数',
		dataIndex: 'process_param',
		key: 'process_param',
		width: '12%',
		render: (text) => {
			if (!text) return null;
			return (
				<Tooltip placement="topLeft" title={text} arrowPointAtCenter><div className={styles.whiteTr}>{text}</div></Tooltip>
			)
		}
	}, {
		title: '路径',
		dataIndex: 'process_url',
		key: 'process_url',
		width: '20%',
		render: (text) => {
			if (!text) return null;
			return (
				<Tooltip placement="topLeft" title={text} arrowPointAtCenter><div className={styles.whiteTr}>{text}</div></Tooltip>
			)
		}
	}, {
		title: '端口号',
		dataIndex: 'process_port',
		key: 'process_port',
		width: '5%',
	}];
	return (
		<Modal {...ModalList}>
		   <Table columns={columns_one} pagination={pagelist} loading={Alarmshowloading} dataSource={AlarmShowMsg} />
        </Modal>
	)
}


export default Detaishowmodal