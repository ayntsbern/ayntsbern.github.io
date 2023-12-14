import React from "react";
import { Section } from "../Section";
import "./WorkExperience.scss";
import { Award } from "react-feather";

interface EducationItemType {
    school: string;
    name: string;
    degree: string;
    range: string;
}

export interface EducationType {
    title: string;
    schools: EducationItemType[];
}

function concut(str: string, charStart: string, charEnd: string) {
    return str.slice(str.indexOf(charStart) + 1, str.indexOf(charEnd));
}

export function Education({ education }: { education: EducationType }) {

    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {education.title}
                </span>
            </Section.Title>
            <Section.Content>
                <ul className="list-group ">
                    {education.schools.map(item => {
                        const schoolLink = concut(item.school, '(', ')');
                        const schoolName = concut(item.school, '[', ']');

                        return (
                            <li className="list-group-item border-0 px-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href={schoolLink} className="d-flex align-items-center">
                                        <Award size="1rem" className="me-1" />
                                        {schoolName}
                                    </a>
                                    <span className="fs-7">{item.range}</span>
                                </div>
                                <div className="fs-7">{item.name}, {item.degree}</div>
                            </li>
                        );
                    })}
                </ul>
            </Section.Content>
        </Section>
    );
}