import React from 'react';

const GistFile = ({file}) => {
    return (
        <div key={file.filename}>
            <a href={file.raw_url} target="_blank">{file.filename}</a>
            <code>{file.language ? file.language : file.type}</code>
        </div>
    );
};

export default GistFile;
