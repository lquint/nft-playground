import React from 'react';


export default function Home() {
  React.useEffect(() => {
    document.getElementById("homelink").classList.add('active-page');
    document.getElementById("aboutlink").classList.remove('active-page');
    document.getElementById("playgroundlink").classList.remove('active-page');
    document.getElementById("transactionslink").classList.remove('active-page');
  });

  return (
    <div className="w-8/12 mx-auto">
       <div className='flex justify-center mb-10 gap-x-6'>
          <img
            className="w-[643px] rounded-full"
            src="/img/mainImg.jpg"
            alt="NFT"
            />
          <div className='flex flex-col justify-center'>
            <p className="text-[80px] font-bold">Experiment <br/>With NFTs</p>
            <p className="text-[20px]">Make your first steps into web3</p>
            <p className="text-[20px]">Manipulate ERC-721 tokens to learn better</p>
          </div>
        </div>
        <div className='flex justify-center w-auto pb-6 gap-x-32'>
          <div className='flex flex-col items-center justify-end basis-[445px]'>
            <img
            className="w-[222px]"
            src="/img/nft_sell.png"
            alt="Functiunality Illustration"
            />
            <p className='font-light text-center text-[20px]'>Interact with a smart contract
calling methods like mint, transfer, burn</p>
          </div>
          <div className='flex flex-col items-center justify-end basis-[445px]'>
            <img
            className="w-[297px] mb-4"
            src="/img/transactions_v5.png"
            alt="Functiunality Illustration"
            />
            <p className='font-light text-center text-[20px]'>View all transactions made 
through the application</p>
          </div>
          <div className='flex flex-col justify-end items-center basis-[445px]'>
            <img
            className="w-[190px] mb-5"
            src="/img/developers-eth-blocks.png"
            alt="Functiunality Illustration"
            />
            <p className='font-light text-center text-[20px]'>Check the code behind the application to learn blockchain programming</p>
          </div>
        </div>
    </div>
  );
}
