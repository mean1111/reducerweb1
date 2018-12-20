import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
    
    static defaultProps={
    };

    render() {
        return (
            <div>
                <Counter></Counter>
            </div>
        );
    }
}

export default App;