import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import Gists from './components/Gists';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Route exact path='/' render={() => <Home/>}/>
            <Route exact path='/search' render={() => <Gists/>}/>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    };
};
export default connect(mapStateToProps)(App);
