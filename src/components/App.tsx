import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import './App.css';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function; //brings Thunk into type
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false}
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false})
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos()
        this.setState({ fetching: true });
    }

    onTodoClick = (id: number) => {
        this.props.deleteTodo(id);
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
        });
    }

    render() {
        const { fetching } = this.state
        return <div className="center-content">
            <button className="todo-btn" onClick={this.onButtonClick}>Fetch A List of Todos</button>
            <br/>{fetching ? 'Loading...' : null}
            <div className="list-items">{this.renderList()}</div>
        </div>
    }
}

//Destructure this because only state is ever passed in:
/*const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {
        todos
    };
}*/

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
    return {
        todos: state.todos
    };
}

export const App = connect(mapStateToProps, 
    {
        fetchTodos,
        deleteTodo
    })(_App)