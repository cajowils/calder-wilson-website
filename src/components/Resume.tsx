import React from 'react';
import '../assets/Resume.css';

const Resume: React.FC = () => {
  return (
    <div id='resume' className='resume-page'>
        <h1>Resume</h1>
        {/* <iframe src="/CalderWilsonResume.pdf" title='resume'></iframe> */}
        <iframe src='https://drive.google.com/file/d/164ZewC6KGWRlGFRjBMTMXC5assQ84GCP/preview' title='resume'></iframe>
    </div>
    );
}

export default Resume;
