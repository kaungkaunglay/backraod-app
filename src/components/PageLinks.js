import { pageLinks } from '../data'
import React from 'react';
import * as child_process from "child_process";
import PageLink from "./PageLink";

function PageLinks({ parentClass, itemClass }) {
    return (
        <ul className={parentClass} id={parentClass}>
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} link={link} itemClass={itemClass}/>
                )
            })}


        </ul>
    );
}

export default PageLinks;
