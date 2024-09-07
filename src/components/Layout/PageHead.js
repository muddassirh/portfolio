import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <head>
            <title>
                {headTitle ? headTitle : "Genxsmedia - Fullstack Design and Development Agency"}
            </title>
        </head>
    );
}

export default PageHead;
