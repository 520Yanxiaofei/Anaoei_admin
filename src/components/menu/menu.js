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
import styles from './menu.less';

const SubMenu = Menu.SubMenu;

const Menulist = React.createClass({
  getInitialState() {

    return {
      theme: 'dark',
      current: '1',
      collapse: true
    };
  },
  handleClick(e) {

    this.setState({
      current: e.key,
    });
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  componentDidMount: function() {
    switch (this.props.localtion) {
      case '/':
        return this.setState({
          current: '1'
        })
      case '/situation':
        return this.setState({
          current: '1'
        })
      case '/category':
        return this.setState({
          current: '2'
        });
      case '/article':
        return this.setState({
          current: '3'
        });
      case '/board':
        return this.setState({
          current: '4'
        });
      case '/userlist':
        return this.setState({
          current: '5'
        });
      case '/comment':
        return this.setState({
          current: '6'
        });
      case '/system':
        return this.setState({
          current: '7'
        });
    }
  },
  componentWillReceiveProps: function(nextProps) {
    let localPath = nextProps.localtion;
    let localtext = localPath.substring(0, 12)
    if (localtext === '/managedetai') {
      this.setState({
        current: '2'
      });
    }
    switch (nextProps.localtion) {
      case '/':
        return this.setState({
          current: '1'
        })
      case '/rules/2':
        return this.setState({
          current: '5'
        });
        // case '/alarm':return this.setState({current:'3'})
        // case '/system':return this.setState({current:'4'})
    }
  },
  render() {
    const collapse = this.state.collapse;

    return (
      <div className={collapse ? styles.menuauto : styles.menuAuto}>
          <div className={styles.headerLogo}>
             <h4></h4>
             <h2>Anaoei博客</h2>
             <span>后台管理系统Beta1.0</span>
          </div>
        <Menu 
          className={styles.menuleft} 
          theme={this.state.theme}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="inline">
             <Menu.Item key="1"><Link to="/" ><Icon type="pie-chart" />博客统计</Link></Menu.Item>
             <Menu.Item key="2"><Link to="/category"><Icon type="copy" />分类管理</Link></Menu.Item>
             <Menu.Item key="3"><Link to="/article"><Icon type="bars" />文章列表</Link></Menu.Item>
             <Menu.Item key="4"><Link to="/board"><Icon type="picture" />图片广告</Link></Menu.Item>
             <Menu.Item key="5"><Link to="/userlist"><Icon type="team" />用户管理</Link></Menu.Item>
             <Menu.Item key="6"><Link to="/comment"><Icon type="message" />评论留言</Link></Menu.Item>
             <Menu.Item key="8"><Link to="/system"><Icon type="layout" />系统设置</Link></Menu.Item>
        </Menu>
         {/* <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>*/}
			  <BackTop />
        </div>
    )
  }
});



Menulist.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default Menulist;