import React from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import { HeaderPlaceholder, MobileHeaderPlaceholder, menuItems } from '../App';
import { EmojiFrownFill } from 'react-bootstrap-icons';

const Content = () => (
    <div className='d-flex justify-content-center'>
        <div className="card" style={{ marginTop: '20rem' }}>
            <div className="card-body d-block text-center in-development-icon">
                <div>Page in development, sorry.</div>
                <EmojiFrownFill className='mt-3' size={34} />
            </div>
        </div>
    </div >
);

function PageInDevelopment() {
    return (
        <>
            <title>Page In Development</title>
            <div className="container-fluid h-100">
                <div className="row justify-content-md-center ">
                    <div className="col-lg-3 px-0">
                        <Sidebar heading={HeaderPlaceholder()}
                            mobileHeading={MobileHeaderPlaceholder()}
                            menuItems={menuItems} className='pt-4' />
                    </div>

                    <div className='col-lg-8 align-self-center py-3'>
                        <Content />
                    </div>
                    <div className="col-lg-1 align-self-center" />
                </div>
            </div>
        </>
    );
}

export default PageInDevelopment;
