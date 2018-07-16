import React from 'react';
import {connect} from 'react-redux';
import GistListItem from './GistListItem';
import UserCard from './UserCard';

const GistQuestionList = ({gists}) => {

    return (<div className="gists-list-container">
        {
            gists.user &&
            <UserCard user={gists.user}/>
        }
        {gists.gists && gists.gists.length > 0 ?
            <ul className="gists-list">
                {gists.gists.map(gist => <GistListItem key={gist.id} {...gist}/>)}
            </ul>
            :
            <div>
                No gists found
            </div>
        }
    </div>);
};

const mapStateToProps = ({gists}) => ({
    gists
});

export default connect(mapStateToProps)(GistQuestionList);