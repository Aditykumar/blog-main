import React, { Component } from "react";

const UpdateComponet = ( OriginalComponents ) => {
    
    class NewComponent extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 counter:500
            }
        }
        
        incrementCount = () => {
            this.setState({
                counter:    this.state.counter+1
            })
        }
    


        render() {
            return <OriginalComponents count={this.state.counter} incrementCount={this.incrementCount} />
        }
    }

    return NewComponent;
}

export default UpdateComponet