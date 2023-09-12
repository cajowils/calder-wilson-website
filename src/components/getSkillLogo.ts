const getSkillLogo = (skillName: string): string => {
    
    const skillLogoMap: Record<string, string> = {
        'Java': process.env.PUBLIC_URL + 'logos/java-logo.svg',
        'Python': process.env.PUBLIC_URL + 'logos/python-logo.svg',
        'C': process.env.PUBLIC_URL + 'logos/c-logo.svg',
        'C++': process.env.PUBLIC_URL + 'logos/c++-logo.svg',
        'JavaScript': process.env.PUBLIC_URL + 'logos/javascript-logo.svg',
        'TypeScript': process.env.PUBLIC_URL + 'logos/typescript-logo.svg',
        'SQL': process.env.PUBLIC_URL + 'logos/sql-logo.svg',
        'HTML': process.env.PUBLIC_URL + 'logos/html-logo.svg',
        'CSS': process.env.PUBLIC_URL + 'logos/css-logo.svg',
        'Bash': process.env.PUBLIC_URL + 'logos/bash-logo.svg',
        'AWS': process.env.PUBLIC_URL + 'logos/aws-logo.svg',
        'git': process.env.PUBLIC_URL + 'logos/git-logo.svg',
        'CI/CD': process.env.PUBLIC_URL + 'logos/cicd-logo.svg',
        'Jira': process.env.PUBLIC_URL + 'logos/jira-logo.svg',
        'UNIX': process.env.PUBLIC_URL + 'logos/unix-logo.svg',
        'GraphQL': process.env.PUBLIC_URL + 'logos/graphql-logo.svg',   
        'Spring': process.env.PUBLIC_URL + 'logos/spring-logo.svg',
        'Spark': process.env.PUBLIC_URL + 'logos/spark-logo.svg',
        'Node.js': process.env.PUBLIC_URL + 'logos/node-logo.svg',
        'Express.js': process.env.PUBLIC_URL + 'logos/expressjs-logo.svg',
        'REST': process.env.PUBLIC_URL + 'logos/rest-logo.svg',
        'React': process.env.PUBLIC_URL + 'logos/react-logo.svg',
        'Tensorflow': process.env.PUBLIC_URL + 'logos/tensorflow-logo.svg',
        'Mockito': process.env.PUBLIC_URL + 'logos/mockito-logo.svg',
        'JUnit': process.env.PUBLIC_URL + 'logos/junit-logo.svg',
        'Pandas': process.env.PUBLIC_URL + 'logos/pandas-logo.svg',
        'Handlebars.js': process.env.PUBLIC_URL + 'logos/handlebarsjs-logo.svg',
        'Wix': process.env.PUBLIC_URL + 'logos/wix-logo.svg',
        'Flask' : process.env.PUBLIC_URL + 'logos/flask-logo.svg',
    }

    return skillLogoMap[skillName] || '';
  };

  export default getSkillLogo;