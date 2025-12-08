import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor: Component is being created");
    }

    // Runs Once after the Component is Mounted
    componentDidMount() {
        console.log("componentDidMount: Component mounted");
    }

    // Runs When state and Props change
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("componentDidUpdate: Count changed to", this.state.count);
        }
    }

    // Runs When Component is remove
    componentWillUnmount() {
        console.log("componentWillUnmount: Component will unmount");
    }

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h2>Count{this.state.count}</h2>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increase
                </button>
            </div>

        )
    }
}
