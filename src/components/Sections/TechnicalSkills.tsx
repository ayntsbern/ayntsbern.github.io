import { Section } from "../Section";

interface TechnicalSkillItemType {
    skill: string;
    level: number;
}

export interface TechnicalSkillsType {
    title: string;
    skills: TechnicalSkillItemType[];
}

export function TechnicalSkills({ technicalSkills }: { technicalSkills: TechnicalSkillsType }) {
    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {technicalSkills.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div className="row row-cols-2">
                    {technicalSkills.skills.map((item, i) => {
                        return (
                            <>
                                <div className="col">
                                    <span className="fs-7">{item.skill}</span>
                                </div>
                                <div className="col align-self-center mt-2 ps-0 pe-2">
                                    <div className="progress" style={{height: '0.5rem'}}>
                                        <div className="progress-bar progress-skill" role="progressbar" style={{ width: `${item.level * 100 / 5}%` }}
                                            aria-valuenow={item.level} aria-valuemin={0} aria-valuemax={5}>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </Section.Content>
        </Section >
    );
}