import React from 'react';

const About = function about() {
  React.useEffect(() => {
    document.getElementById("aboutlink").classList.add('active-page');
    document.getElementById("homelink").classList.remove('active-page');
    document.getElementById("playgroundlink").classList.remove('active-page');
    document.getElementById("transactionslink").classList.remove('active-page');

  });
  
  return (
    <div className='content'>
      <h1 className='text-2xl mt-7'>About</h1>
      <p className='mt-5 text-lg'>
        To get more details about this project you can check the github repository <a className='underline' href='https://github.com/lquint/nftCenter' target="_blank" rel="noopener noreferrer">here</a>
      </p>
    </div>
  );
};

export default About;
