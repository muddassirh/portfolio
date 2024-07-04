import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <head>
            <title>
                {headTitle ? headTitle : "Xolio - Creative Agency HTML5 Template"}
            </title>
        </head>
    );
}

export default PageHead;
