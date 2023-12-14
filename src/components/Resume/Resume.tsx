import React from "react";
import "./Resume.scss";

import { WorkExperience, WorkExperienceType } from "../Sections/WorkExperience";
import { Summary, SummaryType } from "../Sections/Summary";
import { Education, EducationType } from "../Sections/Education";
import { About, AboutType, SocialNetworksType } from "../Sections/About";
import { Certificates, CertificatesType } from "../Sections/Certficates";
import { TechnicalSkills, TechnicalSkillsType } from "../Sections/TechnicalSkills";
import { CareerObjectives, CareerObjectivesType } from "../Sections/CareerObjectives";
import { OtherSkills, OtherSkillsType } from "../Sections/OtherSkills";
import { Methodologies, MethodologiesType } from "../Sections/Methodologies";
import { Tools, ToolsType } from "../Sections/Tools";
import { HeaderPlaceholder } from "../../App";

export interface ResumeType {
    basic: AboutType;
    summary: SummaryType;
    socialNetworks: SocialNetworksType;
    workExperience: WorkExperienceType;
    certificates: CertificatesType;
    careerObjectives: CareerObjectivesType;
    education: EducationType;
    technicalSkills: TechnicalSkillsType;
    otherSkills: OtherSkillsType;
    methodology: MethodologiesType;
    tools: ToolsType;
}

export function Resume({ resume }: { resume: ResumeType }) {
    return (
        <div className="container-xl">
            <div className="mobile-photo">
                {HeaderPlaceholder()}
            </div>
            <div className="name-section d-flex my-2">
                {resume.basic.firstName} {resume.basic.lastName}
            </div>
            <div className="row">
                <div className="col-xl-8 resume-sections">
                    <About about={resume.basic} socialNetworks={resume.socialNetworks} />
                    <div className="summary-section left">
                        <Summary summary={resume.summary} />
                    </div>
                    <WorkExperience workExperience={resume.workExperience} />
                    <Certificates certificates={resume.certificates} />
                </div>
                <div className="col-xl-4 resume-sections secondary-sections">
                    <div className="summary-section right">
                        <Summary summary={resume.summary} />
                    </div>
                    <CareerObjectives careerObjectives={resume.careerObjectives} />
                    <Education education={resume.education} />
                    <TechnicalSkills technicalSkills={resume.technicalSkills} />
                    <OtherSkills otherSkills={resume.otherSkills} />
                    <Methodologies methodologies={resume.methodology} />
                    <Tools tools={resume.tools} />
                </div>
            </div>
        </div>
    );
}
