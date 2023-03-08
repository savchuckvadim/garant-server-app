import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './modules/redux/redux-store';
import App from './App'
import AppContainer from './App-Container';

export const startApp = (state, store) => {

  ReactDOM.render(
    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <AppContainer/>
      </Provider>
    </BrowserRouter >,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}

window.store = store
let state = store.getState()
startApp(state, store);
store.subscribe(() => {
  startApp(state, store);
})