import React from "react";
import { Section } from "../Section";
import { IconProps, TechKeywordIcon } from "./TechKeywords";
import { Hash } from "react-feather";
import './Methodologies.scss';

export interface MethodologiesType {
    title: string;
    skills: string;
}

export function Methodologies({ methodologies }: { methodologies: MethodologiesType }) {
    const skills = methodologies.skills.split(', ');

    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {methodologies.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div className="d-flex flex-wrap ">
                    {skills.map((item, i) => {
                        const iconProps: IconProps = {
                            size: 14,
                            color: '#9fa8da',
                        }
                        const icon = TechKeywordIcon({ keyword: item, props: iconProps });
                        return (
                            <div className="p-1 pb-0 methodology">
                                <div className="d-flex align-items-center badge bg-primary fw-normal skill-badge">
                                    {icon !== undefined ? <>{icon}</> : <Hash {...iconProps} />}
                                    <span className="ms-1">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section.Content>
        </Section>
    );
}