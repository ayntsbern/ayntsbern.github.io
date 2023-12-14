import { Section } from "../Section";
import { Image } from "react-bootstrap";
import "./Certificates.scss";

interface CertificateItemType {
    name: string;
    description: string;
    badge: string;
    proof: string;
    earnedDate: string;
}

export interface CertificatesType {
    title: string;
    certificates: CertificateItemType[];
}
export function Certificates({ certificates }: { certificates: CertificatesType }) {
    return (
        <Section>
            <Section.Title>
                <span className=''>
                    {certificates.title}
                </span>
            </Section.Title>
            <Section.Content>
                <div className="row">
                    {certificates.certificates.map(item => {
                        return (
                            <>
                                {/* TODO: fix scaling with more than 5 certificates and re-do tooltip */}
                                <div className="col-auto text-center py-1">
                                    <div className="row" style={{ width: 'min-content' }}>
                                        <a title={item.name} href={item.proof} className="col" style={{ cursor: 'help' }}>
                                            <Image src={item.badge} width="80" height="80" />
                                        </a>
                                        <div className="w-100"></div>
                                        <div className="fs-6 col">{item.earnedDate}</div>
                                        <div className="w-100"></div>
                                        <div className="col" style={{ fontSize: '.5rem' }}>{item.description}</div>
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

// export function Certificates({ certificates }: { certificates: CertificatesType }) {
//     return (
//         <Section>
//             <Section.Title>
//                 <span className='fs-4 whitespace-nowrap overflow-hidden overflow-ellipsis'>
//                     {certificates.title}
//                 </span>
//             </Section.Title>
//             <Section.Content>
//                 <ul className="certificates list-group list-group-horizontal-lg">
//                     {certificates.certificates.map(item => {
//                         return (
//                             <>
//                                 {/* TODO: fix scaling with more than 5 certificates and re-do tooltip */}
//                                 <li className="text-center list-group-item">
//                                     <div className="row" style={{ width: 'min-content' }}>
//                                         <a title={item.name} href={item.proof} className="col" style={{ cursor: 'help' }}>
//                                             <Image src={item.badge} width="80" height="80" />
//                                         </a>
//                                         <div className="w-100"></div>
//                                         <div className="fs-6 col">{item.earnedDate}</div>
//                                         <div className="w-100"></div>
//                                         <div className="col" style={{ fontSize: '.5rem' }}>{item.description}</div>
//                                     </div>
//                                 </li>
//                             </>
//                         );
//                     })}
//                 </ul>
//             </Section.Content>
//         </Section>
//     );
// }