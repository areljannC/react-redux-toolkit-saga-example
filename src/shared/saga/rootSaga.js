import { all } from 'redux-saga/effects'
import { watchIncrementWinsAsyncSaga } from '../../features/stats'

export default function* rootSaga() {
  yield all([watchIncrementWinsAsyncSaga()])
} 