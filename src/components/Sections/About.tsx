import { Section } from "../Section";
import { MapPin } from "react-feather";
import { Mail, Phone } from "react-feather";
import { Telegram, Github, Linkedin, Twitter, CcCircleFill } from "react-bootstrap-icons";
import { Image } from 'react-bootstrap';
import HhIcon from "../../icons/HeadHunter";

export interface AboutType {
    title: string,
    firstName: string,
    lastName: string,
    jobTitle: string,
    experience: string,
    mobile: string,
    email: string,
    location: string,
}

export interface SocialNetworksType {
    github: string;
    twitter: string;
    linkedin: string;
    telegram: string;
    hh: string;
}

export function About({ about, socialNetworks }: { about: AboutType, socialNetworks: SocialNetworksType }) {
    const location = <div className="d-flex align-items-center">
        <div className="d-flex align-items-center"><MapPin size={14} /></div>
        <span className="ps-1">{about.location}</span>
    </div>;

    const email = <div className="d-flex align-items-center">
        <div className="d-flex align-items-center"><Mail size={14} /></div>
        <a className="ps-1" href={`mailto:${about.email}`}>{about.email}</a>
    </div>;

    const mobile = <div className="d-flex align-items-center">
        <div className="d-flex align-items-center"><Phone size={14} /></div>
        <div className="ps-1" >{about.mobile}</div>
    </div>;
    const iconSize = '1.5rem';
    return (
        <Section>
            <Section.Title>
                <span className='whitespace-nowrap overflow-hidden overflow-ellipsis'>
                    {about.title}
                </span>
            </Section.Title>

            <Section.Content>
                <div className="d-flex top-0 end-0 position-absolute translate-0-60 me-3">
                    {socialNetworks.linkedin !== '' &&
                        <a href={socialNetworks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="bg-white" size={iconSize} />
                        </a>}
                    {socialNetworks.twitter !== '' &&
                        <a href={socialNetworks.twitter} target="_blank" rel="noopener noreferrer" className="ms-2">
                            <Twitter className="bg-white" size={iconSize} />
                        </a>}
                    {socialNetworks.github !== '' &&
                        <a href={socialNetworks.github} target="_blank" rel="noopener noreferrer" className="ms-2">
                            <Github className="bg-white" size={iconSize} />
                        </a>}
                    {socialNetworks.telegram !== '' &&
                        <a href={socialNetworks.telegram} target="_blank" rel="noopener noreferrer" className="ms-2">
                            <Telegram className="bg-white" size={iconSize} />
                        </a>
                    }
                    {socialNetworks.hh !== '' &&
                        <a href={socialNetworks.hh} target="_blank" rel="noopener noreferrer" className="ms-2">
                            <HhIcon className="bg-white" size={iconSize} />
                        </a>
                    }
                </div>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <div className="d-block">
                            <div className="fs-4 fw-bold">
                                {about.jobTitle}
                            </div>
                            <div>
                                {about.experience}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto mt-2" style={{ fontSize: '.75rem' }}>
                        <div>
                            {mobile}
                        </div>
                        <div className="pt-2">
                            {email}
                        </div>
                        <div className="pt-2">
                            {location}
                        </div>
                    </div>
                </div>

            </Section.Content>
        </Section>
    );
}