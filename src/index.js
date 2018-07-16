import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import getStore from './getStore';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const store = getStore(history);

const render = (AppComp) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppComp/>
            </ConnectedRouter>
        </Provider>
        , document.getElementById("root"));
};

store.subscribe(() => {
    store.getState();

});

const fetchDataForLocation = (loc) => {
    /*if (loc.pathname === '/') {
        store.dispatch({type: `REQUEST_FETCH_GISTS`, userName: ''})
    }*/
    /*if (loc.pathname.includes(`gists`)) {
        store.dispatch({type: `REQUEST_FETCH_GIST`, question_id: loc.pathname.split('/')[2]});
    }*/
    store.getState();
    render(App);
};
fetchDataForLocation(history.location);

history.listen(fetchDataForLocation);

registerServiceWorker();
