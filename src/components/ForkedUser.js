import React from 'react';

const ForkedUser = ({fork}) => {
    return (
            <div className={"fork-user"} >
                <a href={fork.owner.url} target="_blank">
                    <img src={fork.owner.avatar_url} alt={fork.owner.login}/>
                </a>
            </div>
    );
};

export default ForkedUser;
