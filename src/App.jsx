import './App.css';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import {countReducer} from './redusers/ReduxCountReduser';
import {authReducer} from './redusers/ReduxAuthReducer';
import Counter from './components/Counter';

function App() {
  const rootReduser = combineReducers({
    count: countReducer,
    auth: authReducer

  })
  const store = createStore(rootReduser);
  return(
    <div className='main'>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  ) 
}

export default App;
