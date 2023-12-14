import React from "react";
import { Section } from "../Section";

export interface CareerObjectivesType {
    title: string;
    info: string;
}

export function CareerObjectives({ careerObjectives }: { careerObjectives: CareerObjectivesType }) {
    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {careerObjectives.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div  className="fs-7 white-space-pre-line">
                    {careerObjectives.info}
                </div>
            </Section.Content>
        </Section>
    );
}