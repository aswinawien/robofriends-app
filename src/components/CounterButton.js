import React from "react";

class CounterButton extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    updateCounter = () => {
        this.setState(state => {
            return {
                count: state.count + 1
            }
        })
    }
    render() {
        console.log('CounterButton')
        return (
            <button color={this.props.color} onClick={this.updateCounter}> Click : {this.state.count}</button>
        )
    }

}

export default CounterButton