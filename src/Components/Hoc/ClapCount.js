import React, { Component } from 'react'
import UpdateComponet from './ClapHoc';
import clap from '../../logo/clap.png'


 class ClapCount extends Component {


    render() {
        console.log(this.props);
        return (
            <div>
                <div style={{cursor:"pointer"}} onClick={this.props.incrementCount}><img style={{width: "20px",height: "20px"}} alt='' src={clap} /> <span>&nbsp;&nbsp; {this.props.count} claps</span> </div>
            </div>
        )
    }
}

export default UpdateComponet(ClapCount)