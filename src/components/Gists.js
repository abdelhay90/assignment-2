import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../css/GistsList.css'
import GistsList from './GistsList';
import Search from './Search';

class Gists extends Component {
    render() {
        return (
            <div className="gists">
                <div className="search-bar">
                    <Search/>
                </div>
                <GistsList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

export default connect(
    mapStateToProps,
)(Gists);
