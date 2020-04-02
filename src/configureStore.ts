import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import redducers from './modules';

export default createStore(redducers, applyMiddleware(thunk));
