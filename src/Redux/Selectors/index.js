import createStor from 'redux'
import { appReucer } from './Reducer'

const storeCreator = () => {
  const store = createStor(appReucer)
  return store
}

export default storeCreator
