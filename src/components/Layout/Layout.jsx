import React, { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import MouseCursor from '../elements/MouseCursor';
import Breadcrumb from './Breadcrumb';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Header from './Header';
import PageHead from './PageHead';


const Layout = ({ 
    headerStyle, 
    footerStyle, 
    headTitle, 
    breadcrumbTitle, 
    children, 
    headercls, 
    nf3, 
    bShape, 
    breadcrumbCls, 
    blogSearch 
}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <PageHead headTitle={headTitle} />

            <MouseCursor />

            {!headerStyle && <Header scroll={scroll} headercls={headercls} />}
            {headerStyle === 1 && <Header scroll={scroll} headercls={headercls} />}

            <main>
                {breadcrumbTitle && (
                    <Breadcrumb
                        breadcrumbTitle={breadcrumbTitle}
                        bShape={bShape}
                        breadcrumbCls={breadcrumbCls}
                        blogSearch={blogSearch}
                    />
                )}
                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle === 1 && <Footer1 />}
            {footerStyle === 2 && <Footer2 nf3={nf3} />}

            <BackToTop />
        </>
    );
};

export default Layout;
