import React, { useState } from 'react';
import getSkillLogo from './getSkillLogo';
import '../assets/Experience.css';

const ExperienceCard = (props: {title: string, logo: string, company: string, date: string, description: string[], skills: string[]}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`experience-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className='front'>
                <img src={process.env.PUBLIC_URL + props.logo} alt={props.company} className='company-logo' />
                <h2>{props.title}</h2>
                <h4>{props.date}</h4>
                <ul>
                    {props.description.map((desc, index) => <li key={index}>{desc}</li>)}
                </ul>
            </div>
            <div className='back'>
                <img src={process.env.PUBLIC_URL + props.logo} alt={props.company} className='company-logo' />
                <div className='skill-images'>
                    {props.skills.map((skill, index) => <img key={index} src={getSkillLogo(skill)} alt={skill} />)}
                </div>
            </div>
        </div>
    );
}




const Experience: React.FC = () => {


  return (
    <div id='experience' className='experience-page'>
        <h1>Experience</h1>
        <div className='experience-cards'>
          <ExperienceCard 
              title='Software Development Engineer Intern' 
              logo='../logos/amazon-logo.svg'
              company='Amazon' 
              date='Sept 2022 - Dec 2022' 
              description={[
                'Designed and delivered innovative product that positively impacted millions of customers, currently in active use',
                'Developed analytical AWS Batch job, achieving 70% decrease in time spent detecting performance drops and outages',
                'Pioneered the creation of a Java email-sending service and HTML formatter that streamlined data communication',
                'Ensured the seamless integration of my product into the codebase by writing comprehensive unit and end-to-end tests',
                'Completed stretch goal of building complementary UI that allows scheduling of custom jobs for more granular results',
            ]}
              skills={[
                'Java', 'JavaScript', 'AWS', 'Spark', 'HTML', 'SQL', 'git', 'CI/CD', 'Jira', 'Spring', 'REST', 'Handlebars.js', 'Mockito', 'JUnit'
            ]}
          />
          <ExperienceCard
              title='Software Engineer Intern' 
              logo='../logos/nm-logo.svg'
              company='Northwesern Mutual' 
              date='June 2022 - Aug 2022' 
              description={[
                'Enhanced GraphQL API consumer experience by developing an accessible React UI to preview client information',
                'Slashed MySQL queries by 50% for two separate Spring requests, boosting efficiency and performance',
                'Minimized AWS costs by optimizing Kubernetes pods using insightful analysis of Kibana logs',
                'Improved my department’s overall code quality by 40% through implementation of SonarQube in 70 GitLab pipelines',
            ]}
              skills={[
                'Java', 'JavaScript', 'React', 'HTML', 'CSS', 'SQL', 'AWS', 'git', 'Jira', 'GraphQL', 'Spring', 
            ]}
          />
        </div>
    </div>
  );
}


export default Experience;
