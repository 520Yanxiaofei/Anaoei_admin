import React, {
    Component,
    PropTypes
} from 'react';
import {
    Circle
} from 'rc-progress';/*圆形效果*/
import CountUp from 'react-countup';/*数字效果*/
import styles from './managementPercent.less'

export default React.createClass({
    getInitialState() {
        return {
            percent: 0,
        };
    },
    render() {
        return (
            <div className={styles.percentDetai}>
                <Circle percent={this.state.percent}  strokeWidth="10" trailWidth="10" strokeLinecap="square" trailColor="#eee" strokeColor={this.props.style}/>
                
            </div>
        )
    },
})