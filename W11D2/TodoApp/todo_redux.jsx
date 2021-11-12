import ReactDOM from 'react-dom';
import React from 'react';
import configStore from './frontend/store/store';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos } from './frontend/actions/todo_action'
import { receiveSteps, receiveStep, removeStep} from './frontend/actions/step_actions'
import Root from "./frontend/components/root";
import allTodos from "./frontend/reducers/selectors";
import * as TodoApiUtil from "./frontend/util/todo_api_util"



document.addEventListener("DOMContentLoaded", () => {
  const store = configStore();
  window.store = store
  window.receiveTodos = receiveTodos
  window.receiveTodo = receiveTodo
  window.removeTodo = removeTodo
  window.receiveSteps = receiveSteps
  window.receiveStep = receiveStep
  window.removeStep = removeStep
  window.allTodos = allTodos
  window.fetchTodos = fetchTodos
  window.collect = TodoApiUtil.fetchTodos
  

  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)

});