import React, {
	Component,
	PropTypes
} from 'react';

const StatisticsLine = React.createClass({
	componentDidMount: function() {
		this.showChart(this.props)
	},
	componentWillReceiveProps: function(nextProps) {
		this.showChart(this.props)
	},
	showChart: function(dataSet) {
		// const {
		// 	loading,
		// 	Data
		// } = dataSet
		let myChart = echarts.init(document.getElementById('LineMain'));
		// if (loading) {
		// 	myChart.showLoading({
		// 		text: '数据获取中',
		// 		color: '#08beff',
		// 		effect: 'whirling'
		// 	});
		// } else {
		// 	myChart.hideLoading();
		// }
		// let timeData = Data.time_line || [];
		// let numData = Data.data_line || [];
		let option = {
			title: {
				text: '访问统计量',
				subtext: '纯属虚构',
				show: false
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				data: ['文章浏览量', '用户评论量', '广告点击量'],
				top: '2%',
				left: '0%'
			},
			grid: {
				left: '3%',
				right: '3%',
				bottom: '7%',
				show: false
			},
			toolbox: {

				show: true,
				feature: {
					dataView: {
						show: false,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: false,
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLine: {
					show: false
				},

			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					show: false
				},
				splitLine: {
					// show: false
					lineStyle: {
						color: '#fbe4e2'
					}
				}
			}],
			series: [{
				name: '文章浏览量',
				type: 'bar',
				data: [2.0, 4.9, 7.0, 123.2, 25.6, 76.7, 115.6, 112.2, 32.6, 20.0, 6.4, 3.3],
				markPoint: {
					data: [{
						type: 'max',
						name: '最大值'
					}, {
						type: 'min',
						name: '最小值'
					}]
				},
				barWidth: '10%',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#ed4e2d'
					}
				}

			}, {
				name: '用户评论量',
				type: 'bar',
				data: [22.6, 65.9, 9.0, 26.4, 128.7, 70.7, 125.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				markPoint: {
					data: [{
						name: '年最高',
						value: 182.2,
						xAxis: 7,
						yAxis: 183
					}, {
						name: '年最低',
						value: 2.3,
						xAxis: 11,
						yAxis: 3
					}]
				},
				barWidth: '10%',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#536d8e'
					}
				}
			}, {
				name: '广告点击量',
				type: 'bar',
				data: [83.6, 2.9, 3.0, 16.4, 28.7, 123, 25.6, 82.2, 38.7, 7.8, 8.0, 72.3],
				markPoint: {
					data: [{
						name: '年最高',
						value: 123,
						xAxis: 7,
						yAxis: 123
					}, {
						name: '年最低',
						value: 72,
						xAxis: 11,
						yAxis: 72
					}]
				},
				barWidth: '10%',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#4c81c3'
					}
				}
			}]
		};


		myChart.setOption(option);
	},
	render: function() {
		return (
			<div id="LineMain" style={{ height:300}}></div>
		)
	}
})

export default StatisticsLine