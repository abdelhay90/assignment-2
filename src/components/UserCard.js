import React from 'react';
import '../css/UserCard.css'

const UserCard = ({user}) => {
    return (
        <div className="user-card">
            <img src={user.avatar_url} alt="Avatar"/>
            <div className="container">
                <h4><b>{user.name ? user.name : user.login}</b></h4>
                <p>{user.bio}</p>
            </div>
        </div>
    );

};
export default UserCard;
