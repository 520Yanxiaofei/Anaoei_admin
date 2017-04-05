import React, {
	PropTypes
} from 'react';
import {
	Link
} from 'react-router';
import {
	Menu,
	Icon,
	Switch,
	BackTop
} from 'antd';
import styles from './user.less';


const Userright = React.createClass({

	componentDidMount: function() {

	},
	componentWillReceiveProps: function(nextProps) {

	},
	render() {

		return (
			<div className={styles.userRight}>
              <div className={styles.userImg}><img src='img/loginuser.jpg'/></div>
              <h3>博主</h3>
              <p>前端开发</p>
              <p>anaoei@qq.com</p><br/>
              <p><span>进入前台</span></p>
               <p><span>退出系统</span></p>
              {/*<p><span>React</span><span>Vue</span><span>Angularjs</span><span>PHP</span><span>设计</span></p>*/}
            </div>
		)
	}
});



Userright.propTypes = {
	// routes: PropTypes.array.isRequired,
};

export default Userright;