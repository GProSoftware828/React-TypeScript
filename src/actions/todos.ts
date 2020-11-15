import axios from 'axios';
//import 'redux'; //cmd click to bring up type def file
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

//Dispatch type from redux type file:
/*export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T
}*/

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    //tough with TS, study type def files for dispatch:
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}