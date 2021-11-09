import ReactDOM from 'react-dom';
import React from 'react';
import configStore from './frontend/store/store';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_action'
import { receiveSteps, receiveStep, removeStep} from './frontend/actions/step_actions'

document.addEventListener("DOMContentLoaded", () => {
  const store = configStore();
  window.store = store
  window.receiveTodos = receiveTodos
  window.receiveTodo = receiveTodo
  window.removeTodo = removeTodo
  window.receiveSteps = receiveSteps
  window.receiveStep = receiveStep
  window.removeStep = removeStep

 
});