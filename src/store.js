import { createStore } from 'redux';
import rootReducer from './components/redux/reducer/main';

const Store = createStore(
    rootReducer
)

export default Store;