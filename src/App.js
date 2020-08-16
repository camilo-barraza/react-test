
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import './App.css';
import { TestRedux } from './Test';
import Test2 from './Test2';

const sagaMiddleware = createSagaMiddleware()
const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware, sagaMiddleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, { probando: 'hey' }, composedEnhancers)

sagaMiddleware.run(mySaga)

function App() {
  return (
    < Provider store={store} >
      <div className="App">
        <TestRedux testing='mefir'></TestRedux>
        <div style={{marginTop:'100px'}}>
          <Test2 testing='mefir2'></Test2>
        </div>
      </div>
    </Provider >
  );
}

export default App;
