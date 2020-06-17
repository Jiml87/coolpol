import { createStore } from 'redux'
import appReucer from './Reducer'

const storeCreator = () => {
  const store = createStore(appReucer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store
}
export default storeCreator
