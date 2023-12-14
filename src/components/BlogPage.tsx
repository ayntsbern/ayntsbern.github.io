import React, { useEffect, useState } from 'react';
import 'react-bootstrap';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Image } from 'react-bootstrap';
import { MenuItemsType, Sidebar } from './Sidebar/Sidebar';
import { Resume } from './Resume/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderPlaceholder, MobileHeaderPlaceholder, menuItems } from '../App';

function BlogPage() {
    const [text, setText] = useState('')
    useEffect(() => {
        const javaMd = require("../blog/Java.md");

        fetch(javaMd)
            .then(response => {
                return response.text()
            })
            .then(text => setText(text))
    }, [])


    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-md-center" >
                <div className="col-lg-3 px-0">
                    <Sidebar heading={HeaderPlaceholder()} mobileHeading={MobileHeaderPlaceholder()} menuItems={menuItems} className='pt-4' />
                </div>

                <div className='col-lg-8 py-3'>
                    <div className='app-content h-100'>
                        <div className='d-flex h-100 w-100 p-3'>
                            <div>
                                <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>{text}</Markdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}

export default BlogPage;
