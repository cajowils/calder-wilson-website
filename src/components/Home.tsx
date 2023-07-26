import React from 'react';

const Home: React.FC = () => {
  return (
    <div id='home'>
        <h1>Home Page</h1>
        <img className="flex w-" src={process.env.PUBLIC_URL + '/images/calder.png'} alt="Myself" />
    </div>
  );
}

export default Home;
