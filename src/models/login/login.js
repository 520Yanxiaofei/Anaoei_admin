import {
	Userlogin,
}
from '../../api/LoginUser'
import {
	routerRedux
} from 'dva/router';
import cookie from 'react-cookie';
import {
	message,
} from 'antd';

export default {
	namespace: 'LoginUser',
	state: {
		loading: false,
		loginData: [],
		UpdateLoading: false,
		cookieuser: []
	},
	/*判断是否cookie*/
	subscriptions: {
		setup({
			dispatch,
			history,
		}) {
			// history.listen(({
			// 	pathname
			// }) => {
			// 	const cookieuser = cookie.load('userdata');
			// 	if (pathname == '/') {
			// 		dispatch({
			// 			type: 'UserIf'
			// 		});
			// 	}
			// })
		}
	},
	effects: { * UserIf({
			payload
		}, {
			call,
			put
		}) {
			const cookieuser = cookie.load('userdata');
			if (!cookieuser) {
				yield put(routerRedux.push('/login'));
				message.success('请先重新登录！')
			}
		},
		/*******************************************/
		/*登陆API*/
		/*******************************************/
		* Userlogin({
			payload
		}, {
			call,
			put
		}) {
			yield put({
				type: 'showloading',
				payload: {
					loading: true
				}
			})
			const {
				data
			} = yield call(Userlogin, payload);
			if (data && data.code == 200) {
				message.success(data.message)
				yield put({
					type: 'showloading',
					payload: {
						loading: false
					}
				})
				cookie.save('userdata', payload, {
					path: '/'
				})
				yield put(routerRedux.push('/'))
			} else {
				message.success(data.message)
				yield put({
					type: 'showloading',
					payload: {
						loading: false
					}
				})
			}

		},
		/*退出*/
		* Userout({
			payload
		}, {
			put,
			call
		}) {
			// const data = yield call(Userout, payload);
			/*请求返回200*/
			// if (data) {
			// 	message.success(data.data.msg)
			// }
			message.success('退出成功')
				/*强制清除cookie,跳转登录界面*/
			cookie.remove('userdata');
			yield put(routerRedux.push('/login'));
		},
		/*修改密码*/
		* PasswordUte({
			payload
		}, {
			call,
			put
		}) {
			yield put({
				type: 'showloading',
				payload: {
					UpdateLoading: true
				}
			})
			const {
				data
			} = yield call(Userpwd, payload);
			if (data && data.code == 200) {
				yield put({
					type: 'showloading',
					payload: {
						UpdateLoading: false
					}
				});
				/*成功调转*/
				message.success(data.msg)
				cookie.remove('userdata');
				yield put(routerRedux.push('/login'));
			}
			if (data.code !== 200) {
				yield put({
					type: 'showloading',
					payload: {
						UpdateLoading: false
					}
				});
				message.success(data.msg)
			}
		},
	},
	reducers: {
		showloading(state, action) {
			return {
				...state,
				...action.payload
			}
		},
		querySuccess(state, action) {
			return {...state,
				...action.payload,
			};
		}
	},
};