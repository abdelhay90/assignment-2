import {takeEvery, put} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {gistForks} from '../api.endpoints';

export default function * () {
    yield takeEvery(`REQUEST_FETCH_FORKS`, handleFetchQuestion);
}

function* handleFetchQuestion({gist_id}) {
    const raw = yield fetch(gistForks(gist_id));
    const forks = yield raw.json();
    yield put({
        type: `FETCHED_FORKS`,
        forks
    });

}