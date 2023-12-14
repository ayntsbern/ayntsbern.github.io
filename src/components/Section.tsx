import React from 'react';
import './Section.scss';

const SectionBody = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`${className !== undefined ? className : ''} pt-2 pb-3`}>
        <div className='section'>
            {children}
        </div>
    </div>
);
const Title = ({ children }: { children: React.ReactNode }) => (
    <div className='header d-flex justify-content-center align-items-center gap-1 max-w-[60%]'>
        <div className='title'>
            {children}
        </div>
    </div>
);
const Content = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const Section = SectionBody as typeof SectionBody & {
    Title: typeof Title;
    Content: typeof Content;
};

Section.Title = Title;
Section.Content = Content;