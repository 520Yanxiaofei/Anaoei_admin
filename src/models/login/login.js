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
	effects: {
		/*******************************************/
		/*登陆API*/
		/*******************************************/

		* Userlogin({
			payload
		}, {
			call,
			put
		}) {

			const {
				data
			} = yield call(Userlogin, payload);
			console.log(data)

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