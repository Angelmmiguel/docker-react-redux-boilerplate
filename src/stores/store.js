// Initialize the global store
import { createStore } from 'redux'
import Reducer from '../reducers/reducer';

// Return the store
export default createStore(Reducer);
