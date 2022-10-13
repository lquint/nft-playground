import React from "react";
import Image from "next/image"

const Test = () => {
    return ( 
        <>  
        <div className="container flex flex-row flex-wrap mx-auto overflow-y-auto bg-sky-400 gap-x-10 gap-y-10" >
            <div id="contractBar" className="flex flex-row mt-auto ml-4 gap-x-3">
                </div>
        </div>
        <div id="nftDisplay" className="container flex flex-row flex-wrap justify-center h-full mx-auto overflow-y-auto bg-sky-900 gap-x-10 gap-y-10" >
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                    <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                        <Image
                            objectFit='cover'
                            src="/nft/img/dummyNFT.png"
                            alt='dummy nft'
                            layout='fill'
                            priority
                            />
                    </div>    
                    <div className="mx-auto">
                        <p className="font-bold text-center text-slate-50">Dummy NFT</p>
                        <p className="text-center text-slate-500">No particular use</p>
                    </div>
                    <div className="flex flex-row justify-start px-6 pt-3 pb-1 flex-nowrap">
                            <div className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">ID : 23</div>
                            <div className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-400 rounded-full">ERC-721 Token</div>
                    </div>
                    <div className="flex flex-row mx-auto mt-auto gap-x-3">
                    <button className="relative flex items-center group justify-center w-6/12 px-4 py-2 mb-2 font-bold text-white transition duration-300 ease-in-out delay-150 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-indigo-500">
                    Transfer
                        <button className="absolute w-0 h-0 font-bold text-black transition-all duration-300 ease-in-out scale-0 rounded-full bg-orange-50 group-hover:scale-110 group-hover:w-full group-hover:h-full ">Transfer</button>
                    </button>
                    <button className="relative flex items-center justify-center w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full group bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 ">
                    Burn
                        <button className="absolute w-0 h-0 font-bold text-black transition-all duration-300 ease-in-out scale-0 rounded-full bg-orange-50 group-hover:scale-110 group-hover:w-full group-hover:h-full ">Burn</button>
                    </button>
                    </div>
                </div>

            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
            <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
            type="application/javascript"></script>
            <script src="https://cdn.tailwindcss.com"></script>
        </div>
        </>
        
     );
}
 
export default Test;