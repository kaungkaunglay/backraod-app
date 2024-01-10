import React from 'react';

function PageLink({link, itemClass}) {
    return (
        <li>
            <a href={link.href} target="_blank" className={itemClass}
            ><i className={link.icon}></i
            ></a>
        </li>
    );
}

export default PageLink;