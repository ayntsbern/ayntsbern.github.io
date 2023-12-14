import React from 'react';
import 'react-bootstrap';
import { Sidebar } from './Sidebar/Sidebar';
import { Resume, ResumeType } from './Resume/Resume';
import { HeaderPlaceholder, MobileHeaderPlaceholder, menuItems } from '../App';
import resumeData from '../data/resume.json';

function HomePage() {
    const resume: ResumeType = resumeData;

    const pageName = resume.basic.firstName + ' ' + resume.basic.lastName;

    return (
        <>
            <title>Home | Юлия Якушенкова</title>
            <div className="container-fluid h-100">
                <div className="row justify-content-md-center" >
                    <div className="col-lg-3 px-0">
                        <Sidebar heading={HeaderPlaceholder()}
                            mobileHeading={MobileHeaderPlaceholder()}
                            menuItems={menuItems} className='pt-4' />
                    </div>

                    <div className='col-lg-8 py-3'>
                        <div className='app-content h-100'>
                            <div className='d-flex h-100 w-100 p-3'>
                                <Resume resume={resume}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
