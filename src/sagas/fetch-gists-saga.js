import {put, takeEvery} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import {userGists, userData, gistForks} from '../api.endpoints';

export default function* () {
    yield takeEvery(`REQUEST_FETCH_GISTS`, handleFetchGists);
}

function* handleFetchGists({userName}) {
    let raw = yield fetch(userGists(userName));
    let gists = yield raw.json();
    for (let i = 0; i < gists.length; i++) {
        let item = yield fetch(gistForks(gists[i].id));
        gists[i]['forks'] = yield item.json();
    }
    let userDataRaw = yield fetch(userData(userName));
    let user = yield userDataRaw.json();
    yield put({
        type: `FETCHED_GISTS`,
        gists,
        user
    });
}