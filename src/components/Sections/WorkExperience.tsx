import React from "react";
import { Section } from "../Section";
import { CircleFill } from "react-bootstrap-icons";
import "./WorkExperience.scss";

interface WorkExperienceItemType {
    role: string;
    company: string;
    summary: string;
    keys: string;
    range: string;
}

export interface WorkExperienceType {
    title: string;
    experiences: WorkExperienceItemType[];
}

function Summary({ summaries }: { summaries: string }) {
    return (
        <div style={{ fontSize: ".75rem", lineHeight: "1rem" }}>
            <ul className="list-group">
                {summaries.split('\n').map((summary, index) => {
                    return (
                        <>
                            {summary != '' && summary != null &&
                                <li key={index} className="list-group-item border-0 px-0">
                                    <CircleFill className="me-1" size={6} fill="#9fa8da" />
                                    {summary}
                                </li>
                            }
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

export function WorkExperience({ workExperience }: { workExperience: WorkExperienceType }) {
    const experiences = workExperience.experiences;
    const summaries = experiences[0].summary.split('\n');

    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {workExperience.title}
                </span>
            </Section.Title>

            <Section.Content>
                <div className="work-experinces pt-2">
                    {experiences.map((item, i) => {
                        return (
                            <>
                                <div key={i} className="row pb-3">
                                    <div className="col-md-5 company-info ">
                                        {/* <div className="d-flex h-100 align-items-center"> */}
                                        <div className="d-flex h-100 align-items-center">
                                            <div className="d-block">
                                                <div className="fs-5">{item.role}</div>
                                                <div className="company fw-bold">{item.company}</div>
                                                <div className="range">
                                                    {item.range}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <Summary summaries={item.summary} />
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </Section.Content>
        </Section>
    );
}