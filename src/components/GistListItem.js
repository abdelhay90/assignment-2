import React from 'react';

const GistListItem = (gist) => {
    return <li>
        <h3>{gist.description ? gist.description : gist.url}</h3>
        <div>
            <span>{`Created at: ${new Date(gist.created_at).toDateString()}`}</span>
            <div className="gist-files">
                <span>Files:</span>
                {Object.values(gist.files).map((item) => (<div key={item.filename}>
                    <a href={item.raw_url} target="_blank">{item.filename}</a>
                    <code>{item.language ? item.language : item.type}</code>
                </div>))}
            </div>
            {
                gist.forks.length > 0 ?
                    <div className="gist-forks">
                        <span>Forks:</span>
                        {gist.forks.map((item) => (<div className={"fork-user"} key={item.id}>
                            <a href={item.owner.url} target="_blank">
                                <img src={item.owner.avatar_url} alt={item.owner.login}/>
                            </a>
                        </div>))}
                    </div>
                    :
                    <div>No Forks</div>
            }
        </div>
    </li>
};

export default GistListItem;