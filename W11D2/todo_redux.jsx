import ReactDOM from 'react-dom';
import React from 'react';
import configStore from './frontend/store/store';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_action'
import { receiveSteps, receiveStep, removeStep} from './frontend/actions/step_actions'
import App from "./frontend/components/app"
import Root from "./frontend/components/root";
import allTodos from "./frontend/reducers/selectors";

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

  const root = document.getElementById("root")

  ReactDOM.render(<Root store={store} />, root)

});