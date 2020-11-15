import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

interface AppProps {
    color?: string
}

interface AppState {
    counter: number
}

// const AppFn = (props: AppProps): JSX.Element => {
//     return <div>{props.color}</div>;
// }
/*
class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)

        this.state = { counter: 0 };
    }

    //state = { counter: 0 };

    increment = (): void => {
        this.setState({counter: this.state.counter + 1});
    }

    decrement = (): void => {
        this.setState({counter: this.state.counter -1 });
    }

    render() {
        const {counter} = this.state;
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <p>{counter}</p>
                <p>Hi there</p>
                <p>This is a prop: {this.props.color}</p>
            </div>
        )
    }
}
*/
/*ReactDOM.render(
    <App color="red" />,
    document.querySelector('#root')
);*/