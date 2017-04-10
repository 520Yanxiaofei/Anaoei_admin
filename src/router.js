import React, {
	PropTypes
} from 'react';
import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Redirect
} from 'react-router';
/*入口*/
import Index from './view/Index';
import Statistics from './view/statistics';
import Article from './view/article/';
import Board from './view/board/';
import Category from './view/category/';
import Comment from './view/comment/';
import System from './view/system/';
import Userlist from './view/user/';
/*登录*/
import Login from './view/login/login'

export default function({
	history
}) {
	return (
		<Router history={history}>
	      {<Route path="/login" component={Login} />}
	      <Route path="/" component={Index}>
	           <IndexRoute component={Statistics} />
	           <Route path='/article' component={Article}/>
	           <Route path='/board' component={Board}/>
	           <Route path='/category' component={Category}/>
	           <Route path='/comment' component={Comment}/>
	           <Route path='/system' component={System}/>
	           <Route path='/userlist' component={Userlist}/>
	      </Route>
	      <Redirect from="*" to="/" />
    </Router>
	);
};