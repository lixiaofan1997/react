import {createStore} from 'redux';
import reducer from './reducer';
let store=createStore(reducer);
export default store;//声明引进；