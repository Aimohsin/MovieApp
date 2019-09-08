import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './reducer/rootreducer';

const store = createStore(rootreducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));