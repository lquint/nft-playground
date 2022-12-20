import React from 'react';

const Footer = function footer() {
  return <footer className='flex justify-center font-sans font-medium gap-x-24'>
    <div>
      <img
      className="w-[320px] mt-[-86px] mb-[-54px]"
      src="/img/nftPlayground_logo.png"
      alt="Your Company"
      />
      <div className='flex justify-center'>
        <div>    
          <p>CONTACT</p>
          <svg className='fill-current' width="30" height="30"><path d="M8.643 4A2.641 2.641 0 0 0 6 6.64C6 8.1 7.183 9.31 8.64 9.31c1.459 0 2.643-1.21 2.643-2.668A2.64 2.64 0 0 0 8.643 4zm12.892 7c-2.219 0-3.488 1.16-4.098 2.314h-.064v-2.003H13V26h4.557v-7.271c0-1.916.144-3.768 2.515-3.768 2.337 0 2.371 2.185 2.371 3.889V26H27v-8.068C27 13.984 26.151 11 21.535 11zm-15.172.31V26h4.56V11.31h-4.56z"/>
          </svg>
        </div>  
      </div>
    </div>
    <div className='flex justify-center basis-2/12'>
      <div className='flex flex-col items-start'>
        <p className=''>OVERVIEW</p>
        <p>About</p>
        <p>Terms of Use</p>
        <p>Press</p>
        <p>Privacy Policy</p>    
      </div>
    </div>
    <div className='flex justify-center basis-2/12'>
      <div className='flex flex-col items-start'>
        <p>CREDITS</p>
        <p>Image by pikisuperstar</p>
        <p>Image by Graphue</p>
      </div>
    </div>
  </footer>;
};

export default Footer;
