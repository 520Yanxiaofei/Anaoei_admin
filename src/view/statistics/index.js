import React from 'react';
import {
	connect
} from 'dva';
import QueueAnim from 'rc-queue-anim';
import {
	Spin,
	Icon,
	Col,
	Row,
	Table
} from 'antd';
import styles from './index.less';
import StatisticsLine from '../../components/echart/statisticsLine';
import StatisticsCountup from '../../components/countup/countup';
const Statistics = React.createClass({
	/*全局钩子cookie是否登录*/
	componentWillReceiveProps() {
		window.scrollTo(0, 0)
			// this.props.dispatch({
			//   type: 'LoginUser/UserIf',
			// })
	},
	/*意外清除cookie是否登录*/
	componentDidMount() {
		this.props.dispatch({
			type: 'LoginUser/Userlogin'
		})
	},
	render() {
		const dataSource = [{
			key: '1',
			name: '胡彦斌',
			age: '后台开发',
			address: '西湖区湖底公园1号',
			time: '2017-03-29'
		}, {
			key: '2',
			name: '胡彦祖',
			age: '自由职业者',
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
			<div className={styles.statiBox}>
			  <QueueAnim type="top">
			    <div  key="1"><StatisticsCountup/></div>
				  <div className={styles.statiLine} key="2">
	               <h2>统计图</h2>
				   <StatisticsLine/>
				  </div>
				  <div key="3" className={styles.statiLine}>
	               <h2>最新投稿</h2>
				   <Table dataSource={dataSource} columns={columns} />
				  </div>
			  </QueueAnim>
			</div>
		)
	}
});

function mapStateToProps() {
	return {};
}

function mapDispatchToProps() {
	return {

	};
}

/*建立数据关联关系*/
// export default Statistics;
export default connect()(Statistics)