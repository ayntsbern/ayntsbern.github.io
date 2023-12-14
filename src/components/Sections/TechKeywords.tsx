import React from "react";
import TeamCityIcon from "../../icons/TeamCity";
import BashIcon from "react-devicons/bash/plain";
import CSSIcon from "react-devicons/css3/plain";
import ReactIcon from "react-devicons/react/original";
import JavaIcon from "react-devicons/java/plain";
import CucumberIcon from "react-devicons/cucumber/plain";
import HerokuIcon from "react-devicons/heroku/plain";
import JavaScriptIcon from "react-devicons/javascript/plain";
import JestIcon from "react-devicons/jest/plain";
import SalesforceIcon from "react-devicons/salesforce/plain";
import SpringIcon from "react-devicons/spring/plain";
import TypescriptIcon from "react-devicons/typescript/plain";
import GitIcon from "react-devicons/git/plain";
import VsCodeIcon from "react-devicons/vscode/plain";
import IntellijIcon from "react-devicons/intellij/plain";
import WebStormIcon from "react-devicons/webstorm/plain";
import JenkinsIcon from "react-devicons/jenkins/plain";

export interface IconProps extends React.SVGProps<SVGElement> {
  size?: number | string;
  color?: string;
}

//TODO: add more convinient approach to share values between ts and scss 
const props: IconProps = {
  size: 16,
  color: 'black',
}

export type KeywordsIconsType = {
  [key: string]: React.ReactNode;
};

const iconByKeyword = (props: IconProps) => {
  const map: KeywordsIconsType = {
    'bash': <BashIcon {...props} />,
    'css': <CSSIcon {...props} />,
    'cucumber': <CucumberIcon {...props} />,
    'git': <GitIcon {...props} />,
    'intellij': <IntellijIcon {...props} />,
    'intellij idea': <IntellijIcon {...props} />,
    'heroku': <HerokuIcon {...props} />,
    'java': <JavaIcon {...props} />,
    'js': <JavaScriptIcon {...props} />,
    'javascript': <JavaScriptIcon {...props} />,
    'jenkins': <JenkinsIcon {...props} />,
    'jest': <JestIcon {...props} />,
    'react': <ReactIcon {...props} />,
    'salesforce': <SalesforceIcon {...props} />,
    'spring framework': <SpringIcon {...props} />,
    'teamcity': <TeamCityIcon size={props.size} fill={props.fill} />,
    'ts': <TypescriptIcon {...props} />,
    'typescript': <TypescriptIcon {...props} />,
    'vscode': <VsCodeIcon {...props} />,
    'webstorm': <WebStormIcon {...props} />,
  }
  return map;
};

export const TechKeywordIcon = ({ keyword, props }: { keyword: string; props: IconProps }) => {
    return iconByKeyword(props)[keyword.toLowerCase()];
  };