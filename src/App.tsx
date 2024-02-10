import React from 'react';
import './App.css';
import { Form } from './shared/Form';
import { ToDoList } from './shared/ToDoList';

import { Provider, } from 'react-redux';
import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './shared/store/store';

const store = legacy_createStore(rootReducer, composeWithDevTools())


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
