import React from "react";
import parse from 'html-react-parser';
import { Section } from "../Section";

export interface SummaryType {
    title: string;
    info: string;
}

export function Summary({ summary }: { summary: SummaryType }) {
    return (
        <Section>
            <Section.Title>
                <div>
                    {summary.title}
                </div>
            </Section.Title>
            <Section.Content>
                <div className="fs-7 white-space-pre-line">
                    {parse(summary.info)}
                </div>
            </Section.Content>
        </Section>
    );
}