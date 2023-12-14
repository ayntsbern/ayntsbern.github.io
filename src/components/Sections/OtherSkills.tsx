import React from "react";
import { Section } from "../Section";
import { IconProps, TechKeywordIcon } from "./TechKeywords";
import { Terminal } from "react-feather";
import './OtherSkills.scss';

export interface OtherSkillsType {
    title: string;
    skills: string;
}

export function OtherSkills({ otherSkills }: { otherSkills: OtherSkillsType }) {
    const skills = otherSkills.skills.split(', ');

    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {otherSkills.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div className="d-flex flex-wrap">
                    {skills.map((item, i) => {
                        const iconProps: IconProps = {
                            size: 14,
                            color: 'white',
                        }
                        const icon = TechKeywordIcon({ keyword: item, props: iconProps });
                        return (
                            <div className="p-1 pb-0 other-skills">
                                <div className="d-flex align-items-center badge bg-primary fw-normal skill-badge">
                                    {icon !== undefined ? <>{icon}</> : <Terminal {...iconProps} />}
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