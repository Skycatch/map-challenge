import { createStore, applyMiddleware } from 'redux'
import { locationsReducer } from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(locationsReducer, applyMiddleware(thunk))
