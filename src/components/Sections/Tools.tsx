import React from "react";
import { Section } from "../Section";
import { IconProps, TechKeywordIcon } from "./TechKeywords";
import { Tool } from "react-feather";
import './Tools.scss';

export interface ToolsType {
    title: string;
    tools: string;
}

export function Tools({ tools }: { tools: ToolsType }) {
    const toolsArr = tools.tools.split(', ');

    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {tools.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div className="d-flex flex-wrap">
                    {toolsArr.map((item, i) => {
                        const iconProps: IconProps = {
                            size: 14,
                            color: '#9fa8da',
                        }
                        const icon = TechKeywordIcon({ keyword: item, props: iconProps });
                        return (
                            <div className="p-1 pb-0 tool">
                                <div className="badge bg-primary fw-normal d-flex align-items-center tool-badge">
                                    {icon !== undefined ? <>{icon}</> : <Tool {...iconProps} />}
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