import { takeEvery, put } from 'redux-saga/effects'
import { incrementWinsAsync, incrementWins } from './statsSlice'

function* incrementWinsSaga() {
  yield put(incrementWins())
}

export function* watchIncrementWinsAsyncSaga() {
  yield takeEvery(incrementWinsAsync.type, incrementWinsSaga)
}

