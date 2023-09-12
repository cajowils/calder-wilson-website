import React, { useState } from 'react';
import getSkillLogo from './getSkillLogo';
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
    { name: 'Java', logo: getSkillLogo('Java') },
    { name: 'Python', logo: getSkillLogo('Python') },
    { name: 'C', logo: getSkillLogo('C') },
    { name: 'C++', logo: getSkillLogo('C++') },
    { name: 'JavaScript', logo: getSkillLogo('JavaScript') },
    { name: 'TypeScript', logo: getSkillLogo('TypeScript') },
    { name: 'SQL', logo: getSkillLogo('SQL') },
    { name: 'HTML', logo: getSkillLogo('HTML') },
    { name: 'CSS', logo: getSkillLogo('CSS') },
    { name: 'Bash', logo: getSkillLogo('Bash') },
]
const ToolsFrameworks: SkillInfo[] = [
    { name: 'AWS', logo: getSkillLogo('AWS') },
    { name: 'git', logo: getSkillLogo('git') },
    { name: 'CI/CD', logo: getSkillLogo('CI/CD') },
    { name: 'Jira', logo: getSkillLogo('Jira') },
    { name: 'UNIX', logo: getSkillLogo('UNIX') },
    { name: 'GraphQL', logo: getSkillLogo('GraphQL') },
    { name: 'Spring', logo: getSkillLogo('Spring') },
    { name: 'Spark', logo: getSkillLogo('Spark') },
    { name: 'Node.js', logo: getSkillLogo('Node.js') },
    { name: 'Express.js', logo: getSkillLogo('Express.js') },
    { name: 'REST', logo: getSkillLogo('REST') },
]
const Libraries: SkillInfo[] = [
    { name: 'React', logo: getSkillLogo('React') },
    { name: 'Tensorflow', logo: getSkillLogo('Tensorflow') },
    { name: 'Mockito', logo: getSkillLogo('Mockito') },
    { name: 'JUnit', logo: getSkillLogo('JUnit') },
    { name: 'Pandas', logo: getSkillLogo('Pandas') },
    { name: 'Handlebars.js', logo: getSkillLogo('Handlebars.js') },
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
