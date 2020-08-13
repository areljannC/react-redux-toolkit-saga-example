import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware(), sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware
})

sagaMiddleware.run(rootSaga)

export default store