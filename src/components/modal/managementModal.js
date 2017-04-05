import React, {
	Component,
	PropTypes
} from 'react';
import {
	Modal,
	Button,
	Icon,
	Card,
	Col,
	Row
} from 'antd';
import styles from '../layout.less'

const Agentmodal = ({
	visible,
	loading,
	onCancel,
	// form: {
	// 	getFieldDecorator,
	// 	validateFields,
	// 	getFieldsValue,
	// },
}) => {
	function handleOk() {

	};

	const ModalList = {
		visible: visible,
		title: "AGENT下载",
		okText: "确定",
		cancelText: "Agent下载",
		width: 600,
		footer: false,
		onCancel
	};
	return (
		<Modal {...ModalList} >
		   <Row type="flex" justify="space-around" align="middle">
		      <Col span={11}>
		      <Card title="LINUX版" bordered={true}>
		        <div className={styles.ManageLinux}></div>
		         <Button className={styles.DownloadBtn} type="primary" size="large" loading={false} onClick={()=>window.location.href = 'download/linux.zip'}>
		          Download
		        </Button>
		      </Card>
		      </Col>
		      <Col span={11}>
		      <Card title="WINDOWS版" bordered={true}>
		       <div className={styles.ManageWindows}></div>
		       <Button className={styles.DownloadBtn} type="primary" size="large" loading={false} onClick={()=>window.location.href = 'download/windows.zip'}>
		          Download
		       </Button>
		      </Card>
		      </Col>
		    </Row>
        </Modal>
	)
}



Agentmodal.proptypes = {
	Agentmodal: PropTypes.isRequired,
	loading: PropTypes.any,
};

export default Agentmodal