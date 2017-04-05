import React, {
	Component,
	PropTypes
} from 'react';
import {
	Line
} from 'rc-progress';

import styles from './managementPercent.less'
let tm;
let dm;
export default React.createClass({
	getInitialState() {
		return {
			percent: 0,
			Linecolor: '',
			time: 0,
			timeText: {},
			endTime: ''
		};
	},
	componentDidMount() {
		let status = this.props.perText; /*请求进度情况*/
		let date = new Date();
		if (status == '') {
			if (this.props.percentValue == 0) {
				this.setState({
					time: 0,
					endTime: new Date()
				})
			}
			if (this.props.percenNum == 'a' && this.props.percentValue !== 0) {
				let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + this.props.percentValue, date.getSeconds());
				this.setState({
					time: 1000 * this.props.percentValue,
					endTime: newDate
				})
			}
			if (this.props.percenNum == 'b' && this.props.percentValue !== 0) {
				let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + this.props.percentValue, date.getMinutes(), date.getSeconds());
				this.setState({
					time: 1000 * this.props.percentValue * 60,
					endTime: newDate
				})
			}
		}
		this.increase();
		this.countdown();

	},
	componentWillUnmount: function() {
		clearTimeout(tm);
		clearTimeout(dm)
	},
	/*提取进度*/
	increase() {
		let percent = this.state.percent + 1;
		if (percent > 100) {
			percent = 100;
			clearTimeout(tm);
			return;

		}
		if (percent == 100) {
			this.props.disabledonclick()
		}
		this.setState({
			percent
		});
		tm = setTimeout(this.increase, this.state.time);
	},
	/*提取剩余时间*/
	countdown() {
		if (this.state.endTime != '') {
			let now = new Date();
			let m = (this.state.endTime - now) / 1000;
			let day = parseInt(m / 24 / 3600);
			let hours = parseInt((m % (3600 * 24)) / 3600);
			let minutes = parseInt((m % 3600) / 60);
			let seconds = parseInt(m % 60);
			// if (m < 0) {
			// 	console.log(0)
			// }
			this.setState({
				timeText: {
					day: day,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				}
			});
		}

		dm = setTimeout(this.countdown, 1000);
	},
	// restart() {
	// 	clearTimeout(tm);
	// 	clearTimeout(dm);
	// 	this.setState({
	// 		percent: 0
	// 	}, () => {
	// 		this.increase();
	// 	});
	// },
	render() {
		let lineStyles;
		if (this.state.percent >= 90) {
			lineStyles = {
				width: `${this.state.percent}%`,
				backgroundImage: 'repeating-linear-gradient(-45deg, #73f795, #73f795 30px, #46d66b 30px, #46d66b 60px)'
			}
		} else {
			lineStyles = {
				width: `${this.state.percent}%`,
				backgroundImage: 'repeating-linear-gradient(-45deg, #81b2fd, #81b2fd 30px, #66a0f7 30px, #66a0f7 60px)'
			}
		}

		return (
			<div>
                <div className={styles.LineBoxBorder}>
                   <div className={styles.LineBackground} style={lineStyles}>{this.state.percent!=0?this.state.percent+'%':null}</div>
                </div>
				{
				this.state.percent==100?
				<div>
				  <h2 style={{color:'#18cf4e'}}>提取成功！</h2>
				</div>
				:
				<div className={styles.TimedayFont}>
				 <h2>
				    提取时长：剩余
				    <strong>{Math.abs(this.state.timeText.day) || 0}</strong>天
				    <strong>{Math.abs(this.state.timeText.hours) || 0}</strong>时
				    <strong>{Math.abs(this.state.timeText.minutes) || 0}</strong>分
				    <strong>{Math.abs(this.state.timeText.seconds) || 0}</strong>秒
				 </h2>
				</div>
				}
			</div>
		)
	},
})