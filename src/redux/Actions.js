import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, SEARCH_TASK, TOGGLE_TODO } from "./Types";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {text}
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const markComplete = (id) => ({
    type: MARK_COMPLETED,
    payload: {id}
});

export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id}
});

export const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: {filter}
});

export const markAllComplete = () => ({
    type: MARK_ALL_COMPLETED,
});

export const searchTask = (searchTerm) => ({
    type: SEARCH_TASK,
    payload: {searchTerm}
});