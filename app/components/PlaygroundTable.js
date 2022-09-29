import Image from "next/image"
import shapelessNFT from "../public/nft/shapelessNFT.png"
import React from "react";
import Script from 'next/script'


const PlaygroundTable = () => {
    // Verify and alert if user is connected to Metamask
    async function isConnected() {
        const accounts = await ethereum.request({method: 'eth_accounts'});       
        if (accounts.length) {
            Swal.fire('Great ! You are connected with your Metamask Wallet !')
        } else {
            Swal.fire('Please install and connect to Metamask to use the playground section')
        }
     }


    React.useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        isConnected()
      });
    return ( 
        <div className="container flex flex-row flex-wrap justify-center h-full mx-auto overflow-y-auto bg-sky-900 gap-x-10 gap-y-10" >
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
            <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            <div className="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div className="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center text-slate-50">Shapeless NFT</p>
                    <p className="text-center text-slate-500">No particular use</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                        <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div className="flex flex-row mx-auto mt-auto gap-x-3">
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button className="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            </div>
     );
}
 
export default PlaygroundTable;