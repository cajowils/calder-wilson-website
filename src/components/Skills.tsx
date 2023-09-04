import React, { useState } from 'react';
import '../assets/Skills.css';

interface SkillInfo {
    name: string,
    logo: string
}

const Skill = (props: {name: string, icon: string}) => {
    return (
        <div className='skill'>
        <img src={props.icon} alt={props.name} />
        <h3>{props.name}</h3>
        </div>
    );
}

const Languages: SkillInfo[] = [
    { name: 'Java', logo: '../logos/java-logo.svg' },
    { name: 'Python', logo: '../logos/python-logo.svg' },
    { name: 'C/C++', logo: '../logos/c-logo.svg' },
    { name: 'JavaScript', logo: '../logos/javascript-logo.svg' },
    { name: 'TypeScript', logo: '../logos/typescript-logo.svg'},
    { name: 'SQL', logo: '../logos/sql-logo.svg' },
    { name: 'HTML', logo: '../logos/html-logo.svg' },
    { name: 'CSS', logo: '../logos/css-logo.svg' },
    { name: 'Bash', logo: '../logos/bash-logo.svg'}
]
const ToolsFrameworks: SkillInfo[] = [
    { name: 'AWS', logo: '../logos/aws-logo.svg' },
    { name: 'git', logo: '../logos/git-logo.svg' },
    { name: 'CI/CD', logo: '../logos/cicd-logo.svg' },
    { name: 'Jira', logo: '../logos/jira-logo.svg' },
    { name: 'UNIX', logo: '../logos/unix-logo.svg' },
    { name: 'GraphQL', logo: '../logos/graphql-logo.svg' },
    { name: 'Spring', logo: '../logos/spring-logo.svg' },
    { name: 'Spark', logo: '../logos/spark-logo.svg' },
    { name: 'Node.js', logo: '../logos/node-logo.svg' },
    { name: 'Express.js', logo: '../logos/expressjs-logo.svg' },
    { name: 'REST', logo: '../logos/rest-logo.svg' },
]
const Libraries: SkillInfo[] = [
    { name: 'React', logo: '../logos/react-logo.svg' },
    { name: 'Tensorflow', logo: '../logos/tensorflow-logo.svg' },
    { name: 'Mockito', logo: '../logos/mockito-logo.svg' },
    { name: 'JUnit', logo: '../logos/junit-logo.svg' },
    { name: 'Pandas', logo: '../logos/pandas-logo.svg' },
    { name: 'Handlebars.js', logo: '../logos/handlebarsjs-logo.svg' },
]


const Skills: React.FC = () => {

    const [activeTab, setActiveTab] = useState('Languages');

    const Tabs = () => {
        return (
            <div className='skills-tabs'>
                <button className={activeTab === 'Languages' ? 'active' : ''} onClick={() => handleTabChange('Languages')}>Languages</button>
                <button className={activeTab === 'ToolsFrameworks' ? 'active' : ''} onClick={() => handleTabChange('ToolsFrameworks')}>Tools & Frameworks</button>
                <button className={activeTab === 'Libraries' ? 'active' : ''} onClick={() => handleTabChange('Libraries')}>Libraries</button>
            </div>
        );
    }

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }

    const renderSkills = (skills: SkillInfo[]): React.ReactNode => {
        return (
        <ul className='skills'>
            {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} icon={skill.logo} />
            ))}
        </ul>
        );
    };

    return (
    <div id='skills' className='skills-page'>
        <h1>Skills</h1>
        <Tabs />
        {activeTab === 'Languages' && renderSkills(Languages)}
        {activeTab === 'ToolsFrameworks' && renderSkills(ToolsFrameworks)}
        {activeTab === 'Libraries' && renderSkills(Libraries)}
    </div>
    );
}

export default Skills;
