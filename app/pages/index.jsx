import React from 'react';


export default function Home() {
  return (
    <div className="content">
       <div className='flex justify-center'>
          <img
            className="w-[1095px] rounded-full"
            src="/img/mainImg.jpg"
            alt="NFT"
            />
          <div className='flex flex-col justify-center'>
            <p className="text-[80px] font-bold">Experiment With NFTs</p>
            <p className="text-[20px]">Make your first steps into web3</p>
            <p className="text-[20px]">Manipulate ERC-721 tokens to learn better</p>
          </div>
        </div>
        <div className='flex justify-center gap-x-32'>
          <div className='flex flex-col justify-center'>
            <img
            className="w-[222px]"
            src="/img/nft_sell.png"
            alt="Functiunality Illustration"
            />
            <p className='text-center'>AA</p>
          </div>
          <div className='flex flex-col justify-center'>
            <img
            className="w-[297px]"
            src="/img/transactions_v5.png"
            alt="Functiunality Illustration"
            />
            <p className='text-center'>AA</p>
          </div>
          <div>
            <img
            className="w-[297px]"
            src="/img/developers-eth-blocks.png"
            alt="Functiunality Illustration"
            />
            <p className='text-center'>AA</p>
          </div>
        </div>
    </div>
  );
}
