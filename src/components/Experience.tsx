import React, { useState } from 'react';
import '../assets/Experience.css';

const ExperienceCard = (props: {title: string, logo: string, company: string, date: string, description: string, skills: string[]}) => {
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
                  {/* <p>{props.description}</p> */}
              </div>
              <div className='back'>
                <img src={process.env.PUBLIC_URL + props.logo} alt={props.company} className='company-logo' />
                  {/* <h2>Skills</h2> */}
                    <div className='skill-images'>
                        {props.skills.map((skill, index) => <img key={index} src={process.env.PUBLIC_URL + skill} />)}
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
              description='Worked on the FireTV Search Team. Developed a new feature to monitor and alert on the health of the search service.' 
              skills={[
                'logos/java-logo.svg',
                'logos/javascript-logo.svg',
                'logos/aws-logo.svg',
                'logos/spark-logo.svg',
                'logos/html-logo.svg',
                'logos/sql-logo.svg',
                'logos/git-logo.svg',
                'logos/cicd-logo.svg',
                'logos/jira-logo.svg',
                'logos/spring-logo.svg',
                'logos/rest-logo.svg',
                'logos/handlebarsjs-logo.svg',
                'logos/mockito-logo.svg',
                'logos/junit-logo.svg',
            ]}
          />
          <ExperienceCard
              title='Software Engineer Intern' 
              logo='../logos/nm-logo.svg'
              company='Northwesern Mutual' 
              date='June 2022 - Aug 2022' 
              description='A brief description of your experience at this company.' 
              skills={[
                'logos/java-logo.svg',
                'logos/javascript-logo.svg',
                'logos/react-logo.svg',
                'logos/html-logo.svg',
                'logos/css-logo.svg',
                'logos/sql-logo.svg',
                'logos/aws-logo.svg',
                'logos/git-logo.svg',
                'logos/jira-logo.svg',
                'logos/graphql-logo.svg',
                'logos/spring-logo.svg',
  
            ]}
          />
        </div>
    </div>
  );
}


export default Experience;
