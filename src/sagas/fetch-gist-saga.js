import {takeEvery, put} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {singleGist} from '../api.endpoints';

export default function * () {
    yield takeEvery(`REQUEST_FETCH_GIST`, handleFetchQuestion);
}

function* handleFetchQuestion({gist_id}) {
    const raw = yield fetch(singleGist(gist_id));
    const json = yield raw.json();
    const gist = json.items[0];
    yield put({
        type: `FETCHED_GIST`,
        gist
    });

}