import React from 'react';
import ForkedUser from './ForkedUser';
import GistFile from './GistFile';

const GistListItem = (gist) => {
    return <li>
        <h3>{gist.description ? gist.description : gist.url}</h3>
        <div>
            <span>{`Created at: ${new Date(gist.created_at).toDateString()}`}</span>
            <div className="gist-files">
                <span>Files:</span>
                {Object.values(gist.files).map((item) => (<GistFile key={item.filename} file={item}/>))}
            </div>
            {
                gist.forks.length > 0 ?
                    <div className="gist-forks">
                        <span>Forks:</span>
                        {gist.forks.map((item) => (<ForkedUser key={item.id} fork={item}/>))}
                    </div>
                    :
                    <div>No Forks</div>
            }
        </div>
    </li>
};

export default GistListItem;