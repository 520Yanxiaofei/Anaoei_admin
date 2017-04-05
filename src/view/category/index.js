import React from 'react';
import {
	connect
} from 'dva';
import {
	Spin,
	Icon,
	Button,
	Col,
	Row,
	Table,
	Tag
} from 'antd';
import styles from './index.less';
import QueueAnim from 'rc-queue-anim';
const ButtonGroup = Button.Group;

const Category = React.createClass({
	componentWillReceiveProps() {},
	componentDidMount() {},
	render() {
		const dataSource = [{
			key: '1',
			name: '胡彦斌',
			age: '后台开发',
			cate: 'vue技术',
			address: '西湖区湖底公园1号',
			time: '2017-03-29'
		}, {
			key: '2',
			name: '胡彦祖',
			age: '自由职业者',
			cate: 'angularjs',
			address: '西湖区湖底公园1号',
			time: '2017-03-29'
		}];

		const columns = [{
			title: '用户名',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: '角色',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: '技术分类',
			dataIndex: 'cate',
			key: 'cate',
			render: (text) => {
				return (<Tag color="orange">text</Tag>)
			}
		}, {
			title: '文章标题',
			dataIndex: 'address',
			key: 'address',
		}, {
			title: '投稿日期',
			dataIndex: 'time',
			key: 'time',
		}, {
			title: '操作',
			render: () => {
				return (<div>查看</div>)
			}
		}];
		return (
			<div className={styles.ContentTop}>
			<Row className={styles.ContentTitle}>
              <Col span={7}> <h2>分类管理</h2></Col>
               <Col span={5} offset={12}>
				     <ButtonGroup>
				      <Button type="primary" size='large'>
				       <Icon type="file-text" />新增分类
				      </Button>
				      <Button type="primary" size='large'>
				        <Icon type="delete" />删除
				      </Button>
				    </ButtonGroup>
              </Col>
			</Row>
			<QueueAnim type="bottom">
			<div key="1" className={styles.ContentBox}>
			   <Table dataSource={dataSource} columns={columns} />
			</div>
			</QueueAnim>
			</div>
		)
	}
});

export default Category;